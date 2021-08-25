const {questionFloat} = require('readline-sync')
const distancia = questionFloat('Digite a distância em metros: ');
const tempo = questionFloat('Digite o tempo em segundos: ')

function velMedia(distancia, tempo) {
  const velocidadeMedia = `A velocidade média é ${distancia * tempo}km/h`
  return velocidadeMedia
}


console.log(velMedia(distancia, tempo));