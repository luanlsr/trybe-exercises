const numbers = [1, 2, 3, 4]

const reduce = (array, callback, initialValue) => {
  let acc, index;
  if (initialValue == undefined) {
    index = 1;
    acc = array[0];
  } else {
    index = 0;
    acc = initialValue;
  }

  for (; index < array.length; index += 1) {
    acc = callback(acc, array[index])
  }
  return acc;
}
console.log(reduce(numbers, (total, number) => total + number));