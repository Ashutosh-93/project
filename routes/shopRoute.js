const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController');
const verifyToken = require('../middlewares/authMiddleware');



router.get('/',verifyToken,shopController);
router.get('/landing',(req,res)=>{
    res.render('landing'); 
})

module.exports = router;