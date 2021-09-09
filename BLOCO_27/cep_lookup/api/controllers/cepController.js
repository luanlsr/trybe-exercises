const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue')

const app = express();
app.use(bodyParser.json());

const statusCode = require('../helpers/status_code');
const service = require('../service/service');
const { getAllS, findS, createS } = service;

const {
  HTTP_OK_STATUS,
} = statusCode;

const getAllC = rescue(async(_req, res) => {
  const ceps = await getAllS();
  
  res.status(HTTP_OK_STATUS).send(ceps);
});

const getAllById = rescue(async(req, res) => {
  const { id } = req.params
  const ceps = await findS(id);
  
  res.status(HTTP_OK_STATUS).send(ceps);
});

const createCep = rescue(async(req, res) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body
  const ceps = await createS(cep, logradouro, bairro, localidade, uf);
  
  res.status(HTTP_OK_STATUS).send(ceps);
});

module.exports = {
  getAllC,
  getAllById,
  createCep,
}