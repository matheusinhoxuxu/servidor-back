const express = require('express')
const router = express.Router()

router.post('/ex1', function (req, res) {

    const n1 = Number(req.body.n1)
    const n2 = Number(req.body.n2)
    const n3 = Number(req.body.n3)
    const n4 = Number(req.body.n4)

    const media = (n1 + n2 + n3 + n4) / 4

    const mensagem = media >= 7 ? 'aprovado' : 'reprovado'

    res.json({ media, mensagem })


})


router.post('/ex2', function (req, res) {

    res.json(req.body)

    const total = Number(req.body.total)
    const brancos = Number(req.body.brancos)
    const nulos = Number(req.body.nulos)
    const validos = Number(req.body.validos)

    const soma = brancos + nulos + validos

    let retorno = {}
    if (soma > total) {

        retorno = {
            codigo: 'soma_eleitores',
            mensagem: "Erro:A soma dos números não pode passar o total de eleitores."
        }

        res.status(400).json(retorno)

    } else {

        const percBranco = brancos / total * 100
        const percNulos = nulos / total * 100
        const percValidos = validos / total * 100

        retorno = { percBranco, percNulos, percValidos, }

    }

    res.status(200).json(retorno)
})

module.exports = router