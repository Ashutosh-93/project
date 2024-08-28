require('dotenv').config();
const { findOne } = require('../models/product');
const userModel = require('../models/user');
const {hashPassword,comparePassword} = require('../utils/bcryptUtils');
const jwt = require('jsonwebtoken');

const loginController = async (req,res)=>{
    let {email,password} = req.body;
    let user = await findOne({email:email});
    let result = await comparePassword(password,user.password);
    if(!user||!result){
        return res.status(401).json({error:"Invalid email or password"});
    }
    const token = jwt.sign({email:user.email,id:user._id},"secret");
    req.cookie('token',token);
    res.send("logged in");

}

module.exports = loginController