// Creating a fake list of payments methods to eliminate database consulting.
const mockedFormadePagamentosList = [
    {
        Parcelamento: [
            {
                "idPeridodicidade": "S",
                "idEntrada": "N",
                "dsFormaParcelamento": "Semanal S/ Entrada",
                "Parcelas": [
                    {
                        "nrParcelas": 1,
                        "vlTotalParcelado": 143.23,
                        "vlPrimeiraParcela": 143.23,
                        "vlDemaisParcelas": 143.23,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 2,
                        "vlTotalParcelado": 144.93,
                        "vlPrimeiraParcela": 72.46,
                        "vlDemaisParcelas": 72.47,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 3,
                        "vlTotalParcelado": 146.66,
                        "vlPrimeiraParcela": 48.88,
                        "vlDemaisParcelas": 48.89,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 4,
                        "vlTotalParcelado": 148.35,
                        "vlPrimeiraParcela": 37.08,
                        "vlDemaisParcelas": 37.09,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 5,
                        "vlTotalParcelado": 150.15,
                        "vlPrimeiraParcela": 30.03,
                        "vlDemaisParcelas": 30.03,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 6,
                        "vlTotalParcelado": 151.7,
                        "vlPrimeiraParcela": 25.3,
                        "vlDemaisParcelas": 25.28,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 7,
                        "vlTotalParcelado": 153.6,
                        "vlPrimeiraParcela": 21.96,
                        "vlDemaisParcelas": 21.94,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 8,
                        "vlTotalParcelado": 155.19,
                        "vlPrimeiraParcela": 19.39,
                        "vlDemaisParcelas": 19.4,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 9,
                        "vlTotalParcelado": 157.1,
                        "vlPrimeiraParcela": 17.42,
                        "vlDemaisParcelas": 17.46,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 10,
                        "vlTotalParcelado": 158.5,
                        "vlPrimeiraParcela": 15.85,
                        "vlDemaisParcelas": 15.85,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 11,
                        "vlTotalParcelado": 160.38,
                        "vlPrimeiraParcela": 14.58,
                        "vlDemaisParcelas": 14.58,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 12,
                        "vlTotalParcelado": 162.29,
                        "vlPrimeiraParcela": 13.57,
                        "vlDemaisParcelas": 13.52,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 13,
                        "vlTotalParcelado": 164.23,
                        "vlPrimeiraParcela": 12.67,
                        "vlDemaisParcelas": 12.63,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 14,
                        "vlTotalParcelado": 165.15,
                        "vlPrimeiraParcela": 11.75,
                        "vlDemaisParcelas": 11.8,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 15,
                        "vlTotalParcelado": 167,
                        "vlPrimeiraParcela": 11.18,
                        "vlDemaisParcelas": 11.13,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 16,
                        "vlTotalParcelado": 168.87,
                        "vlPrimeiraParcela": 10.62,
                        "vlDemaisParcelas": 10.55,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 17,
                        "vlTotalParcelado": 170.76,
                        "vlPrimeiraParcela": 10.12,
                        "vlDemaisParcelas": 10.04,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 18,
                        "vlTotalParcelado": 172.67,
                        "vlPrimeiraParcela": 9.64,
                        "vlDemaisParcelas": 9.59,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 19,
                        "vlTotalParcelado": 174.6,
                        "vlPrimeiraParcela": 9.18,
                        "vlDemaisParcelas": 9.19,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 20,
                        "vlTotalParcelado": 176.55,
                        "vlPrimeiraParcela": 8.78,
                        "vlDemaisParcelas": 8.83,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 21,
                        "vlTotalParcelado": 178.52,
                        "vlPrimeiraParcela": 8.52,
                        "vlDemaisParcelas": 8.5,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 22,
                        "vlTotalParcelado": 180.51,
                        "vlPrimeiraParcela": 8.1,
                        "vlDemaisParcelas": 8.21,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 23,
                        "vlTotalParcelado": 179.76,
                        "vlPrimeiraParcela": 7.72,
                        "vlDemaisParcelas": 7.82,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 24,
                        "vlTotalParcelado": 181.55,
                        "vlPrimeiraParcela": 7.67,
                        "vlDemaisParcelas": 7.56,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 25,
                        "vlTotalParcelado": 183.35,
                        "vlPrimeiraParcela": 7.43,
                        "vlDemaisParcelas": 7.33,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 26,
                        "vlTotalParcelado": 185.16,
                        "vlPrimeiraParcela": 7.16,
                        "vlDemaisParcelas": 7.12,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 27,
                        "vlTotalParcelado": 186.98,
                        "vlPrimeiraParcela": 6.8,
                        "vlDemaisParcelas": 6.93,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 28,
                        "vlTotalParcelado": 188.81,
                        "vlPrimeiraParcela": 6.83,
                        "vlDemaisParcelas": 6.74,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 29,
                        "vlTotalParcelado": 190.65,
                        "vlPrimeiraParcela": 6.69,
                        "vlDemaisParcelas": 6.57,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 30,
                        "vlTotalParcelado": 192.5,
                        "vlPrimeiraParcela": 6.61,
                        "vlDemaisParcelas": 6.41,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 31,
                        "vlTotalParcelado": 194.36,
                        "vlPrimeiraParcela": 6.26,
                        "vlDemaisParcelas": 6.27,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 32,
                        "vlTotalParcelado": 196.23,
                        "vlPrimeiraParcela": 6.2,
                        "vlDemaisParcelas": 6.13,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 33,
                        "vlTotalParcelado": 198.11,
                        "vlPrimeiraParcela": 6.11,
                        "vlDemaisParcelas": 6,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 34,
                        "vlTotalParcelado": 200,
                        "vlPrimeiraParcela": 5.96,
                        "vlDemaisParcelas": 5.88,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 35,
                        "vlTotalParcelado": 201.9,
                        "vlPrimeiraParcela": 5.72,
                        "vlDemaisParcelas": 5.77,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 36,
                        "vlTotalParcelado": 203.81,
                        "vlPrimeiraParcela": 5.71,
                        "vlDemaisParcelas": 5.66,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 37,
                        "vlTotalParcelado": 205.73,
                        "vlPrimeiraParcela": 5.57,
                        "vlDemaisParcelas": 5.56,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 38,
                        "vlTotalParcelado": 207.66,
                        "vlPrimeiraParcela": 5.64,
                        "vlDemaisParcelas": 5.46,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 39,
                        "vlTotalParcelado": 209.6,
                        "vlPrimeiraParcela": 5.54,
                        "vlDemaisParcelas": 5.37,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 40,
                        "vlTotalParcelado": 211.55,
                        "vlPrimeiraParcela": 5.63,
                        "vlDemaisParcelas": 5.28,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 41,
                        "vlTotalParcelado": 213.51,
                        "vlPrimeiraParcela": 5.11,
                        "vlDemaisParcelas": 5.21,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 42,
                        "vlTotalParcelado": 215.48,
                        "vlPrimeiraParcela": 5.15,
                        "vlDemaisParcelas": 5.13,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 43,
                        "vlTotalParcelado": 217.46,
                        "vlPrimeiraParcela": 4.94,
                        "vlDemaisParcelas": 5.06,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 44,
                        "vlTotalParcelado": 219.45,
                        "vlPrimeiraParcela": 5.31,
                        "vlDemaisParcelas": 4.98,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 45,
                        "vlTotalParcelado": 221.45,
                        "vlPrimeiraParcela": 4.97,
                        "vlDemaisParcelas": 4.92,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 46,
                        "vlTotalParcelado": 223.46,
                        "vlPrimeiraParcela": 5.21,
                        "vlDemaisParcelas": 4.85,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 47,
                        "vlTotalParcelado": 225.48,
                        "vlPrimeiraParcela": 4.68,
                        "vlDemaisParcelas": 4.8,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 48,
                        "vlTotalParcelado": 227.51,
                        "vlPrimeiraParcela": 5.2,
                        "vlDemaisParcelas": 4.73,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 49,
                        "vlTotalParcelado": 229.55,
                        "vlPrimeiraParcela": 4.91,
                        "vlDemaisParcelas": 4.68,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 50,
                        "vlTotalParcelado": 231.6,
                        "vlPrimeiraParcela": 4.73,
                        "vlDemaisParcelas": 4.63,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 51,
                        "vlTotalParcelado": 233.66,
                        "vlPrimeiraParcela": 4.66,
                        "vlDemaisParcelas": 4.58,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 52,
                        "vlTotalParcelado": 235.73,
                        "vlPrimeiraParcela": 4.7,
                        "vlDemaisParcelas": 4.53,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 53,
                        "vlTotalParcelado": 237.81,
                        "vlPrimeiraParcela": 4.33,
                        "vlDemaisParcelas": 4.49,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 54,
                        "vlTotalParcelado": 239.9,
                        "vlPrimeiraParcela": 4.58,
                        "vlDemaisParcelas": 4.44,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 55,
                        "vlTotalParcelado": 242,
                        "vlPrimeiraParcela": 4.4,
                        "vlDemaisParcelas": 4.4,
                        "dtPrimeiroVenc": "07/06/2019"
                    },
                    {
                        "nrParcelas": 56,
                        "vlTotalParcelado": 244.11,
                        "vlPrimeiraParcela": 4.86,
                        "vlDemaisParcelas": 4.35,
                        "dtPrimeiroVenc": "07/06/2019"
                    }
                ]
            },
            {
                "idPeridodicidade": "S",
                "idEntrada": "S",
                "dsFormaParcelamento": "Semanal C/ Entrada",
                "Parcelas": [
                    {
                        "nrParcelas": 1,
                        "vlTotalParcelado": 142.9,
                        "vlPrimeiraParcela": 142.9,
                        "vlDemaisParcelas": 142.9,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 2,
                        "vlTotalParcelado": 144.61,
                        "vlPrimeiraParcela": 72.22,
                        "vlDemaisParcelas": 72.39,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 3,
                        "vlTotalParcelado": 146.33,
                        "vlPrimeiraParcela": 48.67,
                        "vlDemaisParcelas": 48.83,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 4,
                        "vlTotalParcelado": 148.03,
                        "vlPrimeiraParcela": 36.88,
                        "vlDemaisParcelas": 37.05,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 5,
                        "vlTotalParcelado": 149.8,
                        "vlPrimeiraParcela": 29.84,
                        "vlDemaisParcelas": 29.99,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 6,
                        "vlTotalParcelado": 151.4,
                        "vlPrimeiraParcela": 25.1,
                        "vlDemaisParcelas": 25.26,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 7,
                        "vlTotalParcelado": 153.25,
                        "vlPrimeiraParcela": 21.79,
                        "vlDemaisParcelas": 21.91,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 8,
                        "vlTotalParcelado": 154.87,
                        "vlPrimeiraParcela": 19.21,
                        "vlDemaisParcelas": 19.38,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 9,
                        "vlTotalParcelado": 156.74,
                        "vlPrimeiraParcela": 17.22,
                        "vlDemaisParcelas": 17.44,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 10,
                        "vlTotalParcelado": 158.2,
                        "vlPrimeiraParcela": 15.64,
                        "vlDemaisParcelas": 15.84,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 11,
                        "vlTotalParcelado": 160.05,
                        "vlPrimeiraParcela": 14.45,
                        "vlDemaisParcelas": 14.56,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 12,
                        "vlTotalParcelado": 161.93,
                        "vlPrimeiraParcela": 13.32,
                        "vlDemaisParcelas": 13.51,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 13,
                        "vlTotalParcelado": 163.84,
                        "vlPrimeiraParcela": 12.52,
                        "vlDemaisParcelas": 12.61,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 14,
                        "vlTotalParcelado": 164.87,
                        "vlPrimeiraParcela": 11.6,
                        "vlDemaisParcelas": 11.79,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 15,
                        "vlTotalParcelado": 166.7,
                        "vlPrimeiraParcela": 11.02,
                        "vlDemaisParcelas": 11.12,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 16,
                        "vlTotalParcelado": 168.55,
                        "vlPrimeiraParcela": 10.45,
                        "vlDemaisParcelas": 10.54,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 17,
                        "vlTotalParcelado": 170.42,
                        "vlPrimeiraParcela": 9.94,
                        "vlDemaisParcelas": 10.03,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 18,
                        "vlTotalParcelado": 172.31,
                        "vlPrimeiraParcela": 9.45,
                        "vlDemaisParcelas": 9.58,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 19,
                        "vlTotalParcelado": 174.22,
                        "vlPrimeiraParcela": 8.98,
                        "vlDemaisParcelas": 9.18,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 20,
                        "vlTotalParcelado": 176.15,
                        "vlPrimeiraParcela": 8.57,
                        "vlDemaisParcelas": 8.82,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 21,
                        "vlTotalParcelado": 178.1,
                        "vlPrimeiraParcela": 8.3,
                        "vlDemaisParcelas": 8.49,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 22,
                        "vlTotalParcelado": 180.07,
                        "vlPrimeiraParcela": 7.87,
                        "vlDemaisParcelas": 8.2,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 23,
                        "vlTotalParcelado": 179.53,
                        "vlPrimeiraParcela": 7.71,
                        "vlDemaisParcelas": 7.81,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 24,
                        "vlTotalParcelado": 181.31,
                        "vlPrimeiraParcela": 7.43,
                        "vlDemaisParcelas": 7.56,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 25,
                        "vlTotalParcelado": 183.1,
                        "vlPrimeiraParcela": 7.42,
                        "vlDemaisParcelas": 7.32,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 26,
                        "vlTotalParcelado": 184.9,
                        "vlPrimeiraParcela": 6.9,
                        "vlDemaisParcelas": 7.12,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 27,
                        "vlTotalParcelado": 186.71,
                        "vlPrimeiraParcela": 6.79,
                        "vlDemaisParcelas": 6.92,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 28,
                        "vlTotalParcelado": 188.53,
                        "vlPrimeiraParcela": 6.55,
                        "vlDemaisParcelas": 6.74,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 29,
                        "vlTotalParcelado": 190.36,
                        "vlPrimeiraParcela": 6.68,
                        "vlDemaisParcelas": 6.56,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 30,
                        "vlTotalParcelado": 192.2,
                        "vlPrimeiraParcela": 6.31,
                        "vlDemaisParcelas": 6.41,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 31,
                        "vlTotalParcelado": 194.05,
                        "vlPrimeiraParcela": 6.25,
                        "vlDemaisParcelas": 6.26,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 32,
                        "vlTotalParcelado": 195.91,
                        "vlPrimeiraParcela": 5.88,
                        "vlDemaisParcelas": 6.13,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 33,
                        "vlTotalParcelado": 197.78,
                        "vlPrimeiraParcela": 6.1,
                        "vlDemaisParcelas": 5.99,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 34,
                        "vlTotalParcelado": 199.66,
                        "vlPrimeiraParcela": 5.62,
                        "vlDemaisParcelas": 5.88,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 35,
                        "vlTotalParcelado": 201.55,
                        "vlPrimeiraParcela": 5.71,
                        "vlDemaisParcelas": 5.76,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 36,
                        "vlTotalParcelado": 203.45,
                        "vlPrimeiraParcela": 5.35,
                        "vlDemaisParcelas": 5.66,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 37,
                        "vlTotalParcelado": 205.36,
                        "vlPrimeiraParcela": 5.56,
                        "vlDemaisParcelas": 5.55,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 38,
                        "vlTotalParcelado": 207.28,
                        "vlPrimeiraParcela": 5.26,
                        "vlDemaisParcelas": 5.46,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 39,
                        "vlTotalParcelado": 209.21,
                        "vlPrimeiraParcela": 5.53,
                        "vlDemaisParcelas": 5.36,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 40,
                        "vlTotalParcelado": 211.15,
                        "vlPrimeiraParcela": 5.23,
                        "vlDemaisParcelas": 5.28,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 41,
                        "vlTotalParcelado": 213.1,
                        "vlPrimeiraParcela": 5.1,
                        "vlDemaisParcelas": 5.2,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 42,
                        "vlTotalParcelado": 215.06,
                        "vlPrimeiraParcela": 4.73,
                        "vlDemaisParcelas": 5.13,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 43,
                        "vlTotalParcelado": 217.03,
                        "vlPrimeiraParcela": 4.93,
                        "vlDemaisParcelas": 5.05,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 44,
                        "vlTotalParcelado": 219.01,
                        "vlPrimeiraParcela": 4.87,
                        "vlDemaisParcelas": 4.98,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 45,
                        "vlTotalParcelado": 221,
                        "vlPrimeiraParcela": 4.96,
                        "vlDemaisParcelas": 4.91,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 46,
                        "vlTotalParcelado": 223,
                        "vlPrimeiraParcela": 4.75,
                        "vlDemaisParcelas": 4.85,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 47,
                        "vlTotalParcelado": 225.01,
                        "vlPrimeiraParcela": 4.67,
                        "vlDemaisParcelas": 4.79,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 48,
                        "vlTotalParcelado": 227.03,
                        "vlPrimeiraParcela": 4.72,
                        "vlDemaisParcelas": 4.73,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 49,
                        "vlTotalParcelado": 229.06,
                        "vlPrimeiraParcela": 4.9,
                        "vlDemaisParcelas": 4.67,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 50,
                        "vlTotalParcelado": 231.1,
                        "vlPrimeiraParcela": 4.23,
                        "vlDemaisParcelas": 4.63,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 51,
                        "vlTotalParcelado": 233.15,
                        "vlPrimeiraParcela": 4.65,
                        "vlDemaisParcelas": 4.57,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 52,
                        "vlTotalParcelado": 235.21,
                        "vlPrimeiraParcela": 4.18,
                        "vlDemaisParcelas": 4.53,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 53,
                        "vlTotalParcelado": 237.28,
                        "vlPrimeiraParcela": 4.32,
                        "vlDemaisParcelas": 4.48,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 54,
                        "vlTotalParcelado": 239.36,
                        "vlPrimeiraParcela": 4.04,
                        "vlDemaisParcelas": 4.44,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 55,
                        "vlTotalParcelado": 241.45,
                        "vlPrimeiraParcela": 4.39,
                        "vlDemaisParcelas": 4.39,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 56,
                        "vlTotalParcelado": 243.55,
                        "vlPrimeiraParcela": 4.3,
                        "vlDemaisParcelas": 4.35,
                        "dtPrimeiroVenc": "31/05/2019"
                    }
                ]
            },
            {
                "idPeridodicidade": "Q",
                "idEntrada": "N",
                "dsFormaParcelamento": "Quinzenal S/ Entrada",
                "Parcelas": [
                    {
                        "nrParcelas": 1,
                        "vlTotalParcelado": 143.61,
                        "vlPrimeiraParcela": 143.61,
                        "vlDemaisParcelas": 143.61,
                        "dtPrimeiroVenc": "17/06/2019"
                    },
                    {
                        "nrParcelas": 2,
                        "vlTotalParcelado": 145.5,
                        "vlPrimeiraParcela": 72.75,
                        "vlDemaisParcelas": 72.75,
                        "dtPrimeiroVenc": "17/06/2019"
                    },
                    {
                        "nrParcelas": 3,
                        "vlTotalParcelado": 147.44,
                        "vlPrimeiraParcela": 49.14,
                        "vlDemaisParcelas": 49.15,
                        "dtPrimeiroVenc": "17/06/2019"
                    },
                    {
                        "nrParcelas": 4,
                        "vlTotalParcelado": 149.35,
                        "vlPrimeiraParcela": 37.33,
                        "vlDemaisParcelas": 37.34,
                        "dtPrimeiroVenc": "17/06/2019"
                    },
                    {
                        "nrParcelas": 5,
                        "vlTotalParcelado": 151.2,
                        "vlPrimeiraParcela": 30.24,
                        "vlDemaisParcelas": 30.24,
                        "dtPrimeiroVenc": "17/06/2019"
                    },
                    {
                        "nrParcelas": 6,
                        "vlTotalParcelado": 153.17,
                        "vlPrimeiraParcela": 25.52,
                        "vlDemaisParcelas": 25.53,
                        "dtPrimeiroVenc": "17/06/2019"
                    },
                    {
                        "nrParcelas": 7,
                        "vlTotalParcelado": 155,
                        "vlPrimeiraParcela": 22.16,
                        "vlDemaisParcelas": 22.14,
                        "dtPrimeiroVenc": "17/06/2019"
                    },
                    {
                        "nrParcelas": 8,
                        "vlTotalParcelado": 156.99,
                        "vlPrimeiraParcela": 19.65,
                        "vlDemaisParcelas": 19.62,
                        "dtPrimeiroVenc": "17/06/2019"
                    },
                    {
                        "nrParcelas": 9,
                        "vlTotalParcelado": 158.9,
                        "vlPrimeiraParcela": 17.62,
                        "vlDemaisParcelas": 17.66,
                        "dtPrimeiroVenc": "17/06/2019"
                    },
                    {
                        "nrParcelas": 10,
                        "vlTotalParcelado": 160.7,
                        "vlPrimeiraParcela": 16.07,
                        "vlDemaisParcelas": 16.07,
                        "dtPrimeiroVenc": "17/06/2019"
                    },
                    {
                        "nrParcelas": 11,
                        "vlTotalParcelado": 162.36,
                        "vlPrimeiraParcela": 14.76,
                        "vlDemaisParcelas": 14.76,
                        "dtPrimeiroVenc": "17/06/2019"
                    },
                    {
                        "nrParcelas": 12,
                        "vlTotalParcelado": 164.63,
                        "vlPrimeiraParcela": 13.71,
                        "vlDemaisParcelas": 13.72,
                        "dtPrimeiroVenc": "17/06/2019"
                    },
                    {
                        "nrParcelas": 13,
                        "vlTotalParcelado": 166.05,
                        "vlPrimeiraParcela": 12.81,
                        "vlDemaisParcelas": 12.77,
                        "dtPrimeiroVenc": "17/06/2019"
                    },
                    {
                        "nrParcelas": 14,
                        "vlTotalParcelado": 168.3,
                        "vlPrimeiraParcela": 12.04,
                        "vlDemaisParcelas": 12.02,
                        "dtPrimeiroVenc": "17/06/2019"
                    },
                    {
                        "nrParcelas": 15,
                        "vlTotalParcelado": 170.6,
                        "vlPrimeiraParcela": 11.42,
                        "vlDemaisParcelas": 11.37,
                        "dtPrimeiroVenc": "17/06/2019"
                    },
                    {
                        "nrParcelas": 16,
                        "vlTotalParcelado": 171.59,
                        "vlPrimeiraParcela": 10.79,
                        "vlDemaisParcelas": 10.72,
                        "dtPrimeiroVenc": "17/06/2019"
                    },
                    {
                        "nrParcelas": 17,
                        "vlTotalParcelado": 173.82,
                        "vlPrimeiraParcela": 10.3,
                        "vlDemaisParcelas": 10.22,
                        "dtPrimeiroVenc": "17/06/2019"
                    },
                    {
                        "nrParcelas": 18,
                        "vlTotalParcelado": 176.09,
                        "vlPrimeiraParcela": 9.83,
                        "vlDemaisParcelas": 9.78,
                        "dtPrimeiroVenc": "17/06/2019"
                    },
                    {
                        "nrParcelas": 19,
                        "vlTotalParcelado": 178.4,
                        "vlPrimeiraParcela": 9.38,
                        "vlDemaisParcelas": 9.39,
                        "dtPrimeiroVenc": "17/06/2019"
                    },
                    {
                        "nrParcelas": 20,
                        "vlTotalParcelado": 180.75,
                        "vlPrimeiraParcela": 8.99,
                        "vlDemaisParcelas": 9.04,
                        "dtPrimeiroVenc": "17/06/2019"
                    },
                    {
                        "nrParcelas": 21,
                        "vlTotalParcelado": 180.83,
                        "vlPrimeiraParcela": 8.63,
                        "vlDemaisParcelas": 8.61,
                        "dtPrimeiroVenc": "17/06/2019"
                    },
                    {
                        "nrParcelas": 22,
                        "vlTotalParcelado": 183.04,
                        "vlPrimeiraParcela": 8.32,
                        "vlDemaisParcelas": 8.32,
                        "dtPrimeiroVenc": "17/06/2019"
                    },
                    {
                        "nrParcelas": 23,
                        "vlTotalParcelado": 185.28,
                        "vlPrimeiraParcela": 7.96,
                        "vlDemaisParcelas": 8.06,
                        "dtPrimeiroVenc": "17/06/2019"
                    },
                    {
                        "nrParcelas": 24,
                        "vlTotalParcelado": 187.55,
                        "vlPrimeiraParcela": 7.92,
                        "vlDemaisParcelas": 7.81,
                        "dtPrimeiroVenc": "17/06/2019"
                    },
                    {
                        "nrParcelas": 25,
                        "vlTotalParcelado": 189.85,
                        "vlPrimeiraParcela": 7.69,
                        "vlDemaisParcelas": 7.59,
                        "dtPrimeiroVenc": "17/06/2019"
                    },
                    {
                        "nrParcelas": 26,
                        "vlTotalParcelado": 192.18,
                        "vlPrimeiraParcela": 7.43,
                        "vlDemaisParcelas": 7.39,
                        "dtPrimeiroVenc": "17/06/2019"
                    },
                    {
                        "nrParcelas": 27,
                        "vlTotalParcelado": 194.54,
                        "vlPrimeiraParcela": 7.08,
                        "vlDemaisParcelas": 7.21,
                        "dtPrimeiroVenc": "17/06/2019"
                    },
                    {
                        "nrParcelas": 28,
                        "vlTotalParcelado": 196.93,
                        "vlPrimeiraParcela": 7.12,
                        "vlDemaisParcelas": 7.03,
                        "dtPrimeiroVenc": "17/06/2019"
                    }
                ]
            },
            {
                "idPeridodicidade": "Q",
                "idEntrada": "S",
                "dsFormaParcelamento": "Quinzenal C/ Entrada",
                "Parcelas": [
                    {
                        "nrParcelas": 1,
                        "vlTotalParcelado": 142.9,
                        "vlPrimeiraParcela": 142.9,
                        "vlDemaisParcelas": 142.9,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 2,
                        "vlTotalParcelado": 144.8,
                        "vlPrimeiraParcela": 72.22,
                        "vlDemaisParcelas": 72.58,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 3,
                        "vlTotalParcelado": 146.72,
                        "vlPrimeiraParcela": 48.66,
                        "vlDemaisParcelas": 49.03,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 4,
                        "vlTotalParcelado": 148.63,
                        "vlPrimeiraParcela": 36.88,
                        "vlDemaisParcelas": 37.25,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 5,
                        "vlTotalParcelado": 150.5,
                        "vlPrimeiraParcela": 29.82,
                        "vlDemaisParcelas": 30.17,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 6,
                        "vlTotalParcelado": 152.45,
                        "vlPrimeiraParcela": 25.1,
                        "vlDemaisParcelas": 25.47,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 7,
                        "vlTotalParcelado": 154.3,
                        "vlPrimeiraParcela": 21.76,
                        "vlDemaisParcelas": 22.09,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 8,
                        "vlTotalParcelado": 156.27,
                        "vlPrimeiraParcela": 19.21,
                        "vlDemaisParcelas": 19.58,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 9,
                        "vlTotalParcelado": 158.18,
                        "vlPrimeiraParcela": 17.22,
                        "vlDemaisParcelas": 17.62,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 10,
                        "vlTotalParcelado": 160,
                        "vlPrimeiraParcela": 15.64,
                        "vlDemaisParcelas": 16.04,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 11,
                        "vlTotalParcelado": 161.7,
                        "vlPrimeiraParcela": 14.4,
                        "vlDemaisParcelas": 14.73,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 12,
                        "vlTotalParcelado": 163.91,
                        "vlPrimeiraParcela": 13.32,
                        "vlDemaisParcelas": 13.69,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 13,
                        "vlTotalParcelado": 165.4,
                        "vlPrimeiraParcela": 12.52,
                        "vlDemaisParcelas": 12.74,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 14,
                        "vlTotalParcelado": 167.6,
                        "vlPrimeiraParcela": 11.6,
                        "vlDemaisParcelas": 12,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 15,
                        "vlTotalParcelado": 169.85,
                        "vlPrimeiraParcela": 11.09,
                        "vlDemaisParcelas": 11.34,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 16,
                        "vlTotalParcelado": 170.95,
                        "vlPrimeiraParcela": 10.45,
                        "vlDemaisParcelas": 10.7,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 17,
                        "vlTotalParcelado": 173.14,
                        "vlPrimeiraParcela": 9.94,
                        "vlDemaisParcelas": 10.2,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 18,
                        "vlTotalParcelado": 175.37,
                        "vlPrimeiraParcela": 9.45,
                        "vlDemaisParcelas": 9.76,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 19,
                        "vlTotalParcelado": 177.64,
                        "vlPrimeiraParcela": 8.98,
                        "vlDemaisParcelas": 9.37,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 20,
                        "vlTotalParcelado": 179.95,
                        "vlPrimeiraParcela": 8.57,
                        "vlDemaisParcelas": 9.02,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 21,
                        "vlTotalParcelado": 180.2,
                        "vlPrimeiraParcela": 8.4,
                        "vlDemaisParcelas": 8.59,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 22,
                        "vlTotalParcelado": 182.38,
                        "vlPrimeiraParcela": 7.87,
                        "vlDemaisParcelas": 8.31,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 23,
                        "vlTotalParcelado": 184.59,
                        "vlPrimeiraParcela": 7.71,
                        "vlDemaisParcelas": 8.04,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 24,
                        "vlTotalParcelado": 186.83,
                        "vlPrimeiraParcela": 7.43,
                        "vlDemaisParcelas": 7.8,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 25,
                        "vlTotalParcelado": 189.1,
                        "vlPrimeiraParcela": 7.42,
                        "vlDemaisParcelas": 7.57,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 26,
                        "vlTotalParcelado": 191.4,
                        "vlPrimeiraParcela": 6.9,
                        "vlDemaisParcelas": 7.38,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 27,
                        "vlTotalParcelado": 193.73,
                        "vlPrimeiraParcela": 6.79,
                        "vlDemaisParcelas": 7.19,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 28,
                        "vlTotalParcelado": 196.09,
                        "vlPrimeiraParcela": 6.55,
                        "vlDemaisParcelas": 7.02,
                        "dtPrimeiroVenc": "31/05/2019"
                    }
                ]
            },
            {
                "idPeridodicidade": "M",
                "idEntrada": "N",
                "dsFormaParcelamento": "Mensal S/ Entrada",
                "Parcelas": [
                    {
                        "nrParcelas": 1,
                        "vlTotalParcelado": 144.31,
                        "vlPrimeiraParcela": 144.31,
                        "vlDemaisParcelas": 144.31,
                        "dtPrimeiroVenc": "01/07/2019"
                    },
                    {
                        "nrParcelas": 2,
                        "vlTotalParcelado": 146.58,
                        "vlPrimeiraParcela": 73.29,
                        "vlDemaisParcelas": 73.29,
                        "dtPrimeiroVenc": "01/07/2019"
                    },
                    {
                        "nrParcelas": 3,
                        "vlTotalParcelado": 148.82,
                        "vlPrimeiraParcela": 49.6,
                        "vlDemaisParcelas": 49.61,
                        "dtPrimeiroVenc": "01/07/2019"
                    },
                    {
                        "nrParcelas": 4,
                        "vlTotalParcelado": 151.05,
                        "vlPrimeiraParcela": 37.77,
                        "vlDemaisParcelas": 37.76,
                        "dtPrimeiroVenc": "01/07/2019"
                    },
                    {
                        "nrParcelas": 5,
                        "vlTotalParcelado": 153.3,
                        "vlPrimeiraParcela": 30.66,
                        "vlDemaisParcelas": 30.66,
                        "dtPrimeiroVenc": "01/07/2019"
                    },
                    {
                        "nrParcelas": 6,
                        "vlTotalParcelado": 155.69,
                        "vlPrimeiraParcela": 25.94,
                        "vlDemaisParcelas": 25.95,
                        "dtPrimeiroVenc": "01/07/2019"
                    },
                    {
                        "nrParcelas": 7,
                        "vlTotalParcelado": 157.8,
                        "vlPrimeiraParcela": 22.56,
                        "vlDemaisParcelas": 22.54,
                        "dtPrimeiroVenc": "01/07/2019"
                    },
                    {
                        "nrParcelas": 8,
                        "vlTotalParcelado": 160.23,
                        "vlPrimeiraParcela": 20.02,
                        "vlDemaisParcelas": 20.03,
                        "dtPrimeiroVenc": "01/07/2019"
                    },
                    {
                        "nrParcelas": 9,
                        "vlTotalParcelado": 162.5,
                        "vlPrimeiraParcela": 18.02,
                        "vlDemaisParcelas": 18.06,
                        "dtPrimeiroVenc": "01/07/2019"
                    },
                    {
                        "nrParcelas": 10,
                        "vlTotalParcelado": 164.55,
                        "vlPrimeiraParcela": 16.41,
                        "vlDemaisParcelas": 16.46,
                        "dtPrimeiroVenc": "01/07/2019"
                    },
                    {
                        "nrParcelas": 11,
                        "vlTotalParcelado": 166.98,
                        "vlPrimeiraParcela": 15.18,
                        "vlDemaisParcelas": 15.18,
                        "dtPrimeiroVenc": "01/07/2019"
                    },
                    {
                        "nrParcelas": 12,
                        "vlTotalParcelado": 169.31,
                        "vlPrimeiraParcela": 14.1,
                        "vlDemaisParcelas": 14.11,
                        "dtPrimeiroVenc": "01/07/2019"
                    },
                    {
                        "nrParcelas": 13,
                        "vlTotalParcelado": 171.51,
                        "vlPrimeiraParcela": 13.23,
                        "vlDemaisParcelas": 13.19,
                        "dtPrimeiroVenc": "01/07/2019"
                    },
                    {
                        "nrParcelas": 14,
                        "vlTotalParcelado": 173.55,
                        "vlPrimeiraParcela": 12.35,
                        "vlDemaisParcelas": 12.4,
                        "dtPrimeiroVenc": "01/07/2019"
                    }
                ]
            },
            {
                "idPeridodicidade": "M",
                "idEntrada": "S",
                "dsFormaParcelamento": "Mensal C/ Entrada",
                "Parcelas": [
                    {
                        "nrParcelas": 1,
                        "vlTotalParcelado": 142.9,
                        "vlPrimeiraParcela": 142.9,
                        "vlDemaisParcelas": 142.9,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 2,
                        "vlTotalParcelado": 145.16,
                        "vlPrimeiraParcela": 72.22,
                        "vlDemaisParcelas": 72.94,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 3,
                        "vlTotalParcelado": 147.41,
                        "vlPrimeiraParcela": 48.67,
                        "vlDemaisParcelas": 49.37,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 4,
                        "vlTotalParcelado": 149.65,
                        "vlPrimeiraParcela": 36.88,
                        "vlDemaisParcelas": 37.59,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 5,
                        "vlTotalParcelado": 151.9,
                        "vlPrimeiraParcela": 29.82,
                        "vlDemaisParcelas": 30.52,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 6,
                        "vlTotalParcelado": 154.25,
                        "vlPrimeiraParcela": 25.1,
                        "vlDemaisParcelas": 25.83,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 7,
                        "vlTotalParcelado": 156.4,
                        "vlPrimeiraParcela": 21.76,
                        "vlDemaisParcelas": 22.44,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 8,
                        "vlTotalParcelado": 158.79,
                        "vlPrimeiraParcela": 19.21,
                        "vlDemaisParcelas": 19.94,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 9,
                        "vlTotalParcelado": 161.06,
                        "vlPrimeiraParcela": 17.22,
                        "vlDemaisParcelas": 17.98,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 10,
                        "vlTotalParcelado": 163.15,
                        "vlPrimeiraParcela": 15.64,
                        "vlDemaisParcelas": 16.39,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 11,
                        "vlTotalParcelado": 165.55,
                        "vlPrimeiraParcela": 14.45,
                        "vlDemaisParcelas": 15.11,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 12,
                        "vlTotalParcelado": 167.87,
                        "vlPrimeiraParcela": 13.32,
                        "vlDemaisParcelas": 14.05,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 13,
                        "vlTotalParcelado": 170.08,
                        "vlPrimeiraParcela": 12.52,
                        "vlDemaisParcelas": 13.13,
                        "dtPrimeiroVenc": "31/05/2019"
                    },
                    {
                        "nrParcelas": 14,
                        "vlTotalParcelado": 172.15,
                        "vlPrimeiraParcela": 11.6,
                        "vlDemaisParcelas": 12.35,
                        "dtPrimeiroVenc": "31/05/2019"
                    }
                ]
            }
        ]
    }
]

module.exports = mockedFormadePagamentosList