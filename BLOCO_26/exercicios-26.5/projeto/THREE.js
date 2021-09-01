const requisitos = require('./middlewares/requisitos');

const { 
  getAllTalkers,
} = requisitos;

// requisito 1
app.get('/talker', getAllTalkers);
