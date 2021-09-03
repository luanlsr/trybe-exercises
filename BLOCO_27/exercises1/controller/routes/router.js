const express = require('express');

const router = express.Router();

const exercises = require('../middleware/ex1');
const {getAllUsers, postUsers, getUserById} = exercises

const validations = require('../../services/validations/validations')
const { validatePassword } = validations


router.get('/', getAllUsers);

router.post('/', validatePassword, postUsers);

router.get('/:id', getUserById);


module.exports = router;
