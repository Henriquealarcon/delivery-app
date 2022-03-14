<h1 align="center">Aplicativo de Delivery de Bebidas</h1>
<br><br>

# Descrição

Projeto em React e NodeJs de uma aplicação de um aplicativo de delivery com funcionalidades de admin, vendedor e consumidor
<br><br>

# Ferramentas de desenvolvimento

<div>
<img src="https://img.shields.io/badge/Node v15.14.0-339933?style=for-the-badge&logo=node&color=darkblue&logoColor=white" /> https://docs.npmjs.com/
  <br>
<img src="https://img.shields.io/badge/React.js-339933?style=for-the-badge&logo=react&color=darkblue&logoColor=white" /> https://pt-br.reactjs.org/docs/getting-started.html
  <br>
<img src="https://img.shields.io/badge/Redux-339933?style=for-the-badge&logo=redux&color=darkblue&logoColor=white" /> https://redux.js.org/
  <br>
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&color=darkblue&logoColor=white" /> https://nodejs.org/pt-br/docs/
  <br>
<img src="https://img.shields.io/badge/Express.js-339933?style=for-the-badge&logo=express&color=darkblue&logoColor=white" /> https://expressjs.com/pt-br/
  <br>
<img src="https://img.shields.io/badge/StyledComponents-339933?style=for-the-badge&logo=styledcomponents&color=darkblue&logoColor=white" /> https://styled-components.com/docs
  <br>
<img src="https://img.shields.io/badge/Sequelize-339933?style=for-the-badge&logo=sequelize&color=darkblue&logoColor=white" /> https://sequelize.org/
  <br>
<img src="https://img.shields.io/badge/MySQL-339933?style=for-the-badge&logo=mysql&color=darkblue&logoColor=white" /> https://dev.mysql.com/doc/
  <br>
<img src="https://img.shields.io/badge/Postman-339933?style=for-the-badge&logo=postman&color=darkblue&logoColor=white" /> https://learning.postman.com/docs/publishing-your-api/documenting-your-api/
  <br>
<img src="https://img.shields.io/badge/Socket.io-339933?style=for-the-badge&logo=socket.io&color=darkblue&logoColor=white" /> https://socket.io/docs/v4/
  <br>
<img src="https://img.shields.io/badge/Eslint-339933?style=for-the-badge&logo=eslint&color=darkblue&logoColor=white" /> https://eslint.org/docs/user-guide/configuring/
  <br>
<img src="https://img.shields.io/badge/JWT-339933?style=for-the-badge&logo=jsonwebtokens&color=darkblue&logoColor=white" /> https://jwt.io/introduction
  <br>
<img src="https://img.shields.io/badge/JOI-339933?style=for-the-badge&logo=joi&color=darkblue&logoColor=white" /> https://joi.dev/api/?v=17.6.0
<br>
</div>
<br><br>

# Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
Como o projeto possui dependências na raíz, no back e no front é necessário rodar o **npm install** 3x, conforme a seguir:

## Rodando o servidor Back-End

```bash
# Clone este repositório com a chave SSH ou HTTP a depender de como seu git está configurado.
$ git clone <https://git@github.com:Henriquealarcon/delivery-app.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd delivery-app

# Vá para a back-end
$ cd back-end

## Crie um arquivo .env

- NODE_ENV=
- API_PORT=3001
- MYSQL_HOST=localhost
- MYSQL_PORT=3306
- MYSQL_USER=(seu usuário no Mysql)
- MYSQL_PASSWORD=(sua senha no Mysql)
- MYSQL_DB_NAME=delivery-app
- EVAL_ALWAYS_RESTORE_DEV_DB=true

# Instale as dependências do back-end
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3001 - acesse <http://localhost:3001>

```
## Rodando o Front End 

```bash
# Clone este repositório com a chave SSH ou HTTP a depender de como seu git está configurado.
$ git clone <git@github.com:Henriquealarcon/delivery-app.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd delivery-app

# Vá para a front-end
$ cd front-end

# Instale as dependências do back-end
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>

```

## Funcionalidades da aplicação

A Aplicação funciona através de rotas e cada rota só pode ser acessada caso exista a autenticação do usuário.
<br>
As rotas são condiciadas também de acordo com a função do usuário no aplicação.

### Administrador
- [ ] Cadastro de produtos.
- [x] Atribuir categoria ao usuário.(http://localhost:3000/admin/manage)
- [ ] Deleção de usuário.
- [x] Atribuir categoria ao usuário.
### Cliente
- [x] Cadastro de usuário.(http://localhost:3000/register)
- [x] Login.(http://localhost:3000/login)
- [x] Acesso aos produtos do app ao fazer o login / registar-se. (http://localhost:3000/customer/products)
- [x] Adicionar ou retira produtos do carrinho de compras. (http://localhost:3000/customer/checkout)
- [x] Acesso ao status do pedido em tempo real.
- [x] Acesso aos detalhes do seu pedido, e adiciona o endereço de entrega.(http://localhost:3000/customer/orders)
- [x] Finaliza a compra e emite uma mensagem para o vendedor.
### Vendedor
- [x] Cadastro como usuário default.(http://localhost:3000/register)
- [x] Login.(http://localhost:3000/customer/login)
- [x] Acesso aos pedidos no app ao fazer o login / registar-se.(http://localhost:3000/seller/orders)
- [x] Acesso ao detalhamento do pedido por número e status.(http://localhost:3000/seller/orders)(/número do id do pedido)
- [x] Acesso aos detalhes do seu pedido, e adiciona o endereço de entrega.
- [x] Recebe o pedido em tempo real e da início a entrega.

<br><br>

## Desenvolvido em conjunto com:

Igor Fernandes - https://github.com/srsifer
<br>
Gustavo Mourão - https://github.com/Gustavo-Mourao
<br>
Johann Muzzlinger - https://github.com/jmlinger
<br>
José Luis Demeneghi - https://github.com/Joseluisdemeneghi


## Status

<h3> 
	🚧  Implementando novas funcionalidades  🚧
</h3>


