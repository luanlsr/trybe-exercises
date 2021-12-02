const express = require('express')
const routes = express.Router();
const {createUser, getAll} = require('../controllers/controller')

routes.post('/', createUser);
routes.get('/', getAll);


module.exports = routes