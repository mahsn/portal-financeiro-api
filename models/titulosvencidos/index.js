const mongoose = require('mongoose')
const uuid = require('uuid/v4')

const TituloVencido = new mongoose.Schema({
    cdEmpresa: Number,
    cdFilial: Number,
    nrTitulo: Number,
    nrParcela: Number,
    cdEspecie: Number,
    dsEspecie: String,
    dtEmissao: String,
    dtVencimento: String,
    vlTitulo: Number,
    nrDiasEmAberto: Number,
    stTitulo: String
})

module.exports = mongoose.model('TituloVencido', TituloVencido)