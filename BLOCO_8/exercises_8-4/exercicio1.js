
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  
  return arrays.reduce((acc, curr) => acc.concat(curr), [])
  // função concat concatena vários arrays passados como parâmetro
}
console.log(flatten());
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);