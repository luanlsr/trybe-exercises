const model = require('../models/model');
const { getAll, find, create } = model;

const getAllS = async () => {
  const ceps = await getAll();
  return ceps;
}

const findS = async (id) => {
  const ceps = await find(id);
  return ceps;
}

const createS = async (cep, logradouro, bairro, localidade, uf) => {
  const ceps = await create(cep, logradouro, bairro, localidade, uf);
  return ceps;
}


module.exports = {
  getAllS,
  findS,
  createS
}
