const fs = require('fs');

let rawdata = fs.readFileSync('simpsons.json');
let simpsons = JSON.parse(rawdata);
// console.log(simpsons);

const simpsonsPersons = (id) => {
  const simpsonPromise = new Promise((resolve, reject) => { 
    const some = simpsons.some((item) => id === Number(item.id))
    !some ? reject(new Error(`id não encontrado`))
    : resolve(simpsons.find((item) => id === Number(item.id)))
  })
  return simpsonPromise
}

simpsonsPersons(8)
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message))

