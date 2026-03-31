const express=require("express")
const {registeradmin,loginbyadmin}=require('../Controller/admin_controller')


const route=express.Router()

route.post("/registeradmin",registeradmin)
route.post("/loginbyadmin",loginbyadmin)

module.exports=route
