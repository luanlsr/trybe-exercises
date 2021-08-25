const {questionInt} = require('readline-sync');
const script = questionInt('Qual script deve ser executado: 1, 2 ou 3? ');
const imc = require('../imc/imc');
const sorteio = require('../jogoAdvinhacao/sorteio');
const velMedia = require('../velocidadeMedia/velMedia');


function questionScript(script) { 
  if(script === 1){
    sorteio()
  }
  if(script === 2){
    imc()
  }
  if(script === 3){
    velMedia()
  }
}

questionScript(script)
