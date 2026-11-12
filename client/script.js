const API_URL = "http://localhost:3000"

const form = document.getElementById("login")
const mensagem_erro = document.getElementById("erro")

form.addEventListener("submit", async function (event) {
    event.preventDefault();})

//Pegar resposta do login
async function login() {
    try{
        const resposta = await fetch(API_URL + '/login')
        if(resposta){
            res.json("Deu certo")
        }
        }catch(error){
            alert("Senha incorreta")
        }
}