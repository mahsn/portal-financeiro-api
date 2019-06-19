const mongoose = require('mongoose')
const uuid = require('uuid/v4')

// const FormaPagamento = new mongoose.Schema({
//     Parcelamento: [
//         {
//             idPeridodicidade: String,
//             idEntrada: String,
//             dsFormaParcelamento: String,
//             Parcelas: [
//                 {
//                     nrParcelas: Number,
//                     vlTotalParcelado: Number,
//                     vlPrimeiraParcela: Number,
//                     vlDemaisParcelas: Number,
//                     dtPrimeiroVenc: Date
//                 }
//             ]     
//         }      
//     ]
// })

// module.exports = mongoose.model('FormaPagamento', FormaPagamento)