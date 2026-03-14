const express=require('express')
const addcategory=require('../Controller/category_controller')
const route=express.Router()

route.post('/addcategory',addcategory)

module.exports=route