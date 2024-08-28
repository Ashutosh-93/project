const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController');



router.get('/',shopController);
router.get('/landing',(req,res)=>{
    res.render('landing');
})

module.exports = router;