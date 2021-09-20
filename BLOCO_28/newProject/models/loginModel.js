require('dotenv').config();
const connect = require('./connection');

const getByName = async (username) => {
  const db = await connect()
  const result = await db.collection('users').findOne({username});
  return result
  }
  

module.exports = { getByName };