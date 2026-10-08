const contas = require("./dados.json")

const search = (req, res) => {
    const dados = {"email":req.body.email, "senha":req.body.senha};
    var find = 0;
    var rightPassword = 0;

    const emailEncontrado = contas.find(conta => conta.email === dados.email);

        if(emailEncontrado === undefined){
            console.log("Email não encontrado")
        }else if(emailEncontrado.senha === dados.senha){
            res.redirect("http://127.0.0.1:5500/client/home.html")
            console.log("Login realizado com sucesso")
        }else{ console.log("Senha incorreta")}
    }
module.exports = {
    search
}