// Creating a fake list of payments methods to eliminate database consulting.
const mockedRealizacaodeNegociacao = [
    {
        "success": [
            {
                "message": "Processo concluído!"
            }
        ]
    },
    {
        "error": [
            {
                "message": "Cliente não cadastrado",
                "fileStatus": "23"
            }
        ]
    }
]

module.exports = mockedRealizacaodeNegociacao