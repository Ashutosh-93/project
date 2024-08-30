const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const addToCart = require('../controllers/addToCartController');




router.post('/',authMiddleware,addToCart);
module.exports = router  