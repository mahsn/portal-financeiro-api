const mongoose = require('mongoose')
const uuid = require('uuid/v4')

const TotalNegociacao = new mongoose.Schema({
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
    nrTituloLst: String,
    dtVencimentoLst: String,
    vlTituloLst: String,
    cdEmpresaLst: String,
    cdFilialLst: String,
    nrParcelaLst: String,
    dtEmissaoLst: String,
    nrDiasEmAbertoLst: String
    

})

module.exports = mongoose.model('TotalNegociacao', TotalNegociacao)