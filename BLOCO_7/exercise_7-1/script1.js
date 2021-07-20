const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(`${ifScope} o que estou fazendo aqui ? :O`); 
}

testingScope(false);


let oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a,b) => a - b);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

let oddsAndEvens2 = [13, 3, 4, 10, 7, 2];

oddsAndEvens2.sort((a,b) => a + b);
// oddsAndEvens2.reverse()

console.log(`Os números ${oddsAndEvens2} se encontram ordenados de forma decrescente!`);

