const productModel = require('../models/product')

const shop = async function(req,res){
   if(req.email == "ashutosh69695@gmail.com"){
      res.redirect('/owner');
   }
   // console.log(req.email);
   try{let products = await productModel.find();
    
    res.render('shop',{products});
   }catch(err){
      console.log(err);
   } 
}
module.exports = shop