const userModel = require('../models/user');
const {hashPassword,comparePassword} = require('../utils/bcryptUtils');
const bcryptUtils = require('../utils/bcryptUtils'); 
const signupController = async (req,res)=>{
    try{
    let {name,email,password} = req.body;

    let findUser = await userModel.findOne({email:email});
    
    if(!findUser){
        let hashedPassword = await hashPassword(password);
        
        let user = await userModel.create({
        name,
        email,
        password:hashedPassword
    });
    res.send("created");
        
        
    }else{
        return res.send('email already exists');
    }
    
}catch(err){
    res.send(err);
}
    

}
module.exports = signupController