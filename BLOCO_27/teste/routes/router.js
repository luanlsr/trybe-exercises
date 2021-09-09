const express = require('express');

const router = express.Router();

const {
  getAll,
  findById,
  create,
  edit,
  remove,
} = require('../controllers/controllerName');

router.get('/', getAll);

router.get('/', findById);

router.post('/', create);

router.put('/', edit);

router.delete('/', remove);

module.exports = router;


