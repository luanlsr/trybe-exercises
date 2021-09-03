const connection = require('./connection');
const { ObjectId } = require('mongodb')

const getAll = () => {
  const users = connection().then((db) => db.collection('user').find().toArray())
  return users
}

const create = (firstName, lastName, email, password) => {
  return connection()
    .then((db) => db.collection('user')
      .insertOne({
        firstName,
        lastName,
        email,
        password
      })
    .then((result) => result))
}

const find = (id) => {
  return connection()
    .then((db) => db.collection('user')
      .findOne({
        _id: ObjectId(id)
      })
    .then((result) => result))
}

module.exports = {
  getAll,
  create,
  find
};
