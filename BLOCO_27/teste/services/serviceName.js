const model = require('../models/model');
const validate = require('../validations/validations');

const getAll = async () => model.getAll();

const findById = async (id) => {
  const author = await model.findById(id);
  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: 'Something is wrong',
      },
    };
  }
  return author;
};

const create = async (firstName, middleName, lastName) => {
  const existingAuthor = await model.findByName(firstName, middleName, lastName);

  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Um autor já existe com esse nome completo',
      },
    };
  }
  const created = await validate(firstName, middleName, lastName);
  return model.create(created);
};

module.exports = {
  getAll,
  findById,
  create,
};

