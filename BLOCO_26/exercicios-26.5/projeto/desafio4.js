const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const fs = require('../fileSystem')
const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

const validaToken = (request, response, next) => {
  const { token } = request.headers.authorization;
  
  if(!token) return response.status(401).json({message: "Token não encontrado"});
  if(token !== '') return response.status(401).json({message: "Token inválido"}); 
  next()
}

const validaDados = (request, response, next) => {
  const { name, age, talk } = request.body;
  if(!name || name === '') return response.status(400).json({message: "O campo \"name\" é obrigatório"})
  if(!(name > 3)) return response.status(400).json({message: "O \"name\" deve ter pelo menos 3 caracteres"})
  
  if(!age) return response.status(400).json({message: "O campo \"age\" é obrigatório"})
  if(!(age > 18) ) return response.status(400).json({message: "A pessoa palestrante deve ser maior de idade"})

  if(!talk && talk === '' && !talk.wachedAt === '' && !talk.rate === '') return response.status(400)
  .json({message:"O campo \"watchedAt\" deve ter o formato \"dd/mm/aaaa\""})
  if(talk.wachedAt !== /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/) return response.status(400).json({message:"O campo \"watchedAt\" deve ter o formato \"dd/mm/aaaa\""})
  if(talk.rate) return response.status(400).json({message: "O campo \"rate\" deve ser um inteiro de 1 à 5"})

  next()
}

app.post('/talker/', validaToken, validaDados, rescue(async (request, response) => {
  const { name, age, talk } = request.body;

  const talkers = await fs.getFile();
  
  talkers.push({ name, age, talk });
  
  await talkers.setFile(talkers);
  
  response.status(201).json({name, age, talk});
}))

app.listen(PORT, () => {
  console.log('Online');
});