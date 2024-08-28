const bcrypt = require('bcryptjs');
const hashPassword = async (password)=>{
   salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password,salt);
    return hashedPassword;
   
 }
 
 const comparePassword = async (plainPassword,hashedPassword)=>{
   return bcrypt.compare(plainPassword,HashedPassword);
 }

 module.exports = {hashPassword,comparePassword}