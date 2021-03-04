function generateRandomNumber(){

}
let megaSenaNumbers = []



let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);


function megaSenaDraw(){

  
}
megaSenaNumbers.push(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber);



function checkMegaSenaResult(result, game){

  // Conferir o jogo.
  let numberOfHits = 0;
  
  for (let index = 0; index < result.length; index += 1){
    for (let gameIndex = 0; gameIndex < game.length; gameIndex += 1){
      if(result[index] === game[gameIndex]){
        numberOfHits += 1;
      }
    }
  }
  
  return numberOfHits;
}

let game = [33, 24, 12, 19, 15, 51];
console.log(`Os números sorteados da mega-sena são: ${megaSenaNumbers}`)


console.log(`Você acertou ${numberOfHits} números na Mega Sena`)




