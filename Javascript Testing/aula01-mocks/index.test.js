const { error } = require('./src/constants')
const File = require('./src/file')
const { rejects, deepStrictEqual } = require('assert')
    ;
(async () => {
    {
        const filePath = './mocks/emptyFile-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result, rejection)
    }
    {
        const filePath = './mocks/fourItems-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result, rejection)
    }
    {
        /*
        UPDATE: 22/03/2022
        Se você estiver executando esse código após o ano de 2020. 
        O calculo para saber o ano de nascimento da pessoa vai ser diferente do esperado.
        
        Nas próximas aulas você vai entender como resolver este problema usando fakeTimers. 
        Mas por agora, adicionei o código abaixo para mockar o Date.
        */
        Date.prototype.getFullYear = () => 2020
        const filePath = './mocks/threeItems-valid.csv'
        const result = await File.csvToJson(filePath)
        const expected = [
            {
                "name": "Erick Wendel",
                "id": 123,
                "profession": "Javascript Instructor",
                "birthDay": 1995
            },
            {
                "name": "Xuxa da Silva",
                "id": 321,
                "profession": "Javascript Specialist",
                "birthDay": 1940
            },
            {
                "name": "Joaozinho",
                "id": 231,
                "profession": "Java Developer",
                "birthDay": 1990
            }
        ]

        deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))

    }
    {
        const filePath = './mocks/threeItems-valid.json'
        const result = await File.jsonToCsv(filePath)
        // console.log({ result })
        deepStrictEqual(result, `id,name,profession,birthDay
123,Erick Wendel,Javascript Instructor,25
321,Xuxa da Silva,Javascript Specialist,80
231,Joaozinho,Java Developer,30`)
    }
})()