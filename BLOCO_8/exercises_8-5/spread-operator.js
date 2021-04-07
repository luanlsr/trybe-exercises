const carros = ['Gol' , 'HB20', 'Focus'];
const motos = ['Bis', 'R1'];

const veiculos = [...carros, ...motos]

console.log(veiculos)

const conhecimentosTrybe = {
  softSkills: true,
  hardSkills: true,
  trabalho: true,
}

const pessoa = {
  nome: 'Nádia',
  idade: '28',
  cidade: 'BH',
}

const pessoaTrybe = {
  ...pessoa,
  ...conhecimentosTrybe,
}

console.log(conhecimentosTrybe);
console.log(pessoa);
console.log(pessoaTrybe);