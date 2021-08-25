const fs = require('fs');

let rawdata = fs.readFileSync('simpson.json');
let simpsons = JSON.parse(rawdata);

const simpsonsPersons = () => {
  const xablau = new Promise((resolve, reject) => { 
    const sim = simpsons.map(({id, name}) => `${id} - ${name}`)
    resolve(sim)
  })
  return xablau
}

simpsonsPersons()
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message))