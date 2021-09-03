const express = require('express');
const rescue = require('express-rescue')
const bodyParser = require('body-parser');

const models = require('../../models/model')
const { getAll, create, find } = models
const app = express();

app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const HTTP_CREATED = 201;


const getAllUsers = rescue(async(_req, res) => {
  const user = await getAll();

  res.status(HTTP_OK_STATUS).json(user);
});

// exercício 1
const postUsers = rescue(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const user = await create(firstName, lastName, email, password);

  res.status(HTTP_CREATED).json(user);
});

const getUserById = rescue(async (req, res) => {
  const { params: {id} } = req;
  const user = await find(id);

  res.status(HTTP_OK_STATUS).json(user);
});

module.exports = {
  getAllUsers,
  postUsers,
  getUserById
}
