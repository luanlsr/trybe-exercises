// Posição da Rainha

let queenRowPosition = 4;
let queenColumnPosition = 4;

// Posição da peça oponente

let opponentRowPosition = 3;
let opponentColumnPosition = 7;

// Identifica se o ataque foi bem sucedido

let succesfulAttack = false;

// Se a coluna ou a linha da peça oponente forem iguais à coluna ou linha
// O ataque é bem sucedido

if(queenRowPosition === opponentRowPosition){
  console.log('Ataque bem sucedido na mesma linha')
  succesfulAttack = true;
}
if(queenColumnPosition === opponentColumnPosition){
  console.log('Ataque bem sucedido na mesma coluna')
  succesfulAttack = true;
}

// Diagonal inferior esquerda

for (let index = 1; index < 8; index += 1){
  let queenRow = queenRowPosition - index;
  let queenColumn = queenColumnPosition - index;

  if(queenRow === 0 && queenColumn === 0){
    break;
  }
  if(queenRow === opponentRowPosition && queenColumn === opponentColumnPosition){
    console.log('Ataque bem sucedido na diagonal inferior esquerda')
  }
}
// Diagonal inferior direita

for (let index = 1; index < 8; index += 1){
  let queenRow = queenRowPosition + index;
  let queenColumn = queenColumnPosition - index;

  if(queenRow === 0 && queenColumn === 0){
    break;
  }
  if(queenRow === opponentRowPosition && queenColumn === opponentColumnPosition){
    console.log('Ataque bem sucedido na diagonal inferior direita')
  }
}
// Diagonal superior esquerda

for (let index = 1; index < 8; index += 1){
  let queenRow = queenRowPosition - index;
  let queenColumn = queenColumnPosition + index;

  if(queenRow === 8 && queenColumn === 8){
    break;
  }
  if(queenRow === opponentRowPosition && queenColumn === opponentColumnPosition){
    console.log('Ataque bem sucedido na diagonal superior esquerda')
  }
}
// Diagonal superior direita

for (let index = 1; index < 8; index += 1){
  let queenRow = queenRowPosition + index;
  let queenColumn = queenColumnPosition + index;

  if(queenRow === 8 && queenColumn === 8){
    break;
  }
  if(queenRow === opponentRowPosition && queenColumn === opponentColumnPosition){
    console.log('Ataque bem sucedido na diagonal superior direita')
  }
}
if(queenRow !== opponentRowPosition && queenColumn !== opponentColumnPosition){
  console.log('Não conseguiu atacar')
}