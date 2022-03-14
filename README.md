<h1 align="center">Aplicativo de Delivery de Bebidas</h1>
<br>
<br>
<p align="center"> Projeto em React e NodeJs de uma aplicação de um aplicativo de delivery com funcionalidades de admin, vendedor e consumidor. </p>
<br>
<br>
<p align="center"> Libs utilizadas dentro da aplicação. </p>

<div align="center">
<img align="center" src="https://img.shields.io/badge/Node v15.14.0-339933?style=for-the-badge&logo=node&color=darkblue&logoColor=white" />
<img align="center" src="https://img.shields.io/badge/React.js-339933?style=for-the-badge&logo=react&color=darkblue&logoColor=white" />
<img align="center" src="https://img.shields.io/badge/Redux-339933?style=for-the-badge&logo=redux&color=darkblue&logoColor=white" />
<img align="center" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&color=darkblue&logoColor=white" />
<img align="center" src="https://img.shields.io/badge/Express.js-339933?style=for-the-badge&logo=express&color=darkblue&logoColor=white" />
<img align="center" src="https://img.shields.io/badge/StyledComponents-339933?style=for-the-badge&logo=styledcomponents&color=darkblue&logoColor=white" />
<img align="center" src="https://img.shields.io/badge/Sequelize-339933?style=for-the-badge&logo=sequelize&color=darkblue&logoColor=white" />
<img align="center" src="https://img.shields.io/badge/MySQL-339933?style=for-the-badge&logo=mysql&color=darkblue&logoColor=white" />
<img align="center" src="https://img.shields.io/badge/Postman-339933?style=for-the-badge&logo=postman&color=darkblue&logoColor=white" />
<img align="center" src="https://img.shields.io/badge/Socket.io-339933?style=for-the-badge&logo=socket.io&color=darkblue&logoColor=white" />
<img align="center" src="https://img.shields.io/badge/Eslint-339933?style=for-the-badge&logo=eslint&color=darkblue&logoColor=white" />
<img align="center" src="https://img.shields.io/badge/JWT-339933?style=for-the-badge&logo=jsonwebtokens&color=darkblue&logoColor=white" />
<img align="center" src="https://img.shields.io/badge/JOI-339933?style=for-the-badge&logo=joi&color=darkblue&logoColor=white" />
</div>
<br>
<br>

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

---

# Instale as dependências do back-end
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>

```

<p align="center"> Funcionalidades da aplicação. </p>

### Administrador
- [ ] Cadastro de produtos.
- [x] Atribuir categoria ao usuário.
- [ ] Deleção de usuário.
- [x] Atribuir categoria ao usuário.
### Cliente
- [x] Cadastro de usuário.
- [x] Login.
- [x] Acesso aos produtos do app ao fazer o login / registar-se.
- [x] Adicionar ou retira produtos do carrinho de compras.
- [x] Acesso ao status do pedido em tempo real.
- [x] Acesso aos detalhes do seu pedido, e adiciona o endereço de entrega.
- [x] Finaliza a compra e emite uma mensagem para o vendedor.
### Vendedor
- [x] Cadastro como usuário default.
- [x] Login.
- [x] Acesso aos pedidos no app ao fazer o login / registar-se.
- [x] Acesso ao detalhamento do pedido por número e status.
- [x] Acesso aos detalhes do seu pedido, e adiciona o endereço de entrega.
- [x] Recebe o pedido em tempo real e da início a entrega.

<br>
<br>
<p align="center"> Status. </p>

<h4 align="center"> 
	🚧  Implementando novas funcionalidades  🚧
</h4>


