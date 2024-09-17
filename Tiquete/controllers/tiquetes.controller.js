const {response, request} = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const ShowTiquete = async(req=request, res=response)=>{

    const tiquete = await prisma.users.findMany()
    .catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        tiquete
    });
};

const AddTiquete = async(req=request, res=response)=>{

    const { Hora, Fecha, Origen, LLegada  } = req.body;

    const result = await prisma.users.create({
        data: {
            Hora,
            Fecha,
            Origen,
            LLegada

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

const ShowTiquet = async(req=request, res=response)=>{
    res.json({
        "saludo":"soy la respuesta de mostrar usuarios"
    });
};

const EditTiquet = async(req=request, res=response)=>{
    const { id } = req.params;

    const { Hora, Fecha, Origen, LLegada} = req.body;

    const result = await prisma.users.update({
        where:{
            id: Number(id)
        },
        data: {
            Hora,
            Fecha,
            Origen,
            LLegada
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

const DeleteTiquet = async(req=request, res=response)=>{
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
    AddTiquete,
    ShowTiquete,
    ShowTiquet,
    EditTiquet,
    DeleteTiquet
};