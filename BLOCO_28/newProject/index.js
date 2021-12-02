const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const router = require('./routes/router');
const loginRouter = require('./routes/loginRouter');

app.use('/', router);

app.use('/', loginRouter)

app.listen(PORT, () => {
  console.log(`online na porta ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});


