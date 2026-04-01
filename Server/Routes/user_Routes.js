const express=require("express")
const {login,registeruser,updateprofile,getuser,getuserbyid,deleteuser,updateuser,getprofile}=require("../Controller/user_controller")
const auth=require("../Middleware/auth")

const route=express.Router()

route.post("/registeruser",registeruser)
route.post("/Login",login)
route.get("/getuser",getuser)
route.get("/getuserbyid/:id",getuserbyid)
route.delete("/deleteuser/:id",deleteuser)
route.put("/updateuser/:id",updateuser)
route.put("/updateprofile",auth,updateprofile)
route.get("/getprofile",auth,getprofile)
module.exports=route
