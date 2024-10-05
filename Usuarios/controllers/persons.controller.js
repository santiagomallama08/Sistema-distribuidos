const {response, request} = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const ShowPersons = async(req=request, res=response)=>{

    const persons = await prisma.persons.findMany()
    .catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        persons
    });
};

const AddPersons = async(req=request, res=response)=>{

    const { email, password } = req.body;

    const result = await prisma.persons.create({
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

const ShowPerson = async(req=request, res=response)=>{
    res.json({
        "saludo":"soy la respuesta de mostrar usuarios"
    });
};

const EditPersons = async(req=request, res=response)=>{
    const { id } = req.params;

    const { email, password } = req.body;

    const result = await prisma.persons.update({
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

const DeletePersons = async(req=request, res=response)=>{
    const { id } = req.params;

    const result = await prisma.persons.delete({
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
    AddPersons,
    ShowPersons,
    ShowPerson,
    EditPersons,
    DeletePersons
};