const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'N.A', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const repeat = (rightAnswer, studantAnswer, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswer.length; index += 1) {
    const respostasCorretas = action(rightAnswer[index], studantAnswer[index]);
    contador += respostasCorretas;
  }
  return `Nota final de ${contador} pontos`;
};

console.log(repeat(RIGHT_ANSWERS, STUDENT_ANSWERS, (action1, action2) => {
  if (action1 === action2) {
    return 1;
  } if (action2 === 'N.A') {
    return 0
  }
  return -0.5
  
}));




// const repeat = (rightAnswers, studentAnswers, action) => {
//   let contador = 0;
//   for (let index = 0; index < rightAnswers.length; index += 1) {
//     const actionReturn = action(rightAnswers[index], studentAnswers[index]);
//     contador += actionReturn;
//   }
//   return `Resultado final: ${contador} corretas`;
// };

// console.log(repeat(RIGHT_ANSWERS, STUDENT_ANSWERS, (rAnswer, uAnswer) => {
//   if (rAnswer === uAnswer) {
//     return 1;
//   } if (uAnswer === 'N.A') {
//     return 0;
//   }
//   return -0.5;
// }));