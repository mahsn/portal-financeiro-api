const router = require('express').Router()

router.use('/', require('../../handlers/user'))

module.exports = router