const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const addToCart = require('../controllers/addToCartController');
const {cartRefresh,cart} = require('../controllers/cartController')




router.post('/addToCart',authMiddleware,addToCart);
router.post('/cartRefresh',authMiddleware,cartRefresh);
router.get('/cart',authMiddleware,cart)
module.exports = router  