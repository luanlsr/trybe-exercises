let value = 5;
let linha = '';
let symbol = '*'

for (let line = 0; line < value; line += 1){
  linha = linha + symbol
  console.log(linha)

}
for (let column = 0; column < value; column += 1){
}

// Exercício 3

let value = 5;
let linha = '';
let symbol = '*'
let posicaoDoAst = value; 


for (let lineIndex = 0; lineIndex < value; lineIndex += 1){
  for (let columnIndex = 0; columnIndex <= value; columnIndex += 1){
    if( columnIndex < posicaoDoAst){
      linha = linha + ' '
    }else{
      linha = linha + symbol
    }
  }

  console.log(linha)
  linha = ''
  posicaoDoAst += -1
}

// Exercício 4
