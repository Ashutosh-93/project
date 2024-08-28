const productModel = require('../models/product')

const shop = async function(req,res){
   try{let products = await productModel.find();
    console.log(products);
    res.render('shop',{products});
   }catch(err){
      console.log(err);
   }
}
module.exports = shop