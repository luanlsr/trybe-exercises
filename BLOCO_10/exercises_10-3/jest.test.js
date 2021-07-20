const divisivelPorDois = require("./jest.js")

test('quando o número aleatório é par, a função retorna `true`', () => {
  expect(divisivelPorDois(6)).toBe(true); // Como garantimos que o número retornado será par?
});