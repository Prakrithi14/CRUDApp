//import mongoose
const mongoose=require('mongoose')
//create new schema
const userschema=new mongoose.Schema({
    name:{ type:String,required:true},
    email:{type:String,unique:true},
    password:{type:String,required:true},
    phone:{type:Number,required:true},
    address:{type:String,required:true},
    // gender:{type:mongoose.Schema.Types.ObjectId,ref:"Gender"}
})
module.exports=mongoose.model("User",userschema)

//User->table name(collection name)