const express = require('express');
const router = express.Router();

const {  AuthControllers } = require('../controllers')

router.post('/register' , AuthControllers.Register )
router.post('/login' , AuthControllers.Login)
router.post('/register/google' , AuthControllers.RegisterGoogle)

module.exports = router