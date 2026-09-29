DROP DATABASE if exists cronosesi;
CREATE DATABASE cronosesi;
USE cronosesi;

CREATE TABLE contas(
    rm int (4) not null primary key,
    email varchar(100) not null,
    nome varchar(100) not null,
    senha varchar(10) not null,
);