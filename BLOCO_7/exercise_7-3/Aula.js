const assert = require('assert');

const summationOf = (number) => {
  let summation = 0;
  for (let index = 1; index <= number; index += 1) {
    summation += index
  }
  return summation
  
}
assert.strictEqual(summationOf(1), 1, 'O retorno deve ser 1');
assert.strictEqual(summationOf(3), 6, 'O retorno deve ser 1');
assert.strictEqual(summationOf(5), 15, 'O retorno deve ser 1');
