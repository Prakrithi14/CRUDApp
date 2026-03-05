const express=require("express")
const addproduct=require("../Controller/product_conttroller")
const route=express.Router()

route.post("/addproduct",addproduct)

module.exports=route