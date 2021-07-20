// Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const pessoaContratada = (nome) => {
  let nomeEmail = nome.replace(' ', '_').toLowerCase();
  return { nomeCompleto: nome, email: `${nomeEmail}@trybe.com`};
}


const newEmployees = () => {
  const employees = {
    id1: pessoaContratada('Pedro Guerra'),
    id2: pessoaContratada('Luiza Drumond'),
    id3: pessoaContratada('Carla Paiva')
  }
  return employees;
};
console.log(newEmployees());
