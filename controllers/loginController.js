const { findOne } = require('../models/product');
const userModel = require('../models/user');
const {hashPassword,comparePassword} = require('../utils/bcryptUtils');
const jwt = require('json');
require('dotenv').config();

const loginController = async (req,res)=>{
    let {email,password} = req.body;
    let user = findOne({email:email});
    if(!email||!comparePassword(password,user.password)){
        return res.status(401).json({error:"Invalid email or password"});
    }
    const token = jwt.sign({email:user.email,id:user._id});
    req.cookie('token',token);
    res.send("logged in");

}

module.exports = loginController