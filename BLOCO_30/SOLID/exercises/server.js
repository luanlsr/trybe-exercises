const express = require("express");
const bodyParser = require("body-parser");
require('./config/connection')
const routes = require('./routes/router')
const cors = require('cors');
const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);


app.listen(PORT, () => {
  console.log(`Acessar: http://localhost:${PORT}`);
})