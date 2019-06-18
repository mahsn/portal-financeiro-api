const repository = require('../../repository/titulosvencidos')
const TitulosVencidos = require('../../models/titulosvencidos')
const User = require('../../models/user')
const router = require('express').Router()

// Handlers are responsible for managing the request and response objects, and link them to a service module that will do the hard work.
// Each of the following handlers has the req and res parameters, which stands for request and response. 
// Each handler of this module represents an HTTP verb (GET, POST, PUT and DELETE) that will be linked to them in the future through a router.

router.get('/', (req, res, next) => {
    return res.status(200).json({repository})
})

router.post('/', (req, res, next) => {
    const inadimplentes = User.find({ inadimplente: true }, function (err, users) {
        if (err) return console.error(err)
        
        const especie = [
            "Bloqueto",
            "Venda a Vista",
            "Cheque Pre",
            "Esp. Boleto Avulso",
            "Bloqueto",
            "Crédito Conta",
            "Aviso Debito Tarifa",     
            "Vale",                   
            "Boleto Comodato",
            "Cheque Devolvido",
            "Cheque Representado",
            "Confissão de Dívida",
            "Adiantamento FP.",
            "Aviso Débito",
            "Vale Funcionário",
            "Vale Funcionário Out.",
            "Vale Vasilhame",
            "Cartão Débito a Vista",
            "Cartão Débito a Prazo"
        ]

        let titulo = new TitulosVencidos({
            cdEmpresa: Math.floor(Math.random() + 1) * 100,
            cdFilial: Math.floor(Math.random() + 1) * 1000,
            nrTitulo: Math.floor(Math.random() + 1) * 100000,
            nrParcela: Math.floor(Math.random() + 1) * 12,
            cdEspecie: Math.floor(Math.random() + 1) * 99,
            dsEspecie: especie[Math.floor(Math.random() + 1) * especie.length],
            dtEmissao: "20/04/2018",
            dtVencimento: "20/04/2018",
            vlTitulo: (Math.random() + 1) * 9999,
            nrDiasEmAberto: Math.floor(Math.random() + 1) * 999999999,
            stTitulo: "Vencido"
        })
        titulo.save()
            .then(newBill => {
                return res.status(201).json(newBill)
            })
            .catch(err => {
                console.log(err);
                return res.status(500).json({msg:'Error saving bill'})
            })
    })
})

module.exports = router