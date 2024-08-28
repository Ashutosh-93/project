const express = require('express');
const router = express.Router();
const createProductController = require('../controllers/createProductController')
const multer = require('multer');
const upload = multer({storage:multer.memoryStorage()});


router.post('/createProduct',upload.single('image'),createProductController);

router.get('/',(req,res)=>{
    res.render('createProduct.ejs');
})


module.exports = router