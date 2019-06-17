const mongoose = require('mongoose')
const uuid = require('uuid/v4')
const tituloVencido = require("../models/titulosVencidos")

const TituloVencido = new mongoose.Schema({
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

module.exports = mongoose.model('TituloVencido', TituloVencido)