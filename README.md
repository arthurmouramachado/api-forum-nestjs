<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# API Fórum – NestJS

API REST para um sistema de fórum de perguntas e respostas, onde usuários podem criar perguntas e responder outras perguntas.

---

## 🚀 Tecnologias utilizadas

- Node.js
- NestJS
- TypeScript
- Prisma ORM
- SQLite

---

## 📌 Funcionalidades

- Cadastro de usuários
- Login de usuários
- Autenticação
- Criação de perguntas
- Listagem de perguntas
- Atualização de perguntas
- Exclusão de perguntas
- Criação de respostas
- Listagem de respostas
- Atualização de respostas
- Exclusão de respostas

---

## 🗂️ Estrutura do projeto

```text
prisma/
 ├── schema.prisma        # Schema do banco de dados
 └── migrations/          # Migrations do banco

src/
 ├── answers/             # Módulo de respostas
 │   ├── dto/             # DTOs de respostas
 │   ├── entities/        # Entidades de respostas
 │   ├── answers.controller.ts
 │   ├── answers.service.ts
 │   └── answers.module.ts
 │
 ├── questions/           # Módulo de perguntas
 │   ├── dto/
 │   ├── entities/
 │   ├── questions.controller.ts
 │   ├── questions.service.ts
 │   └── questions.module.ts
 │
 ├── user/                # Módulo de usuários
 ├── auth/                # Autenticação
 ├── database/            # Configuração do Prisma
 ├── validationSchemas/   # Schemas de validação
 │
 ├── app.module.ts        # Módulo principal da aplicação
 └── main.ts              # Bootstrap da aplicação

````

---

## Como rodar o projeto

```bash
$ npm install
```

## ⚙️ Compilar e executar o projeto

```bash
# modo de desenvolvimento
npm run start

# modo de desenvolvimento com hot reload
npm run start:dev

# modo de produção
npm run start:prod

```
## Como Rodar Testes
```bash
# testes unitários
npm run test

# testes end-to-end (e2e)
npm run test:e2e

# cobertura de testes
npm run test:cov

```
----

## 🔗 Rotas da API

```bash
### 👤 Usuários

- `POST /users`  
  ➜ Criação de usuário

- `PUT /users/:id`  
  ➜ Atualização de usuário

- `DELETE /users/:id`  
  ➜ Exclusão de usuário

---

### 🔐 Autenticação

- `POST /auth/login`  
  ➜ Login do usuário

---

### ❓ Perguntas

- `POST /questions`  
  ➜ Criar pergunta

- `GET /questions`  
  ➜ Listar perguntas

- `GET /questions/:id`  
  ➜ Buscar pergunta por ID

- `PUT /questions/:id`  
  ➜ Atualizar pergunta

- `DELETE /questions/:id`  
  ➜ Deletar pergunta

---

### 💬 Respostas

- `POST /answers`  
  ➜ Criar resposta

- `GET /answers/:questionId`  
  ➜ Listar respostas de uma pergunta

- `PUT /answers/:id`  
  ➜ Atualizar resposta

- `DELETE /answers/:id`  
  ➜ Deletar resposta
```

---

## 🚧 Próximos passos

- Criar frontend com ReactJS
- Deploy da API


---

## 👨‍💻 Autor

Arthur Moura  
🔗 LinkedIn: www.linkedin.com/in/arthur-moura-7074a3263

---

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

---

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
