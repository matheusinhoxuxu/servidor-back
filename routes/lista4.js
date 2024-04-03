const express = require('express')
const { route } = require('./lista3')
const router = express.Router()

router.post('/ex1', function (req, res) {
   
    
    const numeros = req.body.notas

   let soma = 0
   for(let n of numeros){
    soma += n

   }

const media = soma / numeros.length
   
    res.json({media})
   
})

router.post('/ex2', function(req,res) {
    let valoress = []
    for (let i = 1; i < 101; i++) {
        valoress.push(i)
    }
    res.json({ valoress })
})

router.post('/ex3', function (req, res) {
    let valoress = []
    for (let i = 1; i < 11; i++) {
        valoress.push(i)
    }
    const mensagem = (`${valoress.join(', ')}`)
    res.json({ mensagem })
})

router.post('/ex4', function (req, res) {
    let valoress = [];
    for (let i = 1; i < 11; i++) {
        valoress.push(i);
    }
    valoress = valoress.sort((a, b) => b - a);
    const mensagem = `${valoress.join(', ')}`;
    res.json({ mensagem });
})


router.post('/ex5', function (req, res) {
    let valoress = [];
    for (let i = 101; i < 111; i++) {
        valoress.push(i);
    }
    const mensagem = `${valoress.join(', ')}`;
    res.json({ mensagem });
})


router.post('/ex6', function (req, res) {
    const valoress = req.body
    let soma = 0
    for (let valores = 0; valores < valoress.length; valores++) {
        soma += valoress[valores]
    }
    res.json({ soma });
})

router.post('/ex7', function (req, res) {
    const valores = req.body.valores;
    let valoress = [1];
    for (let i = 2; i <= valores; i += 2) {
        valoress.push(i);
    }
    if (valores % 2 != 0) {
        valoress.push(valores)
    }
    res.json({ valoress });
})



router.post('/ex8', function (req, res) {
   
    const numeros = req.body

   let qtd = 0
   let negativos = []
   for(let n of numeros){
    if(n < 0) {
        negativos.push(n)
        qtd++
    }
   }
   
    res.json({negativos, qtd})
   
})

router.post('/ex9', function (req, res) {
    const valores = req.body.valores;
    let negativos = [];
    valores.forEach(valor => {
        valor = valor < 0 ? negativos.push(valor) : valor;
    });
    res.json({ negativos });
});


router.post('/ex10', function (req, res) {
    const valores = req.body.valores;
    let dentroIntervalo = [];
    let foraIntervalo = [];
    valores.forEach(valor => {
        if (10 <= valor && valor <= 20) {
            dentroIntervalo.push(valor);
        } else {
            foraIntervalo.push(valor);
        }
    });
    res.json({ dentroIntervalo, foraIntervalo });
})


router.post('/ex11', function (req, res) {
    const valores = [21, 54, 98, 65, 87, 65, 21, 98, 87, 65]
    let soma = 0
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i]
    }
    const media = soma/valores.length
    res.json({ media });
})


router.post('/ex12', function (req, res) {
    const valores = req.body.valores
    let soma = 0
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i]
    }
    const media = soma/valores.length
    res.json({ media });
})


router.post('/ex13', function (req, res) {
    const numero = req.body.numero
    let tripoValores = []
    for (let i = 1; i < numero; i++) {
        tripoValores.push(i * 3)
    }
 
    res.json({ tripoValores });
})






module.exports = router