const User = require('../../models/user')
const router = require('express').Router()


// Handlers are responsible for managing the request and response objects, and link them to a service module that will do the hard work.
// Each of the following handlers has the req and res parameters, which stands for request and response. 
// Each handler of this module represents an HTTP verb (GET, POST, PUT and DELETE) that will be linked to them in the future through a router.

router.get('/', (req, res, next) => {
    return res.status(200).json(User)
})

router.post('/', (req, res, next) => {
    if(!req.body) return res.status(400).json({msg: 'Missing User'})
    const user  = new User({
         "cdUnb": req.body.cdUnb,
         "cdCliente": req.body.cdCliente,
         "inadimplente":req.body.inadimplente   
    })
    
    user.save()
        .then(saveduser => {
            return res.status(201).json(saveduser)
        })
        .catch(err => {
            return res.status(500).json({msg:'Error saving user'})
        })
})


module.exports = router