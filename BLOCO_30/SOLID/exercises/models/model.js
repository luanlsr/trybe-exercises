const { ObjectId } = require('bson');
const schema = require('../schemas/schema');

const getAll = async () => {
  const result = await schema.find();
  return result;
  };

const createUser = async (breed, needsSun, origin, specialCare, size) => {
  const result = await schema.create({
    breed, 
    needsSun, 
    origin, 
    specialCare, 
    size,
  });

  return {
    _id: result._id,
    breed, 
    needsSun, 
    origin, 
    specialCare, 
    size,
  };
}


module.exports = {
  createUser,
  getAll
};
