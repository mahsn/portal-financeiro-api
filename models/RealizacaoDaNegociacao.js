const mongoose = require('mongoose')
const uuid = require('uuid/v4')

const RealizacaoDaNegociacao = new mongoose.Schema({
    _id: {
        type: String,
        default: uuid()
    },
    ppopcao: String,
    requisicao: String,
    opcao: String,
    cdUnb: String,
    cdCliente: String,
    qtDiasInadimplencia: String,
    dsEmail: String,
    tpNegociacao: String,
    nrParcelas: String,
    idPeriodicidade: String,
    idEntrada: String,
    nrTituloLst: String,
    dtVencimentoLst: String,
    vlTituloLst: String, 
    cdEmpresaLst: String,
    cdFilialLst: String,
    nrParcelaLst: String,
    dtEmissaoLst: String,
    nrDiasEmAbertoLst: String
})

module.exports = mongoose.model('RealizacaoDaNegociacao', RealizacaoDaNegociacao)