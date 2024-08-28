const express = require('express');
const router = express.Router();

const userModel = require('../models/product');
const loginController = require('../controllers/loginController');
const signUpController = require('../controllers/signupController');



router.post('/login',loginController)
router.post('/register',signUpController);
module.exports = router