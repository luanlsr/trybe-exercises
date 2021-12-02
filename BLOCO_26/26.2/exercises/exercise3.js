const exercise1 = require('./exercise1')

const randomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100 + 1)
  return randomNumber
}

const pqp = async () => {
  try {
    const result = await exercise1(randomNumber(), randomNumber(), randomNumber())
    console.log(result);
  } catch (err) {
    console.error(`Deu merda! ${err.message}`);
  }
}

pqp()