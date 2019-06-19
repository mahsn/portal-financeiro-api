// Creating a fake list of payments methods to eliminate database consulting.
const mockedTitulosNegociados = [
    {
        Negociacoes: [
            {
                nrAcao: 170001,
                prJuros: 0,
                prMulta: 0,
                vlTotalNegociacao: 143.56,
                dsFormaNegociacao: "Boleto Avulso",
                tpFrequenciaPagto: "",
                Boletos: [
                    {
                        nrParcela: 1,
                        vlBoleto: 143.56,
                        dtVencBoleto: "17/06/2019",
                        stBoleto: 0,
                        cdBarraBoleto: "34191090080004935293383338180009139720000014356",
                        dsStBoleto: "GERADO",
                        link: "P0810800000404700000000049368420000000020190603"
                    }
                ]
            }
        ]
        }
]

module.exports = mockedTitulosNegociados