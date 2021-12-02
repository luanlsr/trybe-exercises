const express =  require('express');
const app =  express();
const {Store} = require('./src/models')
require('dotenv').config();
app.use(express.json());

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  // res.status(200).send('olá mundo!')
  Store.findAll().then((data) => {
    res.status(200).json(data)
  }).catch(e => {
    console.log(e.message);
    res.status(500).json({message: 'Something wrong on your request'})
  })
})


app.listen(PORT, () => {
  console.log(`Ouvindo na porta: ${PORT}
  Acessar http://localhost:${PORT}`)
})