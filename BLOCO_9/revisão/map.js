const numbers = [1, 2, 3, 4, 5]

const map = (array, callback) => {
  let newArray = []
  for (let index = 0; index < array.length; index += 1) {
    const mappedItem = callback(array[index])
    newArray.push(mappedItem)
  }
  return newArray;
}
console.log(map(numbers, (number) => number * 2));