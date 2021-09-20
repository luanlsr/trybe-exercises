const model = require('../models/model');

const getByName = async (username) => model.getByName(username);

module.exports = {
  getByName
};
