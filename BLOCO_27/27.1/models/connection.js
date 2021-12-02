// const mysql = require('mysql2/promise');


// // const {host, user, password, database} = process.env
// const connection = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'model_example' 
// });

// module.exports = connection;

const mongodb = require('mongodb').MongoClient;

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';
const DB_NAME = 'model_example'
const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

module.exports = () =>
    mongodb.connect(MONGO_DB_URL, OPTIONS)
    .then((connection) => connection.db(DB_NAME))
    .catch((err) => {
        console.log(err);
        process.exit(1)
    })