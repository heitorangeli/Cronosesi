const db = require("./db")

const search = (req, res) => {
    console.log("Dados recebidos do front-end:", req.body);

    const emailDigitado = req.body.email;
    const senhaDigitada = req.body.senha;

    const query = 'SELECT * FROM aluno WHERE email = ?';

    db.query(query, [emailDigitado], (err, results) => {
        if (err) {
            console.error("Erro na consulta ao banco:", err);
            return res.status(500).send("Erro interno no servidor");
        }

        console.log("Resultado retornado pelo MySQL:", results);

        if (results.length === 0) {
            console.log("Email não encontrado no banco!");
            return res.status(401).send("Email não encontrado");
        }

        const alunoEncontrado = results[0];

        if (alunoEncontrado.senha === senhaDigitada) {
            console.log("Login realizado com sucesso!");
            return res.redirect("http://127.0.0.1:5500/client/home.html");
        } else {
            console.log("Senha incorreta!");
            return res.status(401).send("Senha incorreta");
        }
    });
}

module.exports = {
    search
}