const {response, request} = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const ShowAdministrador = async(req=request, res=response)=>{

    const cliente = await prisma.users.findMany()
    .catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        tiquete
    });
};

const AddAdministrador = async(req=request, res=response)=>{

    const { id_administrador} = req.body;

    const result = await prisma.users.create({
        data: {
            id_administrador
          

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

const ShowAdministradors = async(req=request, res=response)=>{
    res.json({
        "saludo":"soy la respuesta de mostrar usuarios"
    });
};

const EditAdministrador = async(req=request, res=response)=>{
    const { id } = req.params;

    const { Nombre,Coordenadas,fecha,hora,idbus} = req.body;

    const result = await prisma.users.update({
        where:{
            id: Number(id)
        },
        data: {
            id_cliente
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

const DeleteAdministrador = async(req=request, res=response)=>{
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


module.exports = {
    AddAdministrador,
    ShowAdministradors,
    ShowAdministradors,
    EditAdministrador,
    DeleteAdministrador
};