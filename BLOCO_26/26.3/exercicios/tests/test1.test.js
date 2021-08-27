const { expect } = require('chai');

const numbers = require('../index');

describe('retornar uma string como resposta', () => {
  it('número passado for maior que 0 deverá retornar "positivo"', () => {
    const result = numbers(4)
    expect(result).to.be.equal('positivo');
  })
  it('número passado for menor que 0 deverá retornar "negativo"', () => {
    const result = numbers(-1)
    expect(result).to.be.equal('negativo');
  })
  it('número passado for igual a 0 deverá retornar "neutro"', () => {
    const result = numbers(0)
    expect(result).to.be.equal('neutro');
  })
})
  