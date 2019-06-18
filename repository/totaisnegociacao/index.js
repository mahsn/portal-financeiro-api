// Creating a fake list of titulos vencidos to eliminate database consulting.
const mockedTotaisdeNegociacaoList = [
    {
        TotaisNegociacao: {
            vlTotalSemCorrecao: 141.35,	
            vlTotalCorrigido: 141.35,		
            vlTotalBoleto: 143.56,
            vlTotalParcelado: 244.11,
            prJuros: 0,
            prMulta: 0
       }
    }
]

// Exporting the methods of the repository module.
module.exports = mockedTotaisdeNegociacaoList