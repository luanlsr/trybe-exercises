// GET /plants : retorna todas as plantas;
// GET /plant/:id : retorna uma planta com o id;
// DELETE /plant/:id : deleta uma planta com o id;
// POST /plant/:id : sobrescreve a planta com id;
// POST /plant : cria uma planta nova;
// GET /sunny/:id : retorna uma planta que precisa de sol com o id.

const service = require('../service/service');

const createUser = async (req, res) => {
  const {email, password} = req.body;
  const result = await service.createUser(email, password)
  res.status(200).json(result)
}

const getAll = async (req, res) => {
  const result = await service.getAll()
  res.status(200).json(result)
}

module.exports = {getAll, createUser}