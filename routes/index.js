const router = require('express').Router()

router.use('/titulos-vencidos', require('./TitulosVencidos'))
router.use('/totais-negociacoes', require('./TotaisNegociacao'))
router.use('/formas-pagamento', require('./FormasDePagamento'))
router.use('/realizacao-de-negociacao', require('./RealizacaoDaNegociacao'))
router.use('/negociacao', require('./Negociacao'))


module.exports = router