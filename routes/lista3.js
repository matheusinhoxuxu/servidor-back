const express = require('express')
const router = express.Router()


router.post('/ex1', function(req, res){
    
    const { salario } = req.body;

    let salarioReajustado;

    if (salario <= 2000) {
        salarioReajustado = salario * 1.5; 
    } else {
        salarioReajustado = salario * 1.3; 
    }

    res.json({ salarioReajustado });
})

router.post('/ex2', function(req, res){

    const { numero1, numero2, numero3 } = req.body;

    const n1 = Number(numero1);
    const n2 = Number(numero2);
    const n3 = Number(numero3);

    let maior;

    if (n1 > n2 && n1 > n3) {
        maior = num1;
    } else if (n2 > n1 && n2 > n3) {
        maior = n2;
    } else {
        maior = n3;
    }

    res.json({ maiorNumero: maior });
});

router.post('/q3', function(req, res){

    const { quantidadeChopp, quantidadeCoberturas, quantidadePessoas } = req.body;

    const custoChopp = 4.8 * quantidadeChopp;
    const custoPizzaBase = 17;
    const custoCobertura = 1.5 * quantidadeCoberturas;
    const custoPizza = custoPizzaBase + custoCobertura;
    const totalConta = custoChopp + custoPizza;
    const taxaServico = totalConta * 0.1;
    const totalComTaxa = totalConta + taxaServico;
    const valorPorPessoa = totalComTaxa / quantidadePessoas;

    res.json({ valorPorPessoa });
})


router.post('/ex4', function (req, res) {
    
    const {salarioMinimo,horasTrabalhadas, dependentes,horasExtras} = req.body
    
    const valorHoraTrabalhada = salarioMinimo * 0.2
    const salarioMes = valorHoraTrabalhada * horasTrabalhadas
    const valorDependente = dependentes * 32
    const valorHoraExtra = valorHoraTrabalhada * 1.5 * horasExtras
    const salarioBruto = salarioMes + valorDependente + valorHoraExtra

    let imposto = 0 

    if(salarioBruto > 2000){
        imposto = salarioBruto >= 5000 ? salarioBruto * 0.2 : salarioBruto * 0.1
    }

    const salarioLiquido = salarioBruto - imposto

    const gratificacao = salarioLiquido < 3500 ? 1000 : 500

    const salarioReceber = salarioLiquido + gratificacao 
    
    
    res.json({salarioBruto, imposto, gratificacao, salarioReceber})
})


router.post('/ex5', function(req, res){

    const { idAluno, nota1, nota2, nota3, mediaQercicios } = req.body;

    const mediaAproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + mediaQercicios) / 7;

    let conceito;
    if (mediaAproveitamento >= 9.0) {
        conceito = 'A';
    } else if (mediaAproveitamento >= 7.5) {
        conceito = 'B';
    } else if (mediaAproveitamento >= 6.0) {
        conceito = 'C';
    } else if (mediaAproveitamento >= 4.0) {
        conceito = 'D';
    } else {
        conceito = 'E';
    }

    let mensagem;
    if (conceito === 'A' || conceito === 'B' || conceito === 'C') {
        mensagem = 'Aprovado!';
    } else {
        mensagem = 'Reprovado!';
    }

    res.json({
        idAluno, nota1, nota2, nota3, 
        mediaQercicios, mediaAproveitamento, 
        conceito, mensagem
    })
})


router.post('/ex6', function(req, res){

    const { altura, sqo } = req.body;

    let pesoIdeal;

    if (sqo.toLowerCase() === 'masculino') {
        pesoIdeal = (72.7 * altura) - 58;
    } else if (sqo.toLowerCase() === 'feminino') {
        pesoIdeal = (62.1 * altura) - 44.7;
    } else {
        return res.status(400).json({ error: 'Sqo inválido. Por favor, insira "masculino" ou "feminino".' });
    }
    res.json({ pesoIdeal })
})


router.post('/ex7', function(req, res){

    const { valor1, valor2, valor3 } = req.body;

    const num1 = Number(valor1);
    const num2 = Number(valor2);
    const num3 = Number(valor3);

    let somaDosMaiores;

    if (num1 > num2 && num1 > num3) {
        somaDosMaiores = num1 + Math.max(num2, num3);
    } else if (num2 > num1 && num2 > num3) {
        somaDosMaiores = num2 + Math.max(num1, num3);
    } else {
        somaDosMaiores = num3 + Math.max(num1, num2);
    }

    res.json({ somaDosMaiores })
})


router.post('/ex8', function(req, res){

    const { salarioAtual, codigoCargo } = req.body;

    let novoSalario;
    let diferenca;

    if(codigoCargo != 101 && codigoCargo != 102 && codigoCargo != 103 && codigoCargo != 104) {
        return res.json({ message: 'Código inválido' });
    } else {

        switch (codigoCargo) {

            case 101:
                novoSalario = salarioAtual * 1.05; 
                break;

            case 102:
                novoSalario = salarioAtual * 1.075; 
                break;

            case 103:
                novoSalario = salarioAtual * 1.1; 
                break;

            default:
                novoSalario = salarioAtual * 1.15; 
        }
    }

    diferenca = novoSalario - salarioAtual;

    res.json({
        salarioAntigo: salarioAtual,
        novoSalario,
        diferenca
    });
});

module.exports = router