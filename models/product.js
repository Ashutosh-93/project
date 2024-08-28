const mongoose = require('mongoose');
const { type } = require('os');
mongoose.connect(`mongodb://localhost:27017/ranch`);

const productSchema = mongoose.Schema({
    name:{
        type:String
    },
    price:Number,
    image:{
        type:"Buffer",
        required:true
    }
    
});
module.exports = mongoose.model('product',productSchema);
