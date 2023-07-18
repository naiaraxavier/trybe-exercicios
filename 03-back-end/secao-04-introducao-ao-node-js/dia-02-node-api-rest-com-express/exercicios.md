###  Exercício 1

Qual é a função do código de status 400 e 422?

400 - Bad Request (indica que o servidor não pode ou não irá processar a requisição devido a alguma coisa que foi entendida como erro do cliente)

422 - Unprocessable Entity (indica que o servidor entende o conteúdo da entidade da requisição, mas não foi possível processar as instruções presentes)

### Exercício 2

Qual é a função do código de status 401?

401 - Unauthorized (O cliente não forneceu as credenciais corretas para acessar o recurso)

Crie o diretório src e dentro dele um arquivo movies.json com o os filmes da nossa locadora:

```JS
[
  {
    "id": 1,
    "movie": "Avatar",
    "price": 5
  },
   {
    "id": 2,
    "movie": "Gente Grande",
    "price": 2
  },
  {
    "id": 3,
    "movie": "O Jogo",
    "price": 3
  },
  {
    "id": 4,
    "movie": "Quebrando a Banca",
    "price": 5
  },
  {
    "id": 5,
    "movie": "Lilo & Stitch",
    "price": 2
  },
  {
    "id": 6,
    "movie": "Os Fantasmas se Divertem",
    "price": 2
  },
  {
    "id": 7,
    "movie": "Meninas Malvadas",
    "price": 3
  }
]
```