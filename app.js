const path = require('path');
const express = require('express');

const app = express()
const PORT = process.env.PORT || 3001;

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '/front/build')))

app.get("/api", (req, res)=>{
    res.json({"msg": "deu certo, marcelo vose um genio"})
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, ()=>{
    console.log("server is uppppp")
})