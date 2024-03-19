const express = require('express')
const router = express.Router()


router.post('/ex1', function (req, res) {


    res.json({})
})


router.post('/ex2', function (req, res) {
    const { nome, horastrabalhadas, valorHora, filhos } = req.body

    const salarioBruto = horastrabalhadas * valorHora
    const bonificacaoFilhos = 0.03 * salarioBruto * filhos
    const salarioFinal = salarioBruto + bonificacaoFilhos

    res.json({ nome, salarioBruto, bonificacaoFilhos, salarioFinal })
})

router.post('/ex5', function (req, res) {
    const { n1, n2, n3 } = req.body

    const media = Number(n1 * 2) + Number(n2 * 3) + Number(n3 * 5) / (2 + 3 + 5)

    const mensagem = media >= 5 ? 'aprovado' : 'reprovado'
    res.json({ media, mensagem })


})

router.post('/ex6', function (req, res) {
    //    Faça um script que leia o tempo de duração de um evento em uma fábrica expressa
    // em segundos e mostre-o expresso em horas, minutos e segundos.

    let tempoSegundos, tempominutos, tempohoras;
    tempoSegundos = req.body.tempoSegundos

    tempominutos = tempoSegundos / 60
    tempohoras = tempominutos / 60

    res.json({ tempoSegundos, tempohoras, tempominutos })


})

router.post('/ex7', function (req, res) {
    const { nome, salariofixo, totalVendas, percentual } = req.body

    salario = salariofixo + (totalVendas * percentual)

    res.json({ nome, salario })

})


router.post('/ex8', function (req, res) {
    const { nomePiloto, distacia, tempoHora, } = req.body

    VM = distacia / tempoHora

    res.json(`A velocidade alcançada pelo ${nomePiloto} foi de ${VM}km/hs`)

})

router.post('/ex9', function (req, res) {
    salarioFuncionario = req.body.salarioFuncionario
    novosalario = 0

    if(salarioFuncionario < 1000)
    {
        novosalario =  salarioFuncionario * 1.3
    }

    if(novosalario > 0){
        resultado = `seu novo salário é ${novosalario}`
    }

    else {
        resultado = `você não está apto a receber seu novo salário`
    }

    res.json(`mensagem : ${resultado}`)
})




module.exports = router