const connection = require('./connection')

const createUser = async (username, password) => {
  const db = await connection();
  const result = db.collection('xablauUser').insertOne({
    username,
    password,
  })
  return result
}

module.exports = {
  createUser,
}