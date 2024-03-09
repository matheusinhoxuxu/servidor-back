const express = require('express')
const router = express.Router()

router.post('/ex2', function (req, res) {
    const { nome, horastrabalhadas, valorHora, filhos } = req.body

    const salarioBruto = horastrabalhadas * valorHora
    const bonificacaoFilhos = 0.03 * salarioBruto * filhos
    const salarioFinal = salarioBruto + bonificacaoFilhos

    res.json({ nome,salarioBruto, bonificacaoFilhos, salarioFinal })
})

module.exports = router