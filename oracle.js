const fs = require("fs")

const puxarDados = ()=>{
    const read = fs.readFileSync("./db.json")
    const string = read.toString()
    const Json = JSON.parse(string)
    return Json
}

const mandarDados = async (json)=>{
    try{
    var string = JSON.stringify(json)
    fs.writeFileSync("./db.json", string)
    return "sucesso"

    } catch(e){

        return "erro"
    }    
}

// const adicionar = (quantosFeitos)=>{
//     mandarDados({exercicios: quantosFeitos})
// }

module.exports = { mandarDados, puxarDados }