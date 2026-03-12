const mongoose = require('mongoose');
const categoryschema=new mongoose.Schema(
    {
        categoryname:{type:String},
        categorydescription:{type:String},
    }
)
module.exports=mongoose.model("Category",categoryschema)