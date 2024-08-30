const userModel = require('../models/user');

const addToCart = async (req,res)=>{
    let email = req.email;
    let productId = req.body.productId;
    // console.log(productId,typeof(productId))
    let user = await userModel.findOne({email:email});
    console.log(user.cart);
    let cartItem;
   
    cartItem = user.cart.find(item => item.productId.toString()===productId);
   
   try{
    if(cartItem){
        
     cartItem.quantity+=1;
     user.save();
     res.redirect('/shop');

    }
    else{
      user.cart.push({productId:productId,quantity:1});
      user.save();
     res.redirect('/shop');
      
    }
}
    catch(err){
        console.log(err+"12345");
       }

}  
module.exports = addToCart