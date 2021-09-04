#! /bin/bash
clear
npm init -y
echo 'node_modules'>>.gitignore
echo '.env'>>.gitignore
touch .env
touch index.js
echo "const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

require('dotenv').config();
const { PORT } = process.env;
const router = require('./api/routes/routes');

app.get('/', router)

app.listen(PORT, () => {
  console.log(`Acessar: http://localhost:${PORT}`);
  console.log(`Server listening on port ${PORT}`);
});
">>index.js
npm i express express-rescue express-validations body-parser mongodb dotenv
npm i nodemon -D
mkdir models services controllers helpers validations middlewares routes config
cd models
touch connection.js
echo "const { MongoClient } = require('mongodb');

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

let db = null;

const connection = () => {
    return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
    db = conn.db('model_example');
    return db;
    })
};

module.exports = connection;">>connection.js
touch model.js
cd ..
cd services
touch serviceName.js
cd ..
cd controllers
touch controllerName.js
cd ..
cd validations
touch validations.js
cd ..
cd helpers
touch helpers.js
cd ..
cd routes
touch router.js
echo "const express = require('express');
const router = express.Router();

const { getAll, findById, create, edit, remove } = require('../controllers/controlerName');

router.get('/', getAll);

router.get('/', findById);

router.post('/', create);

router.put('/', edit);

router.delete('/', remove);


module.exports = router;
">>router.js
cd ..
cd middlewares
touch middlewareName.js
cd ..
clear
echo "boilerplate terminado! by Luan da Silva Ramalho | https://github.com/luanlsr"