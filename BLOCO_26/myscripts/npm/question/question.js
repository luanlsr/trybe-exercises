const {questionInt} = require('readline-sync');
const script = questionInt('Qual script deve ser executado: 1, 2 ou 3? ');
const sorteio = require('../jogoAdvinhacao/sorteio');
const imc = require('../imc/imc');
const velMedia = require('../velocidadeMedia/velMedia');

function questionScript(script) { 
  if(script === 1){
    return sorteio()
  }
  if(script === 2){
    return imc()
  }
  if(script === 3){
    return velMedia()
  }
}

questionScript(script)
