const router = require('express').Router()

router.use('/', require('../../handlers/formasdepagamento'))

module.exports = router