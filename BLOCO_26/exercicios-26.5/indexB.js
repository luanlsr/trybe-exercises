const express = require('express')
// const rescue = require('express-rescue')
const app = express()
// const router = express.Router()
// const validaUserName = require('./middlewares/middlewares')
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// app.use(validaUserName)

app.post('/user/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!username && !email && !password) {
    return res.status(401).json({ message: 'Username and password can`t be blank!' });
  }

  if (!(
    username.length > 3
    && email ===  'xablau@trybe.com'
    && password.length <= 8 
    && password.length >= 4 
    && !isNaN(password)
    )) 
    {
    return res.status(400).json({ message: 'Invalid data!' });
  }
  res.status(201).json({ messagem: "user created"})
})


app.listen(3002, function () {
  console.log('Aplicação ouvindo na porta 3002');
});



const rescue = require('express-rescue');
const fs = require('../utils/fileSystem');

const { getTalker } = fs;
const HTTP_OK_STATUS = 200;

// Requisito 1

const getAllTalkers = rescue(async (_request, response) => {
  const getTalkers = await getTalker();
  if (!getTalkers || getTalkers === '') return response.status(HTTP_OK_STATUS).json([]);

  return response.status(HTTP_OK_STATUS).json(getTalkers);
});

module.exports = { 
  getAllTalkers,
};