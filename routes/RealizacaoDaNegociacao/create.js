const router = require('express').Router()

router.post('/', (req, res, next) => {
    return res.status(200).json({
        "success": [
            {
                "message": "Processo concluído!"
            }
        ]
    })
})

module.exports = router