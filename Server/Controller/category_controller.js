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
const getcategory=async(req,res)=>{
    try {
        const getallcategory=await categorytable.find()
        console.log(getallcategory)
        res.status(200).json({message:"category fetched ",allcategory:getallcategory})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server Error",error})
    }
}
const deletecategory=async(req,res)=>{
    try {
        const cid=req.params.id
        const deletecategory=await categorytable.findByIdAndDelete(cid)
        console.log(deletecategory)
        res.status(200).json({message:"category deleted",d_category:deletecategory})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server Error",error})
    }
}
const updatecategory=async(req,res)=>{
    try {
        const {id}=req.params
        const body=req.body
        const updatedcategory=await categorytable.findByIdAndUpdate(id,body,{new:true})
        console.log(updatedcategory)
        res.status(201).json({message:"User updated",updatedata:updatedcategory})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error",error})
        
    }
}
const getCategorybyid=async(req,res)=>{
    try{
        const cid=req.params.id
        const singlecategory=await categorytable.findById(cid)
        console.log(singlecategory)
        res.status(200).json({message:"category found",cdata:singlecategory})
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:"server error",error})
    }

}
module.exports={addcategory,getcategory,deletecategory,updatecategory,getCategorybyid}