const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// function smallerName() {
//   let nameBook;
//   books.forEach((book) => {
    
//     if (book.name.length < nameBook.length) {
//       nameBook = book.name;
//     }
//   })
//   return nameBook;
// }

function smallerName() {
  let nameBook;
  //  Na primeira iteração nameBook estará vazio. E variável vazia retorna false. No if, !nameBook sendo true e book.name.length < nameBook.length sendo false, true || false retorna true e nameBook irá guardar o nome do primeiro livro.
  // Na segunda iteração nameBook estará com o nome do livro da primeira iteração e retornará verdadeiro. No if, !nameBook sendo false e book.name.length < nameBook.length sendo false, o if retornará false pois false || false retorna false. e não executará a ação de guardar o valor do livro em nameBook.
  // Na hipótese de nas iterações seguintes o nome do livro ser menor do que o que está guardado em nameBook for true o if executará a ação. O !nameBook só serve para a primeira iteração para não deixar a variável com valor nulo ou vazio ou undefined que é false.

  // escreva aqui o seu código
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');
