const {response, request} = require('express');
const { PrismaClient } = require('@prisma/client');
const { Encrypt, Decrypt } = require('../middlewares/validate');
const {CreateJWT} = require('../middlewares/jwt');

const prisma = new PrismaClient();

const ShowUsers = async(req=request, res=response)=>{

    const users = await prisma.users.findMany()
    .catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        users
    });
};

const AddUsers = async(req=request, res=response)=>{

    let { email, password } = req.body;

    password = Encrypt(password)

    const result = await prisma.users.create({
        data: {
            email,
            password
        }
    }).catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        result
    });
};

const ShowUser = async(req = request, res = response) => {
    const { id } = req.params;

    try {
        const user = await prisma.users.findUnique({
            where: {
                id: Number(id)
            }
        });

        if (!user) {
            return res.status(404).json({
                message: "Usuario no encontrado"
            });
        }

        res.json({
            user
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    } finally {
        await prisma.$disconnect();
    }
};

const EditUsers = async(req=request, res=response)=>{
    const { id } = req.params;

    const { email, password } = req.body;

    const result = await prisma.users.update({
        where:{
            id: Number(id)
        },
        data: {
            email,
            password
        }
    }).catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        result
    });

};

const DeleteUsers = async(req=request, res=response)=>{
    const { id } = req.params;

    const result = await prisma.users.delete({
        where:{
            id: Number(id)
        }
    }).catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        result
    });
};

const Login = async(req=request, res=response)=>{

    let { email, password } = req.body;

    const user = await prisma.users.findFirst({
        where:{
            email
        }
    }).catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));
    
    if(user){
        if(Decrypt(user.password)==password){
            userJWT = Encrypt(CreateJWT(user));
            
            res.json({
                user,
                userJWT
            })
        }else{
            res.json({"msn": "Contraseña incorrecta"})
        }
    }else{
        res.json({"msn": "Usuario no encontrado"})
    }
    

};


module.exports = {
    AddUsers,
    ShowUsers,
    ShowUser,
    EditUsers,
    DeleteUsers,
    Login
};