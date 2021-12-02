const serviceLogin = require('../services/loginService');
const rescue = require('express-rescue')
const jwt = require('jsonwebtoken');

const {secret} = process.env;

const login = rescue(async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  if (!username || !password) return res.status(401).json({ message: 'É necessário usuário e senha para fazer login' });

  const user = await serviceLogin.getByName(username,);

  if (!user || user.password !== password) return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });
  const token = jwt.sign({ data: user }, secret, jwtConfig);

  return res.status(200).json({ message: 'Login efetuado com sucesso', token});

});

module.exports = login