const fs = require('fs');

let rawdata = fs.readFileSync('simpson.json');
let simpsons = JSON.parse(rawdata);

const simpsonsPersons = (id) => {
  const simpsonPromise = new Promise((resolve, reject) => { 
    const pqp = simpsons.some((item) => id === Number(item.id))
    !pqp ? reject(new Error(`id não encontrado`))
    : resolve(simpsons.find((item) => id === Number(item.id)))
  })
  return simpsonPromise
}

simpsonsPersons(8)
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message))

