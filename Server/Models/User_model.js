//import mongoose
const mongoose=require('mongoose')
//create new schema
const userschema=new mongoose.Schema({
    name:{ type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    phone:{type:Number,required:true},
    address:{type:String,required:true},
})
module.exports=mongoose.model("User",userschema)

//User->table name(collection name)