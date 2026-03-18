//importing mongoose
const mongoose=require('mongoose')

//create schema for products
const productschema=new mongoose.Schema({
    productname:{type:String,required:true},
    productprice:{type:Number,required:true},
    productquantity:{type:Number,required:true},
    productdescription:{type:String,required:true},
    categoryId:{type:mongoose.Schema.Types.ObjectId,
                ref:"Category"
    }
})
module.exports=mongoose.model("Product",productschema)