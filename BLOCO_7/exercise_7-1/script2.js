let fatorial = x => x == 0 ? 1 : x * fatorial(x - 1);

let num = 5;
let result = fatorial(num)

console.log(`O fatorial de ${num} é ${result}`);

