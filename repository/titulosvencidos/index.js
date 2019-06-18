
// Creating a fake list of titulos vencidos to eliminate database consulting.
const mockedTituloVencidoList = [{
    TitulosEmAberto: [
        {
            "cdEmpresa": 81,
            "cdFilial": 800,
            "nrTitulo": 67867,
            "nrParcela": 0,
            "cdEspecie": 4,
            "dsEspecie": "Bloqueto",
            "dtEmissao": "15/07/2008",
            "dtVencimento": "22/07/2008",
            "vlTitulo": 141.35,
            "nrDiasEmAberto": 3968,
            "stTitulo": "Vencido"
        },
        {
            "cdEmpresa": 81,
            "cdFilial": 800,
            "nrTitulo": 69481,
            "nrParcela": 0,
            "cdEspecie": 4,
            "dsEspecie": "Bloqueto",
            "dtEmissao": "16/07/2008",
            "dtVencimento": "23/07/2008",
            "vlTitulo": 552.73,
            "nrDiasEmAberto": 3967,
            "stTitulo": "Vencido"
        },
        {
            "cdEmpresa": 81,
            "cdFilial": 800,
            "nrTitulo": 71574,
            "nrParcela": 0,
            "cdEspecie": 4,
            "dsEspecie": "Bloqueto",
            "dtEmissao": "18/07/2008",
            "dtVencimento": "25/07/2008",
            "vlTitulo": 710.71,
            "nrDiasEmAberto": 3965,
            "stTitulo": "Vencido"
        },
        {
            "cdEmpresa": 81,
            "cdFilial": 800,
            "nrTitulo": 73532,
            "nrParcela": 0,
            "cdEspecie": 4,
            "dsEspecie": "Bloqueto",
            "dtEmissao": "22/07/2008",
            "dtVencimento": "29/07/2008",
            "vlTitulo": 1483.64,
            "nrDiasEmAberto": 3961,
            "stTitulo": "Vencido"
        }
    ]
}]


// Creating a method that returns the mockedTituloVencidoList.

// Exporting the methods of the repository module.
module.exports = mockedTituloVencidoList