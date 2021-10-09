const path = require('path');
const express = require('express');
const { mandarDados, puxarDados } = require("./oracle.js")

var bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const PORT = process.env.PORT || 3001;

// Have Node serve the files for our built React app
app.use(express.static(path.join(__dirname, '/front/build')))


app.get("/exerciciosfeitos", (req, res)=>{
    res.send(puxarDados()) 
})

app.post("/atualizar", (req, res)=>{

    // O NEGOCIO NAO ESTA FAZENDO A POST REQUEST PROPRIAMENTE, E PORTANTO ESTA ENVIANDO {} PARA A DB.JSON
    var novo = req.body
    
    
    mandarDados(novo).then(res.send("sucesso"))

})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, ()=>{
    console.log("server is uppppp")
})