const usertable=require("../Models/User_model")

  const registeruser=async(req,res)=>{
    try {
        const{name,email,password,phone,address}=req.body;
        const userdetails=new usertable({
            name,
            email,
            password,
            phone,
            address,
           
        }) 
        await userdetails.save();
        
        res.status(201).json({message:"user added successfully",udata:userdetails})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error",error})
    }
}
const getuser=async(req,res)=>{
    try {
        const getallusers=await usertable.find()
        console.log(getallusers)        
        res.status(200).json({message:"User fetched",allusers:getallusers})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error",error})
    }
}
const getuserbyid=async(req,res)=>{
    try {
        const uid=req.params.id
        const userbyid=await usertable.findById(uid)
        console.log(userbyid)
        res.status(200).json({message:"user found",byid:userbyid})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error",error})
    }

}
const deleteuser=async(req,res)=>{
    try {
    const did=req.params.id
    const deleteuser=await usertable.findByIdAndDelete(did)
    console.log(deleteuser)
    res.status(200).json({message:"user deleted",d_user:deleteuser})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error",error})
        
    }
}
const updateuser=async(req,res)=>{
    try {
        const {id}=req.params
        const body=req.body
        const updateduser=await usertable.findByIdAndUpdate(id,body,{new:true})
        console.log(updateduser)
        res.status(201).json({message:"User updated",updatedata:updateduser})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error",error})
        
    }
}

module.exports={registeruser,getuser,getuserbyid,deleteuser,updateuser}
