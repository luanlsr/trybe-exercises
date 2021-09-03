const express = require('express');
const app = express();

const usersRouter = require('./controller/routes/router')

app.use('/', usersRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Acessar http://localhost:3000');
  console.log(`Ouvindo a porta ${PORT}`);
});
