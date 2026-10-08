# CRONOSesi - SENAI
Atividade realizada visando obtenção de nota na matéria Projetos do curso de Desenvolvimento de Sistemas - SENAI
## Grupo
- Leandro Imenes de Oliveira
- Heitor Dorigan de Angeli
- Otávio Augusto Barbosa
- Eduardo Moretti Varotti

## Tecnologias Utilizadas
|Tecnologia|Para que foi usada|
|-|-|
|**HTML**|Front-End|
|**CSS**|Estilização do Conteúdo|
|**JavaScript**|Lógica e Back-End|
|**Node.js**|Servidor Back-End|
|**MySQL**|Base de dados|
## O que foi realizado por cada um
|O que realizou|Quem realizou|
|-|-|
|Front-End|Leandro e Otávio|
|Back-End|Heitor|
|Banco de dados e DER|Eduardo|

## Trechos do código
- JavaScript
```JavaScript
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
```
- HTML
```HTML
    <main class="conteudo-principal">
      <form action="http://localhost:3000/login" method ="post">
        <div class="img">
          <img src="/client/photos/cronosesi.png" alt="Logo CRONOSesi">
        </div>
        <div class="login">
          <div class="email">
            <input type="text" placeholder="Email educacional" name="email">
          </div>

          <div class="senha">
            <input type="password" placeholder="Senha" name="senha">
          </div>
        </div>
        <div class="botao">
            <button type="submit">Login</button>
        </div>
      </form>
    </main>
```

- CSS
```css
.faixa-esquerda {
  width: 150px;
  background-color: red;
  color: white;
  padding: 20px;
  min-height: 50vh;
  flex-shrink: 0;
  border: 3px solid darkred;
  background-image: repeating-linear-gradient(
    135deg,
    transparent,
    transparent 20px,
    rgba(255, 255, 255, 0.4) 20px,
    rgba(255, 255, 255, 0.4) 23px
    );
}

.faixa-direita {
  width: 150px;
  background-color: red;
  color: white;
  padding: 20px;
  min-height: 50vh;
  flex-shrink: 0;
  border: 3px solid darkred;
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 20px,
    rgba(255, 255, 255, 0.4) 20px,
    rgba(255, 255, 255, 0.4) 23px
  );  
}
```

- SQL
```sql
drop database if exists registros_climaticos;
create database registros_climaticos;
use registros_climaticos;
-- DDL para criar as tabelas do banco de dados
create table usuario (
    id int not null auto_increment primary key,
    nome varchar(100) not null,
    email varchar(100) not null unique,
    senha varchar(100) not null
);

create table evento (
    id int not null auto_increment primary key,
    usuarioId int not null,
    cidade varchar(100) not null,
    tipoEvento varchar(100) not null,
    temperaturaMaxima decimal(10,2) not null,
    data date not null,
    nivelImpacto enum('Baixo', 'Médio', 'Alto') default 'Médio' not null
);

alter table evento add
constraint fk_registra foreign key (usuarioId) references usuario(id);

-- DML para inserir dados de exemplo nas tabelas
insert into usuario (nome, email, senha) values
('Maria Oliveira', 'maria.oliveira@email.com', password('senha123')),
('João Silva', 'joao.silva@email.com', password('senha123')),
('Ana Souza', 'ana.souza@email.com', password('senha123'));

insert into evento (usuarioId, cidade, tipoEvento, temperaturaMaxima, data, nivelImpacto) values
(1, 'Campinas', 'Onda de calor', 38.7, '2026-09-23', 'Alto'),
(2, 'São Paulo', 'Chuva intensa', 25.3, '2026-09-24', 'Médio'),
(1, 'Rio de Janeiro', 'Tempestade', 30.1, '2026-09-25', 'Alto'),
(2, 'Belo Horizonte', 'Seca prolongada', 35.0, '2026-09-26', 'Alto'),
(3, 'Porto Alegre', 'Nevasca', -2.5, '2026-09-27', 'Médio');

select * from usuario;
select * from evento;
```


## Prints do site
<img src="client/photos/printlogin.png">