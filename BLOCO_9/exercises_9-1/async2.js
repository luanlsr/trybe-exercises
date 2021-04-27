const funcao1 = (callback) => {
  setTimeout(() => {
    console.log(`1 - Coletando dados do cliente`)
    callback();
  }, Math.random() * 5000)
}

const funcao2 = () => {
  setTimeout(() => {
    console.log(`2 - Enviando e-mail`)
    console.log('Finalizando envio do e-mail');
  }, Math.random() * 5000)
}

console.log('Iniciando envio de e-mail');

funcao1(funcao2);


