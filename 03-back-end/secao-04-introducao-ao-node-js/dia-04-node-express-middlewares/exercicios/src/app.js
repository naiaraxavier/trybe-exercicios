const express = require('express');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require('./middlewares/validateDescription');

const app = express();

// 2 - Adicione um middleware que tem como função interpretar conteúdo JSON.
app.use(express.json());

// 3 - Crie um endpoint POST com a rota /activities para adicionar novas atividades.
// Deve retornat status 201 e uma mensagem de sucesso quando a mesnsagem for inserida
app.post('/activities', validateName, validatePrice, validateDescription, (req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = app;