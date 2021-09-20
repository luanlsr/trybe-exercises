require('dotenv').config();

const connect = require('./connection');


const create = async (username, password) =>{
  const db = await connect()
  const result = await db.collection('users').insertOne({ username, password })


  return {
    _id: result.insertedId,
    username,
    password,
  };
}

const getByName = async (username) => {
  const db = await connect()
  const result = await db.collection('users').findOne({username});
  console.log(result);
  return result
  }
  

const getAll = async () => {
const db = await connect()
const result = await db.collection('users').find().toArray();
console.log(result);
return result
}

module.exports = { create, getAll, getByName };