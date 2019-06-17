const mongoose = require('mongoose')
const uuid = require('uuid/v4')

const GerarBoleto = new mongoose.Schema({
    _id: {
        type: String,
        default: uuid()
    },
    ipgeografia: String,
    ppopcao: String,
    requisicao: String,
    opcao: String,
    cdUnb: String,
    link: String
})

module.exports = mongoose.model('GerarBoleto', GerarBoleto)