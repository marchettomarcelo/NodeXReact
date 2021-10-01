const path = require('path');
const express = require('express');

const app = express()

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '/front/build')))

app.get("/api", (req, res)=>{
    res.json({"msg": "deu certo, marcelo vose um genio"})
})

app.listen(3001, ()=>{
    console.log("server is uppppp")
})