const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) =>
  // listStudents.filter((student) => student !== name.forEach((name) => (name))); // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.
  listStudents.filter(student => !nomesParaExcluir.includes(student))

const nomesParaExcluir = ['Ricardo', 'Jorge']
const newListStudents = removeStudentByName(nomesParaExcluir, arrayMyStudents);
console.log(newListStudents); // [ 'Maria', 'Manuela', 'Wilson' ]
