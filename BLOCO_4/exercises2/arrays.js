// Exercício 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1){
  console.log(numbers[index])
}

// Exercício 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
for (let index = 0; index < numbers.length; index += 1){
  soma = soma + numbers[index]
}
console.log(`O resultado da soma dos valores ${numbers} é: ${soma}`)

//Exercício 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
for (let index = 0; index < numbers.length; index += 1){
  soma = soma + numbers[index]
}

let media = soma/numbers.length

console.log(`O resultado da média dos valores ${numbers} é: ${media}`)

// Exercício 4
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
for (let index = 0; index < numbers.length; index += 1){
  soma = soma + numbers[index]
}

let media = soma/numbers.length

console.log(`O resultado da média dos valores ${numbers} é: ${media}`)

if(media >= 20){
  console.log('Valor maior que 20');

}else{
  console.log('Valor menor que 20')
}

// Exercício 5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber = 0

for (let index = 0; index < numbers.length; index += 1){
  let eachNumber = numbers[index];
  
    if(eachNumber > higherNumber){
      higherNumber = eachNumber
    }      
}

console.log(higherNumber)

// Exercício 6
let numbers = [4, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;

for (let index = 0; index < numbers.length; index += 1){
  
  if(numbers[index] % 2 != 0){
    
    impar += 1;
  }
} 
console.log(impar);



// Exercício 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallerNumber = numbers[0]

for (let index = 0; index < numbers.length; index += 1){
  let eachNumber = numbers[index];
  
    if(eachNumber < smallerNumber){
      smallerNumber = eachNumber
    }      
}

console.log(smallerNumber)

// Execício 8
let contagem = []

for (let index = 1; index <= 25; index += 1){
  contagem.push(index)
  
}
console.log(contagem)

// Exercício 9

let contagem = []

for (let index = 1; index <= 25; index += 1){
  contagem.push(index)
  
}
for(let div = 0; div < contagem.length; div += 1){
  let divisao = contagem[div]/2
  console.log(divisao)
}

