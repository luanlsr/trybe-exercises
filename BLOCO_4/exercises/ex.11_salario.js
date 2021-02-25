let salario = 2000;

let INSS = null;
let IR = null;

if(salario <= 1556.94){
  INSS = salario * 8/100;

}else if(salario >= 1556.94 && salario <= 2594.92){
  INSS = salario * 9/100;

}else if(salario >= 2594.92 && salario <= 5189.82){
  INSS = salario * 11/100;

}else if(salario >= 5189.82){
  INSS = 570.88;
}


let salarioDescontadoINSS = salario - INSS;

if(salarioDescontadoINSS <= 1903.98){
  IR = 0;

}else if(salarioDescontadoINSS >= 1903.98 && salarioDescontadoINSS <= 2826.65){
  IR = salarioDescontadoINSS * 7.5/100 - 142.80;
  
}else if(salarioDescontadoINSS >= 2826.65 && salarioDescontadoINSS <= 3751.05){
  IR = salarioDescontadoINSS * 15/100 - 354.80;
  
}else if(salarioDescontadoINSS >= 3751.05 && salarioDescontadoINSS <= 4664.68){
  IR = salarioDescontadoINSS * 22.5/100 - 636.13;
  
}else if(salarioDescontadoINSS >= 4664.68){
  IR = salarioDescontadoINSS * 27.5/100 - 869.36;
  
}

let salarioDeduzido = salarioDescontadoINSS - IR;

let salarioLiquido = salarioDescontadoINSS - salarioDeduzido

console.log(salarioDeduzido)