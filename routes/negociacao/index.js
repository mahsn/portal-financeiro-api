const router = require('express').Router()

router.get('/', require('./read'))

module.exports = router