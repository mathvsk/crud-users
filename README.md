<h1 align="center">
  CRUD Users
</h1>

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Static Badge](https://img.shields.io/badge/MIT-maker?style=for-the-badge&label=License&labelColor=%23303030&color=%23808080)

API para cadastro de usuários com o node na sua forma mais nativa. Utilizando um sistema bem basico de armazenamento de dados em um arquivo JSON.

## Como usar
Faça um clone do projeto e rode os comandos.
```bash
npm install
npm run dev
```

## API Endpoints
Url padrão: `localhost:3333`

|Rota  | Descrição |
|--|--|
| <kbd>GET /users</kbd> | Recupera todos os usuários  |
| <kbd>GET /user?search={name}</kbd> | Recupera todos os usuário que possuam o {name} |
| <kbd>POST /users</kbd> | Cadastra um usuário |
| <kbd>DELETE /{id}</kbd> | Deleta um usuário |
| <kbd>PUT /{id}</kbd> | Atualiza um usuário |

### Schemas
```json
{
  // POST - PUT
  "name": "string",
  "email": "string",
}
```
