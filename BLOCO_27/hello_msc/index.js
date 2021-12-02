const express = require('express');
const bodyParser = require('body-parser');
const errorMiddleware = require('./api/middlewares/error');

const Author = require('./api/controllers/Author');
const { getAll, findById, create } = Author;
const app = express();

app.use(bodyParser.json());

app.get('/authors', getAll);
app.get('/authors/:id', findById);
app.post('/authors', create);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
  console.log('Acessar http://localhost:3000')
});