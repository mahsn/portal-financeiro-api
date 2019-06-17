const router = require('express').Router()
// const TituloVencido = require('../../models/TituloVencido')

router.get('/', (req, res, next) => {
    return res.status(200).json({ 
        TitulosEmAberto: {
            cdEmpresa: 81,
            cdFilial: 800,
            nrTitulo: 67867,
            nrParcela: 0,
            cdEspecie: 4,
            dsEspecie: "Bloqueto",
            dtEmissao: "15/07/2008",
            dtVencimento: "22/07/2008",
            vlTitulo: 141.35,
            nrDiasEmAberto: 3968,
            stTitulo: "Vencido"
        }
    })
})

module.exports = router