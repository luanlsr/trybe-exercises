const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises')
const rescue = require('express-rescue');
// const res = require('express/lib/response');
const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

function getTalker () {
  return fs.readFile('./talker.json', 'utf-8')
    .then(fileContent => JSON.parse(fileContent));
}

const rand=()=>Math.random(0).toString(36).substr(2);
const token=(length)=>(rand()+rand()+rand()+rand()).substr(0,length);


// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.post('/login', rescue(async (request, response) => {
  const { email, password } = request.body
  if (!email) {
    return response.status(400).json({ message: 'O campo \"email\" é obrigatório' });
  }
  if (!password) {
    return response.status(400).json({ message: 'O campo \"password\" é obrigatório' });
  }
  const re = /\S+@\S+\.\S+/;
  if (!(re.test(email))) {
    return response.status(400).json({ message: "O \"email\" deve ter o formato \"email@email.com\"" });
  }

  if (!(password >= 6)) {
    return response.status(400).json({ message: "O \"email\" deve ter o formato \"email@email.com\"" });
  }
  
  response.status(200).json({token: token(16)})
}))

app.listen(PORT, () => {
  console.log('Online');
});