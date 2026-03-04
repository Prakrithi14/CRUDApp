const express=require("express")
const registeruser=require("../Controller/user_controller")

const route=express.Router()

route.post("/registeruser",registeruser)
module.exports=route
