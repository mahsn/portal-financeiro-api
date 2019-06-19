// Creating a fake list of payments methods to eliminate database consulting.
const mockedNegociacao = [
    {
            TotaisNegociacao: [
                {
                    vlTotalSemCorrecao: 141.35,
                    vlTotalCorrigido: 141.35,
                    vlTotalBoleto: 143.56,
                    vlTotalParcelado: 244.11,
                    prJuros: 0,
                    prMulta: 0
                }
            ]
        }
]

module.exports = mockedNegociacao