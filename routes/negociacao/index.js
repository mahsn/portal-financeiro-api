const router = require('express').Router()

router.use('/', require('../../handlers/negociacao'))

module.exports = router