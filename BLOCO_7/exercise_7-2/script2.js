const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// const modifyLesson2 = (object, key, value) => object[key] = value

// console.log(modifyLesson2(lesson2, 'turno', 'manhã'))
// console.log(lesson2)

// const listObject = (obj) => Object.keys(obj)
// console.log(listObject(lesson1));

// const lengthObject = (obj) => listObject(obj).length;
// console.log(lengthObject(lesson1));

// const listValues = (obj) => Object.values(obj)
// console.log(listValues(lesson1));


const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons)



const numberOfStudents = (lessons) => {
  const keys = Object.keys(lessons);
  let total = 0
  for (index in keys) {
    let currentKey = keys[index];
    total += lessons[currentKey].numeroEstudantes
    console.log(total);
  }
  return total
}

console.log(`O valor total de alunos é ${numberOfStudents(allLessons)}`)

// const getValueByNumber = (obj,number) => Object.values(obj)[number];
// console.log(getValueByNumber());


// const verifyPair = (obj, key, value) => {
//   const arr = Object.entries(obj);
//   let isEqual = false;
//   for (let index in arr) {
//     if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
//   }
//   return isEqual;
// };
// console.log(verifyPair(lesson2,'professor','Carlos'));