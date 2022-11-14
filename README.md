# Perfil Profissional

Projeto Perfil Profissional, implementado no módulo 2 do curso fábrica de programador em High Tech Cursos.

Este projeto implementa uma **API** em **NodeJS**, utilizando Express como gerenciador de requisições *HTTP*, banco de dados não relacional **MongoDB** e o framework **ODM Mongoose** para intermediar a comunnicação entre a aplicação e o banco de dados.

O projeto trata-se de uma aplicação de gerenciamento de perfis profissionais e conexões entre eles. Portanto é possível cadastrar perfis, conectar perfis e a comunicação entre perfis por meio de notificações.

Este documento tem por objetivo detalhar os elementos presentes no projeto do *Perfil Porfissional*, incluindo depenedências, *scripts* de execução, definição de entidades e _endpoints_.

---

# Entidades

- Perfil
- Notificação

## Perfil

Atributo | Tipo
---------|--------
nome| String*
dataNascimento| Date* 
disponibilidadeMudanca| Boolean*
disponibilidadeHorario| Enum< Meio Período, Integral >*
skills| Array< String >*
educacao| Array< Educacao >*
certificacoes| Array< Certificacao >
experiencias| Array< Experiencia >
usuario| Usuario*
conexoes| Array< Perfil >    

## Notificacao

Atributo | Tipo
-------- | ------
tipo| Enum["Contato", "Solicitaçãoa de Amizade"]*
título| String*
descricao| String
lido| Boolean*
remetente| Perfil(ref)*
destinatario| Perfil(ref)*

>Entidades marcadas com asterisco são entidades obrigatórias.

## Entidades Internas

### Educacao

Atributo | Tipo
-------- | ------
instituicao| String
ingresso| Date
conclusao| Date
nivelEscolaridade| Enum ["Ensino Fundamental","Ensino Médio","Ensino Superior", "Pós-graduação", "Mestrado","Doutorado"]
completo | Boolean

### Certificacao

Atributo | Tipo
-------- | ----
instituicao| String
titulo| String
cargaHoraria| Number
 
 ### Experiencia

Atributo | Tipo
-------- | ------
instituicao| String
ingresso| Date
conclusao| Date

### Usuario

Atributo | Tipo
-------- | ------
email| String
senha| String

# Endpoints

## Perfil

Recurso | Método | Autenticado? | Objetivo | Retorno
------- | ------ | ------------ | ------- | -----
/perfil | GET | Não | Últimos 5 perfis cadastrados | Lista de Perfis JSON
/perfil/:id | GET | Não | Busca um perfil por ID | Perfil JSON
/perfil | POST | Não | Cadastrar um perfil | Perfil JSON
/perfil/:id | PUT | Sim | Editar um perfil | Perfil JSON
/perfil/conexao | POST | Sim | Conecta dois perfis(ConexãoAmizade) | Mensagem JSON

## Login
Recurso | Método | Autenticado? | Objetivo | Retorno
------- | ------ | ------------ | ------- | -----
/login | POST | Não | Efetuar autenticação do usuário |Token,Email e Perfil

## Notificação
Recurso | Método | Autenticado? | Objetivo | Retorno
------- | ------ | ------------ | ------- | -----
/notificacao/:id | GET | Sim | Buscar uma notificação por ID |Notificação JSON
/notificacao/perfil/:id | GET | Sim | Buscar todas asnotificações do perfil por ID | Lista de notificações JSON
/notificacao | POST | Sim | Cadastrar uma nova notificação |Notificação JSON
/notificacao/lida/:id | PUT | Sim | Muda o *status* da notificação para "lida" | Notificação JSON
