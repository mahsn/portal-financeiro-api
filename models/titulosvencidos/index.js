const mongoose = require('mongoose')
const uuid = require('uuid/v4')
const tituloVencido = require(".")

const TituloVencido = new mongoose.Schema({
    ipgeografia: String,
    ppopcao: String,
    requisicao: String,
    opcao: String,
    cdUnb: String,
    cdCliente: String
})

module.exports = mongoose.model('TituloVencido', TituloVencido)