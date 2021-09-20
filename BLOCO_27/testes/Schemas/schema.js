const mongoose = require('mongoose');

const ModelSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    directedBy: {
      type: String,
    },
    releaseYear: {
      type: String,
    }
  },
);

module.exports =  mongoose.model('movies', ModelSchema);
