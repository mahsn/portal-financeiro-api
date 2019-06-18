const User = require('../../models/user')
const router = require('express').Router()


// Handlers are responsible for managing the request and response objects, and link them to a service module that will do the hard work.
// Each of the following handlers has the req and res parameters, which stands for request and response. 
// Each handler of this module represents an HTTP verb (GET, POST, PUT and DELETE) that will be linked to them in the future through a router.

// router.get('/', (req, res, next) => {
//     return res.status(200).json(UserRespository)
// })

router.post('/', (req, res, next) => {

    const generateRandom = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)

        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    if(!req.body) return res.status(400).json({msg: 'Missing User'})
    
    const user  = new User({
        cdUnb:generateRandom(111, 1113),
        cdCliente:generateRandom(11, 111),
        inadimplente: generateRandom(11, 111) % 2 === 0 ? true : false,
    })
    
    user.save()
        .then(saveduser => {
            return res.status(201).json(saveduser)
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({msg:'Error saving user'})
        })
})


module.exports = router