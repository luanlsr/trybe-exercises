// models/Author.js

const connection = require('./connection');

// // Cria uma string com o nome completo do autor

// const getNewAuthor = (authorData) => {
// const { id, firstName, middleName, lastName } = authorData;

// // const fullName = [firstName, middleName, lastName]
// //     .filter((name) => name)
// //     .join(' ');

// return {
//     id,
//     firstName,
//     middleName,
//     lastName,
//     // name: fullName,
// };
// };

// // // Converte o nome dos campos de snake_case para camelCase

// const serialize = (authorData) => ({
//     id: authorData.id,
//     firstName: authorData.first_name,
//     middleName: authorData.middle_name,
//     lastName: authorData.last_name});

// // Busca todos os autores do banco.

// const getAll = async () => {
//     const [authors] = await connection.execute(
//         'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
//     );
//     return authors.map(serialize).map(getNewAuthor);
// };

// module.exports = {
//     getAll,
// };



const getAll = async () => {
    return connection()
        .then((db) => db.collection('authors').find().toArray())
            .then((authors) =>
                authors.map(({ _id, firstName, middleName, lastName }) =>
                ({
                    id: _id,
                    firstName,
                    middleName,
                    lastName,
                })
            )
        );
}

module.exports = {
        getAll,
    };