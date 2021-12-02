const {questionInt, question} = require('readline-sync');

function sorteio() {
  const numeroEscolhido = questionInt('Escolha um número para o sorteio: ')

  const randonNumber = Math.floor(Math.random() * 10 + 1);
  if(randonNumber === numeroEscolhido) {
    console.log(`O número sorteado foi: ${randonNumber}. Parabéns, número correto!`);
  }else {
    console.log(`Opa, não foi dessa vez. O número era ${randonNumber}`);
  }

  const questionGame = question('Deseja jogar novamente?')
  if(questionGame === 's') {
    return sorteio()
  } if (questionGame === 'n'){
    console.log('Até a próxima!');
  }
}

sorteio()