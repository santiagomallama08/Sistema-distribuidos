const {response, request} = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const ShowPagos = async(req=request, res=response)=>{

    const pago = await prisma.users.findMany()
    .catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        tiquete
    });
};

const AddPagos = async(req=request, res=response)=>{

    const { Metodo, monto, fecha } = req.body;

    const result = await prisma.users.create({
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

const ShowPago = async(req=request, res=response)=>{
    res.json({
        "saludo":"soy la respuesta de mostrar usuarios"
    });
};

const EditPago = async(req=request, res=response)=>{
    const { id } = req.params;

    const { Metodo, monto, fecha} = req.body;

    const result = await prisma.users.update({
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
    AddPagos,
    ShowPago,
    ShowPagos,
    EditPago,
    DeletePago
};