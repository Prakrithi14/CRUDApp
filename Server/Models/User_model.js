//import mongoose
const mongoose=require('mongoose')
//create new schema
const userschema=new mongoose.Schema({
    name:{ type:String},
    email:{type:String},
    password:{type:String},
    phone:{type:Number},
    address:{type:String},
})
module.exports=mongoose.model("User",userschema)

//User->table name(collection name)