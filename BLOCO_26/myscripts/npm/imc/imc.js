const readline = require('readline-sync');
const peso = readline.questionFloat('Qual seu peso? ');
const altura = readline.questionFloat('Qual sua altura? ');
const calculoImc = require('./calculoImc')

function imc() {
  const imc = calculoImc(peso, altura);

  if(imc < 18.5) {
    return console.log(`Seu IMC é ${imc} | Abaixo do peso (magreza)`)
  }
  if(imc >= 18.5 && calculoImc() <=24.9) {
    return console.log(`Seu IMC é ${imc} | Peso normal`)
  }
  if(imc >= 25 && imc <= 29.9) {
    return console.log(`Seu IMC é ${imc} | Acima do peso (sobrepeso)`)
  }
  if(imc >= 30 && imc <= 34.9) {
    return console.log(`Seu IMC é ${imc} | Obesidade grau I`)
  }
  if(imc >= 35 && imc <= 39.9) {
    return console.log(`Seu IMC é ${imc} | Obesidade grau II`)
  }
  if(imc > 40) {
    return console.log(`Seu IMC é ${imc} | Obesidade grau III e IV`)
  }
}

imc()