const usertable=require("../Models/User_model")

  const registeruser=async(req,res)=>{
    try {
        const{name,email,password,phone,address}=req.body;
        const userdetails=new usertable({
            name,
            email,
            password,
            phone,
            address
        }) 
        await userdetails.save();
        
        res.status(201).json({message:"user added successfully",udata:userdetails})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error",error})
    }
}

module.exports=registeruser