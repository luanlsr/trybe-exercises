const fs = require('fs').promises;

async function addNelsonToFamily() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

  const nelsonMuntz = simpsons.filter(simpson => simpson.name === 'Nelson Muntz');
  console.log(nelsonMuntz);


  const reduce = nelsonMuntz.reduce((acc, curr) => {
    return {
      ...acc,
      id:curr.id,
      name: curr.name
    }
  }, {})

  const simpsonsFamily = await fs
    .readFile('./simpsonsFamily.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
    simpsonsFamily.push(reduce);
    console.log(simpsonsFamily);

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

addNelsonToFamily()
