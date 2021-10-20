const model = require('../models/model');

const getAll = async () => {
  const result = await model.getAll();
  return result;
};

const createUser = async (email, password) => {
  const result = await model.createUser(email, password);
  return result;
};

module.exports = {
  createUser,
  getAll
};
