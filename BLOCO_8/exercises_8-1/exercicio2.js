const numberChecker = (myNumber, number) => myNumber === number;
//   return myNumber === number ? 'Ganhou!' : 'Try again!';
   
// }
// console.log(numberChecker(2, 2))

// const numberChecker = (myNumber , number) => {
//   return myNumber === number;
// }

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));
