const express = require('express')
const app = express()
const port = 3000

app.get('/', (_req, res) => {
  res.send(`<h1 align="center">FORMULÁRIO COM HTTP</h1><br><br>
  <form align="center" action="/" method="POST"> 
  Nome: <input type="text" name="name"><br>
  Sobrenome: <input type="text" name="lastName"><br>
  Idade: <input type="number" name="age"><br>
  Data de Nascimento: <input type="date" name="birthdayDate"><br><br>
  <button>ENVIAR</button></form>`)
})

app.post('/', (req, res) => {
  res.send(`Formulário recebido!`)
})

app.listen(port, () => {
  console.log('Acessar http://localhost:3000');
  console.log(`Ouvindo na porta ${port}`)
})