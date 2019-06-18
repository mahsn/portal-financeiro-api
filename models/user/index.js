const mongoose = require('mongoose')
const uuid = require('uuid/v4')

const User = new mongoose.Schema({
    cdUnb: Number,
    cdCliente: Number,
    inadimplente:Boolean
})

module.exports = mongoose.model('User', User)