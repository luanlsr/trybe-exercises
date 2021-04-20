const numbers = [1, 2, 3, 4, 5]

function addOne(array) {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] + 1;
  }
  return array
}

console.log(addOne(numbers));