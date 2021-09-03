const mongodb = require('mongodb').MongoClient;

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';
const DB_NAME = 'users'
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
