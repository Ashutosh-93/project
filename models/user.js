const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:27017/ranch`);


const userSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:String,
    password:String,
    cart:[
        {
            productId:{type:mongoose.Schema.Types.ObjectId,ref:"product"},
                quantity:{
                    type:Number,
                    default:1
                }}
    ]
});

module.exports = mongoose.model('user',userSchema); 
