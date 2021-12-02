const validatePassword = (req, res, next) => {
  const {password} = req.body;
  if (!password) return res.status(400).json({ message: 'Campo obrigatório' });
  if (password.length < 6) return res.status(400).json({ messagem: 'O campo "password" deve ter pelo menos 6 caracteres' });

  res.status(201);

  next();
};

module.exports = {
  validatePassword,
};
