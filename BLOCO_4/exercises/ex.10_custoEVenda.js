let custo = 10;
let venda = 20;
let imposto = 20*custo/100;
let custoTotal = custo + imposto;

let lucro = venda - custoTotal;

let vendaDeMil = lucro * 1000;
console.log(`R$${vendaDeMil},00`)
