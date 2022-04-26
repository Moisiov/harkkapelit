const express = require('express');
const userControllers = require('../controllers/user.controllers');
const router = express.Router();

router.post('/api/login/google', userControllers.userLoginGoogle);

module.exports = router