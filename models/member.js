const mongoose = require('mongoose');
const memberSchema = mongoose.Schema({
  fullName : {
               type:String , required:true,
             },
 membership:{
            type:String,required:true,
            },
 membershipdate:{
     type:Date,
     default:Date.now()
 }
});
module.exports = mongoose.model('Member',memberSchema);