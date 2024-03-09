const express = require('express')
const router = express.Router()


router.get('/', function (req, res) { // mudar o nome da rota no local de (/hello) e a resposta depois do res 
    res.send('Rota Principal ')
})
router.get('/hello', function (req, res) { // mudar o nome da rota no local de (/hello) e a resposta depois do res 
    res.send('Chegou a resposta')
})

router.get('/nome', function (req, res) { // mudar o nome da rota no local de (/hello) e a resposta depois do res 
    res.send('matheus rodrigues monte ')
})

module.exports = router
