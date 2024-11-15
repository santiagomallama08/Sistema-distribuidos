const {response, request} = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const ShowDestinos = async(req=request, res=response)=>{

    const destino = await prisma.destino.findMany()
    .catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        destino
    });
};

const AddDestino = async(req=request, res=response)=>{

    const { Nombre,Coordenadas,fecha,hora } = req.body;

    const result = await prisma.destino.create({
        data: {
            Nombre,
            Coordenadas,
            fecha,
            hora
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
const ShowDestino = async(req = request, res = response) => {
    const { id } = req.params;

    try {
        const destino = await prisma.destino.findUnique({
            where: {
                id: Number(id)
            }
        });

        if (!destino) {
            return res.status(404).json({
                message: "Destino no encontrado"
            });
        }

        res.json({
            destino
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    } finally {
        await prisma.$disconnect();
    }
};

const EditDestino = async(req=request, res=response)=>{
    const { id } = req.params;

    const { Nombre,Coordenadas,fecha,hora} = req.body;

    const result = await prisma.destino.update({
        where:{
            id: Number(id)
        },
        data: {
            Nombre,
            Coordenadas,
            fecha,
            hora
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

    const result = await prisma.destino.delete({
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