const express = require('express')
const router = express.Router()

router.post('/ex1', function (req, res) {
   
    
    const numeros = req.body

   let soma = 0
   for(let n of numeros){
    soma += n
   }
   
const media = soma / numeros.length
   
    res.json({media})
   
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



module.exports = router