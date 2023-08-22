const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());
const moviesPath = path.resolve(__dirname, './movies.json');

// 🚀 Exercício 4 -Crie uma função de leitura do JSON com o modulo fs.

const readFile = async () => {
  try {
    const results = await fs.readFile(moviesPath);
    const data = JSON.parse(results);
    return data;
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.path}`);
    return err.message;
  }
};

const main = async () => {
  const dataFile = await readFile();
  console.log(dataFile);
};

main();
// 🚀 Exercício 5 - Crie um endpoint do tipo GET com a rota /movies/:id, que possa listar um filme do JSON por id.

app.get('/movies/:id', async (req, res) => {
  try {
    if (req.params.id > 7) throw new Error('ID must be less than or equal to 7');
    const movies = await readFile();
    const movie = movies;
    res.json(movie);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// 🚀 Exercício 6 - Crie um endpoint do tipo GET com a rota /movies, que possa listar todos os filmes do JSON.
app.get('/movies', async (req, res) => {
  try {
    const movies = await readFile();
    res.json(movies);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// 🚀 Exercício 7 - Crie um endpoint do tipo POST com a rota /movies, para cadastrar um novo filme no JSON.
app.post('/movies', async (req, res) => {
  try {
    const { movie, price } = req.body;
    const movies = await readFile();
    const newMovie = {
      id: movies[movies.length - 1].id + 1,
      movie,
      price,
    };
    const allMovies = JSON.stringify([...movies, newMovie]);
    await fs.writeFile(moviesPath, allMovies);
    res.status(201).json(newMovie);
  } catch (err) {
    res.send({ message: err.message });
  }
});

// 🚀 Exercício 8 - Crie um endpoint do tipo PUT com a rota /movies/:id, que possa editar informações de um filme do JSON.

app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;
    const movies = await readFile();
    const index = movies.findIndex((element) => element.id === Number(id));
    movies[index] = { id: Number(id), movie, price };
    const updatedMovies = JSON.stringify(movies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);
res.status(200).json(movies[index]);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// 🚀 Exercício 9 - Crie um endpoint do tipo DELETE com a rota /movies/:id que possa deletar um filme do JSON.

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readFile();
    const filteredMovies = movies.filter((movie) => movie.id !== Number(id));
    const updatedMovies = JSON.stringify(filteredMovies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);
res.status(204).end();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// 🚀 Exercício 10 - Crie um endpoint do tipo GET com a rota /movies/search, que possa listar todos os filmes do JSON.
// A rota deve receber a informação por query e a chave deve-se chamar q. A chave vai trazer consigo valor de ‘gente’
// por exemplo, e o filtro deve trazer apenas os filmes com esse termo, se não encontrar, traga um array vazio

app.get('/movies/search', async (req, res) => {
  try {
    const { q } = req.query;
    const movies = await readFile();
  
  if (q) {
    const filteredMovies = movies.filter((element) => element.movie.includes(q));
    return res.status(200).json(filteredMovies);
  }
  res.status(200).end();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// app.get('/movies/:id', async (req, res) => {
// ...

module.exports = app;