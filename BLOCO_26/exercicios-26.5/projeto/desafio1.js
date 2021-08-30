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

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', rescue(async (_request, response) => {
  const getTalkers = await getTalker()
  if(!getTalkers) return response.status(200).json({})

  response.status(200).json(getTalkers)
}))

app.listen(PORT, () => {
  console.log('Online');
});