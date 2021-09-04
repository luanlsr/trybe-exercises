const connection = require('./connection');
const { ObjectId } = require('mongodb')

const getAll = () => {
  const ceps = connection().then((db) => db.collection('ceps').find().toArray())
  return ceps
}

const create = (cep, logradouro, bairro, localidade, uf) => {
  return connection()
    .then((db) => db.collection('user')
      .insertOne({
        cep,
        logradouro,
        bairro,
        localidade,
        uf,
      })
    .then((result) => result))
}

const find = (id) => {
  return connection()
    .then((db) => db.collection('ceps')
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