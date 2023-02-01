# Boas-vindas ao repositório vehicle-showcase!

## > > 👨‍💻 O que foi desenvolvido:

Esse projeto consiste em uma vitrine de carros usados, onde um usuário comum consegue ver todos os carros, pesquisar por modelo ou marca,<br>
e um usuário administrador além das funcionalidade comuns também consegue adicionar, editar e deletar carros.

## Detalhes da construção do projeto:

Projeto todo criado em `typescript` com `ReactJS` e `NodeJs`

* ## Front-End
* `Vite` paga criar o ambiente se desenvolvimento React.<br> 
* `React-Route-Dom` para fazer as rotas e navegar entre elas.<br>
* `React Icons` para os ícones utilizados.<br> 
* `Headless UI` para usar alguns componentes já prontos.<br>
* `Styled-Components com css puro` para a estilização do projeto.<br>
* `Axios` para conexão com a api.
* `Email-validator` para fazer as validações do email.<br>
* `dotenv` para usar variáveis de ambiente.<br> 
* `Jest` sera usado para fazer os testes da aplicação.<br><br>

* ## Back-End
* `express` para criar um servidor NodeJs.<br>
* `multer` para realizar upload de imagens e salver localmente.<br>
* `bcrypt` para encriptar e desencriptar senhas do usuário.<br>
* `jsonwebtoken` para a autenticação do usuário.<br>
* `Email-validator` para fazer as validações do email.<br>
* `dotenv` para usar variáveis de ambiente.<br> 
* `prisma` para realizar a conexão com o banco de dados.<br>
* `MySql` como banco de dados usado.<br>
* `Jest, Supertest...` sera usado para fazer os testes da aplicação.<br><br>

## Como rodar o projeto:<br>

* ## `Docker`<br>
* Garante que tenha o [docker](https://www.edivaldobrito.com.br/docker-no-ubuntu/) instalado em sua maquina.
<br>
* Garanta que as portas `'3306'`, `'5173'`, `'5180'`, não estejam em uso.<br>
* Na raiz do projeto executo o comando `npm run dev` no terminal, assim ira criar e estartar os containers 'isso pode demorar um pouco'.<br>
Depois que os containers iniciarem para acessar o front-end cole no seu navegador a url `http://localhost:5173`,<br>
o back-end estará rodando na porta `5180`, e o banco de dados na porta `3306`.<br><br>

* ## `Sem o docker`<br>
* Você precisara estar na raiz do projeto.
* Você precisara abrir duas janelas do terminal.<br>
* Em uma das abas do terminal execute o comando `npm run db`
  em seguida o comando `npm run back`<br>
  na outa aba execute o comando `npm run front`<br>
* para acessar o front-end cole no seu navegador a url `http://localhost:5173`,<br>
o back-end estará rodando na porta `5180`, e o banco de dados na porta `3306`.<br><br>

* caso queira ver os dados salvos no banco de dados execute no terminal o comando `npm run studio`<br>
que ira abrir uma janela no navegador mostrando as tabelas.

## Dados importantes

* caso queira testar as funções de administrador faça login com o usuário `admin@verzel.com` e senha `1234567890`.<br>
* ## Avisos
* Apesar de já ter disponibilizado o projeto ele ainda não esta pronto, ainda pretendo criar filtros<br> para busca de carros, ajustar o css, fazer a responsividade, criar testes, e algumas telas que ainda<br> precisão ser desenvolvidas.
* ainda pretendo documentar as rotas da Api, mas por enquanto disponibilizei arquivos exportados do insomnia na raiz do projeto<br>
contendo todas as rotas da api, para visualizar importe um desses arquivos no insomnia ou postman. 
