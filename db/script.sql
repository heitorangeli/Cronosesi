DROP DATABASE if exists cronosesi;
CREATE DATABASE cronosesi;
USE cronosesi;

CREATE TABLE aluno(
    rm int(4) not null primary key,
    nome varchar(100) not null,
    email varchar(100) not null unique,
    senha varchar(10) not null,
    turma varchar(1) not null,
    ano int (2) not null
);

CREATE TABLE calendario(
    id int primary key auto_increment,
    id_grupo int,
    turma_aluno varchar(2) not null,
    data date not null,
    atividades varchar(100),
    feriados varchar(100) not null
);

CREATE TABLE grupo(
    id int not null primary key auto_increment,
    RM_aluno int(4) not null,
    nome varchar(100) not null,
    conversas varchar(100),
    etiqueta enum('Iniciante', 'Mentor') not null
);

CREATE TABLE suporte(
    id int not null primary key auto_increment,
    RM_aluno int(4) not null,
    conversas varchar(100)
);

alter table calendario add constraint id_grupo foreign key (id_grupo) references grupo(id);
alter table grupo add constraint grupo_aluno foreign key (RM_aluno) references aluno(rm);
alter table suporte add constraint suporte_aluno foreign key (RM_aluno) references aluno(rm);

insert into aluno (rm, nome, email, senha, turma, ano) values
(6767, 'Aura Dias', 'aura.dia@gmail.com', password('aura67'), 'A', 2);

select * from aluno;