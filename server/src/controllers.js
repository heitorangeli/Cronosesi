const contas = require("../contas.json")

function autoIncremet(){
    const ultimoId = Number(contas[contas.length - 1].id)
    return ultimoId + 1;
}

//CRUDS
const search = (req, res) => {
    var find = 0;
    var rightPassword = 0;
    const dados = req.body
    contas.forEach(conta => {
        if( conta.email === dados.email){
            find = 1;
            if( conta.senha === dados.senha){
                rightPassword = 1;
            }else{
                console.log("Senha incorreta")
            }
    }})
    if (find === 1 && rightPassword === 1) {
        console.log("Login realizado com sucesso")}
    else if (find === 1 && rightPassword === 0) {
        console.log("Senha incorreta")}
    else{
        console.log("Email não encontrado")
    }
    // res.redirect("http://localhost:5500/client/index.html")
}

module.exports = {
    search,
}