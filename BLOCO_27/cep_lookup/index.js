const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

require('dotenv').config();
const { PORT } = process.env;
const router = require('../routes/routes');


app.get('/cep', router)



app.listen(PORT, () => {
  console.log(`Acessar: http://localhost:${PORT}`);
  console.log(`Server listening on port ${PORT}`);
});

