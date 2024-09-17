const {response, request} = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const ShowDestinos = async(req=request, res=response)=>{

    const destino = await prisma.users.findMany()
    .catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        tiquete
    });
};

const AddDestino = async(req=request, res=response)=>{

    const { Nombre,Coordenadas,fecha,hora,idbus } = req.body;

    const result = await prisma.users.create({
        data: {
            Nombre,
            Coordenadas,
            fecha,
            hora,
            idbus
          

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

const ShowDestino = async(req=request, res=response)=>{
    res.json({
        "saludo":"soy la respuesta de mostrar usuarios"
    });
};

const EditDestino = async(req=request, res=response)=>{
    const { id } = req.params;

    const { Nombre,Coordenadas,fecha,hora,idbus} = req.body;

    const result = await prisma.users.update({
        where:{
            id: Number(id)
        },
        data: {
            Nombre,
            Coordenadas,
            fecha,
            hora,
            idbus
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

const DeleteDestino = async(req=request, res=response)=>{
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
    AddDestino,
    ShowDestinos,
    ShowDestino,
    EditDestino,
    DeleteDestino
};