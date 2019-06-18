const repository = require('../../repository/formasdepagamento')
const router = require('express').Router()

// Handlers are responsible for managing the request and response objects, and link them to a service module that will do the hard work.
// Each of the following handlers has the req and res parameters, which stands for request and response. 
// Each handler of this module represents an HTTP verb (GET, POST, PUT and DELETE) that will be linked to them in the future through a router.

router.post('/', (req, res, next) => {
    return res.status(200).json({repository})
})

module.exports = router