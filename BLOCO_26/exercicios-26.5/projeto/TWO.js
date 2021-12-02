const rescue = require('express-rescue');
const fs = require('./ONE');

const { getTalker } = fs;
const HTTP_OK_STATUS = 200;
const HTTP_NOT_FOUND_STATUS = 400;

// Requisito 1

const getAllTalkers = rescue(async (_request, response) => {
  const getTalkers = await getTalker();
  if (!getTalkers) return response.status(HTTP_OK_STATUS).json([]);

  response.status(HTTP_OK_STATUS).json(getTalkers);
});

module.exports = getAllTalkers