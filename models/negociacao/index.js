const mongoose = require('mongoose')
const uuid = require('uuid/v4')

const Negociacao = new mongoose.Schema({
    _id: {
        type: String,
        default: uuid()
    },
    ipgeografia: String,
    ppopcao: String,
    requisicao: String,
    opcao: String,
    cdUnb: String,
    cdCliente: String
})

module.exports = mongoose.model('Negociacao', Negociacao)