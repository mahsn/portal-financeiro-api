const mongoose = require('mongoose')
const uuid = require('uuid/v4')

const User = new mongoose.Schema({
    _id: {
        type: String,
        default: uuid()
    },
    cdUnb: String,
    cdCliente: String,
    inadimplente:Boolean
})

module.exports = mongoose.model('User', User)