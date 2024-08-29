const express = require('express');
const router = express.Router();
const createProductController = require('../controllers/createProductController')
const multer = require('multer');
const verifyToken = require('../middlewares/authMiddleware');
const upload = multer({storage:multer.memoryStorage()});


router.post('/createProduct',upload.single('image'),createProductController);

router.get('/',verifyToken,(req,res)=>{
    if(req.email == "ashutosh69695@gmail.com"){
        res.render('createProduct.ejs');
     }
     else{
        res.status(403).redirect('/');
     }
    
})


module.exports = router