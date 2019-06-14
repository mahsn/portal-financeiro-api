const router = require('express').Router()

// Do not create routes in this file
// Leave it only to import the routes
// E.g.: router.use('/[ROUTE_NAME]', require('./[PATH]'))

// Remove the line below once the routes have been created.
router.get('/', (req, res, next) => {
    return res.status(200).json({ msg: 'API endpoint'})
})

module.exports = router