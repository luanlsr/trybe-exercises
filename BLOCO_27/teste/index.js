const express = require('express');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const router = require('./routes/router');


require('dotenv').config();

const { PORT } = process.env;

app.use('/home', router);

app.listen(PORT, () => {
  console.log();
  console.log();
});
