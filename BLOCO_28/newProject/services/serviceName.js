const model = require('../models/model');
// const User = require('../models/model')

const getAll = async () => model.getAll();

const getByName = async (username) => model.getByName(username);


const create = async (username, password) => {
  const created = model.create(username, password)
  return created;
};

module.exports = {
  getAll,
  create,
  getByName
};

