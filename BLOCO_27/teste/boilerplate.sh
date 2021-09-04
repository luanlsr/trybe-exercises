#! /bin/bash
clear
npm init -y
echo 'node_modules'>>.gitignore
echo '.env'>>.gitignore
touch readme.md
echo "# Boilerplate
### _By Luan da Silva Ramalho_

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)



### Objetivo

> Este arquivo tem  objetivo de 
> diminuir o tempo gasto na inicialização
> dos projetos.

## Installation

basta copiar o arquivo boilerplate.sh para o repositório do projeto e executar no terminal o seguinte comando:

```sh
./boilerplate.sh
```

Após inicializado, entrar no arquivo _package.json_ e adicionar nos scripts a seguinte linha:

```json
"dev": "nodemon index.js",
```

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

## Connect with me. :smiley:

<div>
<div align=\"center\">
<p>
<a href=\"https://github.com/luanlsr\" target=\"_blank\"><img alt=\"Github\" src=\"https://img.shields.io/badge/GitHub-%2312100E.svg?&style=for-the-badge&logo=Github&logoColor=white\" /></a> 
<a href=\"https://www.linkedin.com/in/luan-ramalholsr/\" target=\"_blank\"><img alt=\"LinkedIn\" src=\"https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white\" /></a> 
<a href=\"https://www.instagram.com/luan_ramalholsr/\" target=\"_blank\"><img alt=\"Instagram\" src=\"https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white\" /></a>
<a href=\"mailto:luan.ramalhosilva@gmail.com\" target=\"_blank\"><img alt=\"Gmail\" src=\"https://img.shields.io/badge/Gmail-%2312100E?style=for-the-badge&logo=Gmail&logoColor=red\" /></a> 
</p>
</div>
">>readme.md
touch .env
echo "PORT=3000
DB_URL='mongodb://localhost:27017'
DB_NAME='databaseName'">>.env
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
mkdir docs models services controllers helpers validations middlewares routes config
cd models
touch connection.js
echo "const mongodb = require('mongodb').MongoClient;
require('dotenv').config();
const { DB_URL, DB_NAME } = process.env;

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

module.exports = () =>
    mongodb.connect(DB_URL, OPTIONS)
    .then((connection) => connection.db(DB_NAME))
    .catch((err) => {
        console.log(err);
        process.exit(1)
    })">>connection.js
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
echo "var expressValidations = require('express-validations')

const {
  isValidFirstname,
  isValidMiddlename,
  isValidLastname,
  isValidFullname,
  isStrongPassword,
  isValidDate,
  isAlpha,
  isNumeric,
  isAlphaNumeric,
  containsNotNumber,
  containsNotAlphabets,
  isLength,
  isValidURL,
} = expressValidations

const errors_messages = {
  firstName_invalid: 'first name is not valid',
  middleName_invalid: 'middle name is not valid',
  lastName_invalid: 'last name is not valid',
  firstName_length: 'first name should have length XXX'
}

const http_status_code = {
  HTTP_INVALID_STATUS: 422,
}

const { HTTP_INVALID_STATUS } = http_status_code
const { firstName_invalid, middleName_invalid, lastName_invalid, firstName_length } = errors_messages


const validate = (params) => {
  switch (true) {
    case isValidFirstname(firstName): return { code: HTTP_INVALID_STATUS, message: firstName_invalid}
    case isLength(firstName, 3, null ): return {code: HTTP_INVALID_STATUS, message: firstName_length}
    case isValidMiddlename(middleName): return { code: HTTP_INVALID_STATUS, message: middleName_invalid}
    case isValidLastname(lastName): return { code: HTTP_INVALID_STATUS, message: lastName_invalid}
  
    default: return {}
  }

}

module.exports = validate;">>validations.js
cd ..
cd helpers
touch helpers.js
echo "const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;
const HTTP_NO_BODY_STATUS = 422;
const HTTP_401 = 401;
const HTTP_NOT_FOUND_STATUS = 404;

module.exports = {
  HTTP_OK_STATUS,
  HTTP_CREATED_STATUS,
  HTTP_NO_BODY_STATUS,
  HTTP_401,
  HTTP_NOT_FOUND_STATUS,
}">> helpers.js
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
cd docs
touch docs.md
echo "# Express-Validations:
## Complete List of Validation Methods
* isValidEmail(email)
* isValidFirstname(firstname)
* isValidMiddlename(middlename)
* isValidLastname(lastname)
* isValidFullname(fullname)
* isStrongPassword(password)
* isValidDate(date)
* isAlpha(alphabeticString)
* isNumeric(numericString)
* isAlphaNumeric(alphaNumericString)
* containsNotNumber(nonNumericString)
* containsNotAlphabets(nonAlphabeticString)
* isLength(string, minLength, maxLength)
* isValidURL(url)">>docs.md
clear
echo "boilerplate terminado! by Luan da Silva Ramalho | https://github.com/luanlsr"