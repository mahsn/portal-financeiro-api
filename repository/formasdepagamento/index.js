// Creating a fake list of payments methods to eliminate database consulting.
const mockedFormadePagamentosList = [
    {
        Parcelamento: {
            idPeridodicidade: "S",
            idEntrada: "N",
            dsFormaParcelamento: "Semanal S/ Entrada",
            Parcelas: [
                {
                    nrParcelas: 1,
                    vlTotalParcelado: 143.23,
                    vlPrimeiraParcela: 143.23,
                    vlDemaisParcelas: 143.23,
                    dtPrimeiroVenc: "07/06/2019"
                }
            ]
        }
    }
]

module.exports = mockedFormadePagamentosList