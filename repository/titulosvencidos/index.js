
// Creating a fake list of titulos vencidos to eliminate database consulting.
const mockedTituloVencidoList = [
    {
        TitulosEmAberto:{
            cdEmpresa: 81,
            cdFilial : 800,
            nrTitulo : 67867,
            nrParcela : 0,
            cdEspecie : 4,
            dsEspecie : "Bloqueto",
            dtEmissao : "15/07/2008",
            dtVencimento : "22/07/2008",
            vlTitulo : 141.35,
            nrDiasEmAberto : 3968,
            stTitulo : "Vencido"    
        }
        }
]

// Creating a method that returns the mockedTituloVencidoList.

// Exporting the methods of the repository module.
module.exports = mockedTituloVencidoList