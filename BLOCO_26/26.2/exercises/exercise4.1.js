const fs = require('fs');

let rawdata = fs.readFileSync('simpsons.json');
let simpsons = JSON.parse(rawdata);

const simpsonsPersons = () => {
  const xablau = new Promise((resolve, reject) => {
    if(!simpsons) reject(new Error('deu ruim')) 
    const sim = simpsons.map(({id, name}) => `${id} - ${name}`)
    resolve(sim)
  })
  return xablau
}

simpsonsPersons()
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message))