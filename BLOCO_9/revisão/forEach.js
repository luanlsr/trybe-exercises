const numbers = [1, 2, 3, 4, 5]

const forEach = (array, callback) => {
  for (let index = 0; index < array.length; index += 1) {
    array[index] = callback(array[index])
  }
  return array;
}
console.log(forEach(numbers, (number) => number + 2));