const {response, request} = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const ShowPagos = async(req=request, res=response)=>{

    const pago = await prisma.pago.findMany()
    .catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        pago
    });
};

const AddPagos = async(req=request, res=response)=>{

    const { Metodo, monto, fecha } = req.body;

    const result = await prisma.pago.create({
        data: {
            Metodo,
            monto,
            fecha
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

const ShowPago = async(req = request, res = response) => {
    const { id } = req.params;

    try {
        const pago = await prisma.pago.findUnique({
            where: {
                id: Number(id)
            }
        });

        if (!pago) {
            return res.status(404).json({
                message: "Pago no encontrado"
            });
        }

        res.json({
            pago
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    } finally {
        await prisma.$disconnect();
    }
};

const EditPago = async(req=request, res=response)=>{
    const { id } = req.params;

    const { Metodo, monto, fecha} = req.body;

    const result = await prisma.pago.update({
        where:{
            id: Number(id)
        },
        data: {
            Metodo,
            monto,
            fecha
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

const DeletePago = async(req=request, res=response)=>{
    const { id } = req.params;

    const result = await prisma.pago.delete({
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
    AddPagos,
    ShowPago,
    ShowPagos,
    EditPago,
    DeletePago
};