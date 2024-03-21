const express = require('express')
const router = express.Router()


router.post('/ex1', function(req,res){  
    const minimo = Number(req.body.minimo)
    const maximo  = Number(req.body.maximo )

    const estoquemedio = minimo + maximo / 2

    res.json(estoquemedio)


})




router.post('/ex2', function (req, res) {
    const { nome, horastrabalhadas, valorHora, filhos } = req.body

    const salarioBruto = horastrabalhadas * valorHora
    const bonificacaoFilhos = 0.03 * salarioBruto * filhos
    const salarioFinal = salarioBruto + bonificacaoFilhos
    
    res.json({ nome, salarioBruto, bonificacaoFilhos, salarioFinal })
})


router.post('/ex3',function(req,res){
    const {idadeAnos, idadeMes, idadeDia} = req.body

    const totalDias = (idadeAnos * 365) + (idadeMes * 30) + idadeDia

    res.json({totalDias})

})

router.post('/ex4', function (req, res) {


    let idade = req.body.idade

    let idadeAnos = idade / 365 | 0;
    idade -= idadeAnos * 365;
    let idadeMeses = idade / 30 | 0;
    idade -= idadeMeses * 30;

    const idadeDias = idade

    res.json({ idadeAnos, idadeMeses, idadeDias })
})



router.post('/ex5', function (req, res) {
    const { n1, n2, n3 } = req.body

    const media = Number(n1 * 2) + Number(n2 * 3) + Number(n3 * 5) / 10

    
    res.json({ media})


})
router.post('/ex6', function (req, res) {
  

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