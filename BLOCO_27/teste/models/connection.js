const mongodb = require('mongodb').MongoClient;
require('dotenv').config();

const { DB_URL, DB_NAME } = process.env;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = () => mongodb.connect(DB_URL, OPTIONS).then((connection) => connection.db(DB_NAME))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
