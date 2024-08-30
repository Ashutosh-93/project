const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const signin = require('./routes/signIn');
const createProduct = require('./routes/createProduct');
const shop = require('./routes/shopRoute');
const landingPage = require('./routes/shopRoute');
const addToCart = require('./routes/cartRoute');

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());



app.get('/',(req,res)=>{
    res.cookie("token", "");
    res.render('loginAndSignup');
});
app.use('/',landingPage);
app.use('/addToCart',addToCart);
app.use('/user',signin);
app.use('/owner',createProduct); 
app.use('/shop',shop);
// app.get('/',(req,res)=>{
//     res.render('landing');
// })
app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("server is running");
});