const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:27017/ranch`);

const userSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:String,
    password:String,
    Cart:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'product'
        }
});

module.exports = mongoose.model('user',userSchema);
