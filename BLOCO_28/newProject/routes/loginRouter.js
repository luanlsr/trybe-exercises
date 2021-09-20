const express = require('express');

const router = express.Router();
const validateJWT = require('../auth/validateJWT');

const login = require('../controllers/login')

apiRoutes.get('/posts', validateJWT, routes.getPosts);
router.post('/login', login)

module.exports = router;

userSeach

