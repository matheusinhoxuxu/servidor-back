const express = require('express')
const app = express()

app.get('/', function(req,res){ // mudar o nome da rota no local de (/hello) e a resposta depois do res 
    res.send('rota principal ')
})
app.get('/hello', function(req,res){ // mudar o nome da rota no local de (/hello) e a resposta depois do res 
    res.send('Chegou a resposta')
})
app.get('/nome', function(req,res){ // mudar o nome da rota no local de (/hello) e a resposta depois do res 
    res.send('matheus rodrigues monte ')
})

app.listen(3000, function(){
    console.log('o server ta on ')
})