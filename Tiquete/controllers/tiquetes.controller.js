const {response, request} = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const ShowTiquete = async(req=request, res=response)=>{

    const tiquete = await prisma.tiquete.findMany()
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

    const result = await prisma.tiquete.create({
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

const ShowTiquet = async(req=request, res=response) => {
    const { id } = req.params;  // Extraer el ID de los parámetros de la ruta

    const tiquete = await prisma.tiquete.findUnique({
        where: {
            id: Number(id)  // Convertir el ID a número para la consulta
        }
    }).catch(err => {
        return err.message;
    }).finally(async () => {
        await prisma.$disconnect();
    });

    if (!tiquete) {
        return res.status(404).json({
            message: 'Tiquete no encontrado'
        });
    }

    res.json({
        tiquete
    });
};


const EditTiquet = async(req=request, res=response)=>{
    const { id } = req.params;

    const { Hora, Fecha, Origen, LLegada} = req.body;

    const result = await prisma.tiquete.update({
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

    const result = await prisma.tiquete.delete({
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