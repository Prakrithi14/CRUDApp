const express=require("express")
const {addproduct,getproducts,getproductbyid,deleteproduct,updateproduct}=require("../Controller/product_conttroller")
const route=express.Router()

route.post("/addproduct",addproduct)
route.get("/getproducts",getproducts)
route.get("/getproductbyid/:id",getproductbyid)
route.delete("/deleteproduct/:id",deleteproduct)
route.put("/updateproduct/:id",updateproduct)

module.exports=route