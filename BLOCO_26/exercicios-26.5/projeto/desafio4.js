const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const fs = require('./fs')
const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

const validaToken = (request, response, next) => {
  const { name, age, talk } = request.body;
  const { token } = request.headers.authorization;
  
  if(!token) return response.status(401).json({"message": "Token não encontrado"});
  if(token !== 's') return response.status(401).json({"message": "Token inválido"}); 
  next()
}

const validaDados = (request, response, next) => {
  const { name, age, talk } = request.body;
  if(!name || name === '') return response.status(400).json({"message": "O campo \"name\" é obrigatório"})
  if(!(name > 3)) return response.status(400).json({"message": "O \"name\" deve ter pelo menos 3 caracteres"})
  if(!age) return response.status(400).json({})
  if(!talk) return response.status(400).json({})
  next()
}

app.post('/talker/', validaToken, rescue(async (request, response) => {
  const { name, age, talk } = request.body;

  const talkers = await fs.getFile();
  if (talkers.map(({ id }) => id).includes(id)) {
    return response.status(409).json({ message: 'id already exists' });
  }
  
  talkers.push({ name, age, talk });
  
  await talkers.setFile(talkers);
  
  response.status(204).end();

}))

app.listen(PORT, () => {
  console.log('Online');
});