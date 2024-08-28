const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const signin = require('./routes/signIn')

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.get('/',(req,res)=>{
    res.render('loginAndSignup');
});
app.use('/user',signin);
// app.get('/',(req,res)=>{
//     res.render('landing');
// })
app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("server is running");
});