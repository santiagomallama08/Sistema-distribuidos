const {response, request} = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const ShowClientes = async(req=request, res=response)=>{

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

const AddClientes = async(req=request, res=response)=>{

    const { id_cliente} = req.body;

    const result = await prisma.users.create({
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

const ShowClients = async(req=request, res=response)=>{
    res.json({
        "saludo":"soy la respuesta de mostrar usuarios"
    });
};

const EditClientes = async(req=request, res=response)=>{
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

const DeleteCliente = async(req=request, res=response)=>{
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
    AddClientes,
    ShowClientes,
    ShowClients,
    EditClientes,
    DeleteCliente
};