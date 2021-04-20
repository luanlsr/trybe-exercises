// função nomeada
function minhaFuncao (param1, param2) {
  console.log(`função1: ${param1} + ${param2} = ${param1 + param2}`);
}

minhaFuncao(2, 3);

// função anônima 
const minhaFuncao2 = function(param1, param2){
  return `função2: ${param1} + ${param2} = ${param1 + param2}` 
}
console.log(minhaFuncao2(3, 3));

// arrow functions
const minhaFuncao3 = (param1, param2) => {
  return `função3: ${param1} + ${param2} = ${param1 + param2}`
}
console.log(minhaFuncao3(5, 5));

//OU

const minhaFuncao4 = (param1, param2) => param1 + param2;

console.log(minhaFuncao4(5, 5));

