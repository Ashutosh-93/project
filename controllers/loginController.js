require('dotenv').config();

const userModel = require('../models/user');
const {hashPassword,comparePassword} = require('../utils/bcryptUtils');
const jwt = require('jsonwebtoken');


const loginController = async (req,res)=>{
    let {email,password} = req.body;
    let user = await userModel.findOne({email:email});
    if(!user){
        // throw error("invalid credentials")
        return res.status(401).json({error:"Invalid email or password"});
    }
    let result = await comparePassword(password,user.password);
    
    if(!result){
        return res.status(401).json({error:"Invalid email or password"});
    }
    const token = jwt.sign({email:user.email,id:user._id},"secret");
    res.cookie('token',token);
    res.redirect('/shop');

}

module.exports = loginController