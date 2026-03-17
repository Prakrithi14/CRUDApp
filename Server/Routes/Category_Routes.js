const express=require('express')
const {addcategory,getcategory,deletecategory,updatecategory,getCategorybyid}=require('../Controller/category_controller')
const route=express.Router()

route.post('/addcategory',addcategory)
route.get('/getcategory',getcategory)
route.delete('/deletecategory/:id',deletecategory)
route.put('/updatecategory/:id',updatecategory)
route.get('/getcategorybyid/:id',getCategorybyid)
module.exports=route