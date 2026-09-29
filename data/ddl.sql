DROP DATABASE if exists cronosesi;
CREATE DATABASE cronosesi;
USE cronosesi;

CREATE TABLE aluno(
    rm int(4) not null primary key,
    email varchar(100) not null,
    nome varchar(100) not null,
    senha varchar(10) not null,
    turma varchar not null,
    ano int (2) not null,
);

CREATE TABLE calendario(
    id int not null primary key auto_increment,
    id_grupo int not null,
    turma_aluno varchar(2) not null,
    dat date not null,
    atividades varchar(100) not null,
    feriados varchar(100) not null
),

CREATE TABLE grupo(
    id int not null primary key auto_increment,
    RM_aluno int(4) not null,
    nome varchar(100) not null,
    conversas varchar(100),
    etiqueta num("Iniciante", "Mentor") not null
),

CREATE TABLE suporte(
    id int not null primary key auto_increment,
    RM_aluno int(4) not null,
    conversas varchar(100)
)