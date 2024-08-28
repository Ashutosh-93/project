const userModel = require('../models/user');
const {hashPassword,comparePassword} = require('../utils/bcryptUtils');
const bcryptUtils = require('../utils/bcryptUtils');
const signupController = async (req,res)=>{
    try{
    let {name,email,password} = req.body;

    let findUser = await userModel.findOne({email:email});
    
    if(findUser){
        return res.send('email already exists');
        
    }
    let hashedPassword = bcryptUtils.hashPassword(password);
    let user = await userModel.create({
        name,
        email,
        password:hashedPassword
    });
    res.send("created");
}catch(err){
    console.log(err);
}
    // this is elon musk
}
module.exports = signupController
