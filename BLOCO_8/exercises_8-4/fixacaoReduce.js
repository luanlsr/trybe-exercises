const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const filterNumbers = () => {
    return numbers
    .filter((number) => (number % 2 === 0))
    .reduce((acc, number) => (acc + number))
}

console.log(filterNumbers())
