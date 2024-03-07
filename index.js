const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/', function(req,res){ // mudar o nome da rota no local de (/hello) e a resposta depois do res 
    res.send('Rota Principal ')
})
app.get('/hello', function(req,res){ // mudar o nome da rota no local de (/hello) e a resposta depois do res 
    res.send('Chegou a resposta')
})

app.get('/nome', function(req,res){ // mudar o nome da rota no local de (/hello) e a resposta depois do res 
    res.send('matheus rodrigues monte ')
})

app.post('/lista1/ex1', function(req,res){ 

    res.json(req.body)

    const total = Number(req.body.total)
    const brancos = Number(req.body.brancos)
    const nulos = Number(req.body.nulos)
    const validos = Number(req.body.validos)

    const soma = brancos + nulos + validos

    let retorno = {}
    if(soma > total){

        retorno = {
            codigo:'soma_eleitores',
            mensagem: "Erro:A soma dos números não pode passar o total de eleitores."
        }

        res.status(400).json(retorno)

    } else {

    const percBranco = brancos / total * 100
    const percNulos = nulos / total * 100
    const percValidos = validos / total * 100

    retorno = {percBranco,percNulos,percValidos,}

    // console.log("Brancos:" + percBranco );
    // console.log("Nulos:" + percNulos );
    // console.log("Validos:" + percValidos ) ;
    }


    res.status(200).json(retorno)
})


app.listen(3000, function(){
    console.log('o server ta on ')
})