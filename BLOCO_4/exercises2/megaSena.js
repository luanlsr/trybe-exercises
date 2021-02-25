// Array vazio que terá números sorteados
let megaSenaNumbers = []

// Vamos gerar os números da mega de forma aleatória

let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);

megaSenaNumbers.push(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber);
// megaSenaNumbers.push(firstNumber);
// megaSenaNumbers.push(secondNumber);
// megaSenaNumbers.push(thirdNumber);
// megaSenaNumbers.push(fourthNumber);
// megaSenaNumbers.push(fifthNumber);
// megaSenaNumbers.push(sixthNumber);

let firstPlay = [33, 24, 12, 19, 15, 51];
console.log(`Os números sorteados da mega-sena são: ${megaSenaNumbers}`)

// Conferir o jogo.
let numberOfHits = 0;

for (let index = 0; index < megaSenaNumbers.length; index += 1){
  let currentDrawMegaSenaNumber = megaSenaNumbers[index]

  for (let firstPlayindex = 0; firstPlayindex < firstPlay.length; firstPlayindex += 1){
    let currentPlayedNumber = firstPlay[firstPlayindex];

    if(currentDrawMegaSenaNumber === currentPlayedNumber){
      numberOfHits += 1;
    }
  }
}

console.log(`Você acertou ${numberOfHits} números na Mega Sena`)

//   if (megaSenaNumbers == firstNumber){
//     console.log(`Seu jogo foi: ${firstPlay} ...PARABÉNS!!! VOCÊ GANHOU`)
//   }else{
//     console.log(`Seu jogo foi: ${firstPlay} ...Que pena! Tente outra vez!`)
//   }
// }



