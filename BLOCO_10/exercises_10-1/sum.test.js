// sum.js
const sum = require("./sum");
const substraction = require("./sub");
const division = require("./div");
const multiplication = require("./multi");


describe('Teste de soma', () => {
  it('sums two values', () => {
    expect(sum(2, 3)).toEqual(5);
  });
})

describe('Teste de subtração', () => {
  it('subtracts two values', () => {
    expect(substraction(3, 2)).toEqual(3);
  });
})

describe('Teste de divisão', () => {
  it('divides two values', () => {
    expect(division(4, 2)).toEqual(2);
  });
})

describe('Teste de multiplicação', () => {
  it('multiplies two values', () => {
    expect(multiplication(2, 3)).toEqual(6);
  });
})


