//importing mongoose
const mongoose=require('mongoose')

//create schema for products
const productschema=new mongoose.Schema({
    productname:{type:String},
    productprice:{type:Number},
    productquantity:{type:Number},
    productdescription:{type:String}
})
module.exports=mongoose.model("Product",productschema)