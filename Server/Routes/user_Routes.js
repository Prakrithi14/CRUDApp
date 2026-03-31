const express=require("express")
const {login,registeruser,getuser,getuserbyid,deleteuser,updateuser}=require("../Controller/user_controller")


const route=express.Router()

route.post("/registeruser",registeruser)
route.post("/Login",login)
route.get("/getuser",getuser)
route.get("/getuserbyid/:id",getuserbyid)
route.delete("/deleteuser/:id",deleteuser)
route.put("/updateuser/:id",updateuser)
module.exports=route
