const rescue = require('express-rescue');
const service = require('../services/serviceName');

// const User = require('../models/model')

const create = rescue(async(req, res) => {
  const {username, password} = req.body

  // const user = await User.getByName(username);

  const created = await service.create(
    username,
    password
    );


    res.status(201).json({message: 'Novo usuário criado com sucesso', username: created.username});
});

const getAll = rescue(async (_req, res) => {
  const getAll = await service.getAll();
  return res.status(200).json(getAll);
});

const getByName = rescue(async (req, res) => {
  const {username} = req.body
  const getByName = await service.getByName(username);
  return res.status(200).json(getByName);
});


module.exports = {create, getAll, getByName }