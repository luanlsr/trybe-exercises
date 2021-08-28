
// EXERCICIO 1
// Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }

// const express = require('express');

// const app = express(); // 1

// app.get('/ping', pingPOng); // 2

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// }); // 3

// function pingPOng(_req, res) {
//   res.status(200).send('pong'); // 4
// }


// EXERCICIO 2

// Crie uma rota POST /hello
// Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
// Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .

// const express = require('express');
// const bodyParser = require('body-parser')
// const app = express(); // 1

// app.use(bodyParser.json())

// app.post('/hello', function (req, res) {
//   const {name} = req.body

//   res.status(201).json({ message: `Hello, ${name}`});
// })

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// }); // 3

// EXERCICIO 3

// const express = require('express');
// const bodyParser = require('body-parser')
// const app = express(); // 1

// app.use(bodyParser.json())

// app.post('/grettings', function (req, res) {
//   const {name, age} = req.body
//   if(age < 17 ) return res.status(401).json({message: 'Unauthorized'})

//   res.status(201).json({ message: `Hello, ${name}`});
// })

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// }); // 3


// EXERCICIO 4

// const express = require('express');
// const bodyParser = require('body-parser')
// const app = express(); // 1

// app.use(bodyParser.json())

// app.put('/users/:name/:age', function (req, res) {
//   const {name, age} = req.body

//   res.status(201).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
// })

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// }); // 3

// EXERCICIO 6

// const express = require('express');
// const app = express();
// const rescue = require('express-rescue');
// const getSimpsons = require('./simpsons')


// app.get('/simpsons', rescue(async (req, res) => {
//   const simpsons = await getSimpsons.getSimpsons();

//   res.status(200).json(simpsons);
// }))

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// }); 


// EXERCICIO 7

// const express = require('express');
// const app = express();
// const rescue = require('express-rescue');
// const getSimpsons = require('./simpsons')

// app.get('/simpsons/:id', rescue(async (req, res) => {
//   const {id} = req.params

//   const simpsons = await getSimpsons.getSimpsons();
//   const filter = simpsons.find((index) => index.id === id)
//   if(!filter) return res.status(404).json("404 - Not Found!")

//   res.status(200).json(filter);
// }))

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// });


// EXERCICIO 8

const express = require('express');
const app = express();
const rescue = require('express-rescue');
const Simpsons = require('./simpsons')

app.post(
  '/simpsons',
  rescue(async (req, res) => {
    const { id, name } = req.body;

    const simpsons = await Simpsons.getSimpsons();

    if (simpsons.map(({ id }) => id).includes(id)) {
      return res.status(409).json({ message: 'id already exists' });
    }

    simpsons.push({ id, name });

    await Simpsons.setSimpsons(simpsons);

    res.status(204).end();
  })
);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

