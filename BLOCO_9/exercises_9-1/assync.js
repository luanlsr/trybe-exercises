const funcao1 = () => {
  setTimeout(() => {
    console.log(`1 - Big Mac`)
  }, Math.random() * 5000)
}

const funcao2 = () => {
  setTimeout(() => {
    console.log(`2 - Big Tasty`)
  }, Math.random() * 5000)
}

console.log('Iniciando');

funcao1();
funcao2();

console.log('Finalizando');
