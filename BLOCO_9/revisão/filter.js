const numbers = [1, 2, 3, 4, 5]

const filter = (array, callback) => {
  let newArray = []
  for (let index = 0; index < array.length; index += 1) {
    if (callback(array[index]))
    newArray.push(array[index])
  }
  return newArray;

}
console.log(filter(numbers, (number) => number % 2 === 0));