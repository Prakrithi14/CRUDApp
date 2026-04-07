const express=require("express")
const {addproduct,getproducts,getproductbyid,deleteproduct,updateproduct}=require("../Controller/product_conttroller")
const route=express.Router()
const upload=require('../Middleware/imageupload')

route.post("/addproduct",upload.single('productimage'),addproduct)
route.get("/getproducts",getproducts)
route.get("/getproductbyid/:id",getproductbyid)
route.delete("/deleteproduct/:id",deleteproduct)
route.put("/updateproduct/:id",upload.single('productimage'),updateproduct)

module.exports=route