require('dotenv').config();
const jwt = require('jsonwebtoken');

const verifyToken = async (req,res,next)=>{
    
    let token = req.cookies.token;
    if(!token){
        return res.redirect('/');
    }
     
    try{
    let decoded = await jwt.verify(token,process.env.SECRET_KEY);
    req.email = decoded.email;
        next(); 
    }
    catch(error){
        res.send('invalid token',{error});
    }
}
module.exports = verifyToken