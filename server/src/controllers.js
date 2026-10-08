const contas = require("../contas.json")

exports.salvarDados = (req, res) => {
    const dados = {"email":req.body.email, "senha":req.body.senha};
}
const search = (req, res) => {
    var find = 0;
    var rightPassword = 0;
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
    res.redirect("http://127.0.0.1:5500/client/home.html")
}

module.exports = {
    search
}