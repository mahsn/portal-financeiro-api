const mongoose = require('mongoose')
const uuid = require('uuid/v4')

const Negociacao = new mongoose.Schema({
    vlTotalSemCorrecao:Number,
    vlTotalCorrigido:Number,
    vlTotalBoleto: Number,
    vlTotalParcelado: Number,
    prJuros: Number,
    prMulta: Number
})

module.exports = mongoose.model('Negociacao', Negociacao)