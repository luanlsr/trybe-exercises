const numbers = [1, 2, 3, 4, 5]

const find = (array, callback) => {
  for (let index = 0; index < array.length; index += 1) {
    if (callback(array[index]))
    return array[index]
  }
  return null;

}
console.log(find(numbers, (number) => number === 4));