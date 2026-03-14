const categorytable=require("../Models/Category_model")

const addcategory=async(req,res)=>{
    try {
        const {categoryname,categorydescription}=req.body
        const categorydetails= new categorytable({
            categoryname,
            categorydescription
        })
        const saved=await categorydetails.save();
        res.status(201).json({message:"Category added successfully",cdata:saved})
    } 
    
    catch (error) {
        console.log(error)
        res.status(500).json({message:"server error",error})
    }
}
module.exports=addcategory