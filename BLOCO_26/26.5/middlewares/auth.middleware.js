const validUser = {
  username: 'MestreCuca',
  password: 'MinhaSenhaSuperSeguraSqn',
};

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  if (!username && !password) {
    return res.status(401).json({ message: 'Username and password can`t be blank!' });
  }

  if (!(username === validUser.username && password === validUser.password)) {
    return res.status(401).json({ message: 'Invalid credentials!' });
  }

  next();
};

function validateName(req, res, next) {
  const {name} = req.body;
  if (!name || name === '') return res.status(400).json({message: 'Invalid data!'});

  next();
}

module.exports = { authMiddleware, validateName};
