let num1 = 10;
let num2 = 11;
let num3 = 12;

if (num1 > num2 && num1 > num3){
  console.log(`O número ${num1} é maior que ${num2} e ${num3}`);
}else if (num2 > num1 && num2 > num3){
  console.log(`O número ${num2} é maior que ${num1} e ${num3}`);
}else{
  console.log(`O número ${num3} é maior que ${num1} e ${num2}`);
}