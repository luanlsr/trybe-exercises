const mongoose = require('mongoose')
require('dotenv').config();
const MONGO_DB_URL = process.env.MONGO_DB_URL;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connection = mongoose.connect(MONGO_DB_URL, OPTIONS)

module.exports = connection;