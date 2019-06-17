const router = require('express').Router()

router.post('/', (req, res, next) => {
    return res.status(200).json({
        TotaisNegociacao: [
            {
                vlTotalSemCorrecao: 141.35,
                vlTotalCorrigido: 141.35,
                vlTotalBoleto: 143.56,
                vlTotalParcelado: 244.11,
                prJuros: 0,
                prMulta: 0
            }
        ] 
    })
})

module.exports = router