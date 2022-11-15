# Bem vindo ao projeto **Orange Evolution API**

🍊 Esta API REST servirá o app Orange Evolution com cursos, trilhas, usuários e mais.

🚧 Ainda em construção. Novas funcionalidade serão entregues quando necessárias para o desenvolvimento do app Orange Evolution (MVP).

💻 A API foi desenvolvida com Node.js/Express, Sequelize ORM e um banco de dados MySQL. O deploy foi feito com Railway.

⭐ Você pode conferir o repositório do front-end _[aqui](https://github.com/andersonfpcorrea/orange-evolution-front)_

## Documentação 📚

Acesse a documentação da API _[aqui](https://documenter.getpostman.com/view/21880237/2s8YYHKNDS)_.

## Como rodar este projeto localmente

Faço o clone do projeto:

```
git clone git@github.com:andersonfpcorrea/orange-evolution-back.git

cd orange-evolution-back
```

Tenha instalado em sua máquina Docker e Docker Compose.

Para subir os conteiners com a imagem do Node e do MySQL rode o seguinte comando:

```
docker-compose up -d
```

Para acessar o conteiner Node:

```
docker exec -it orange_api bash
```

Estando dentro do conteiner instale as dependências do projeto:

```
npm i
```

Para criar o banco de dados, criar as tabelas e popular com dados, use o seguinte comando:

```
npm run prestart
```

Para iniciar o servidor para desenvolvimento:

```
npm run dev
```

Para criar o banco, populá-lo e iniciar o servidor num único comando:

```
npm start
```

Para rodar testes de integração:

```
npm run test
```

O servidor usa a porta `3001` e o serviço mySQL a porta `33060`.

## Setup do projeto 🔧

- Express v.4.18.2
- Sequelize v.6.25.3
- mysql2 v.2.3.3
- Cors v.2.8.5
- ESLint v.8.26.0
- Mocha v.10.1.0
- Chai v.4.3.6
- Sinon v.14.0.1
- commitlint v.17.2.0
- Husky v.8.0.1
- semantic-release v.19.0.5
