const jwt = require('jsonwebtoken');
const userModel = require('../models/user')
const cartRefresh = async (req,res)=>{
      let token = req.cookies.token;
      let decoded = await jwt.verify(token,process.env.SECRET_KEY);
      let email = decoded.email;
      let user = await userModel.findOne({email:email});
      
      let  {productId,quantity} = req.body;
      let product = user.cart.find(items => items.productId.toString() ===productId);
      if(product){
        product.quantity = quantity;
        user.save();
        res.redirect('/cart');
      }
      else{console.log('something went wrong')}


}
const cart = async (req,res)=>{ 
    let token = req.cookies.token;
    let decoded = await jwt.verify(token,process.env.SECRET_KEY);
    let email = decoded.email;
    let user = await userModel.findOne({email:email}).populate('cart.productId');
    let cartItems = user.cart;
    res.render('cart',{cartItems})


}
module.exports = {cartRefresh,cart};