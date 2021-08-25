const exercise1 = require('./exercise1')

const randomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100 + 1)
  return randomNumber
}

exercise1(randomNumber(), randomNumber(), randomNumber())
  .then((data) => console.log(data))
  .catch((err) => consle.log(err.message))