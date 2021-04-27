//com FOR
const numbers = [2, 3, 4, 6, 8, 12, 24]

let sumWithFor = numbers[0]
for (let index = 1; index < numbers.length; index += 1) {
  sumWithFor += numbers[index]
}

console.log(sumWithFor)

//com REDUCE
const numbers = [2, 3, 4, 6, 8, 12, 24]
const reduce = numbers.reduce((acc, curr) => {
  return acc + curr
}, 0)
console.log(reduce)

//com REDUCE sem informar valor inicial

const numbers = [2, 3, 4, 6, 8, 12, 24]
const reduce = numbers.reduce((acc, curr) => {
  return acc + curr
})
console.log(reduce)