//importing the product model
const producttable=require("../Models/Product_model")

//create a function
const addproduct=async(req,res)=>{

    try {
        const{productname,productprice,productquantity,productdescription,categoryId}=req.body;
        const pimage=req.file? req.file.filename:null
        const productdetails=new producttable({
            productname,
            productprice,
            productquantity,
            productdescription,
            categoryId,
            productimage:pimage
        })
        await productdetails.save();
        res.status(201).json({message:"Product added successfully",pdata:productdetails})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server Error",error})
    }
}
const getproducts=async(req,res)=>{
    try {
        const getallproducts=await producttable.find()
        console.log(getallproducts)
        res.status(200).json({message:"products fetched",allproducts:getallproducts})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server Error",error})
    }
}
 const getproductbyid=async(req,res)=>{
    try {
       const pid=req.params.id
       const productbyid=await producttable.findById(pid)
       console.log(productbyid)
       res.status(200).json({message:"product fetched by id",productid:productbyid})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"server error",error})
    }
 }

 const deleteproduct=async(req,res)=>{
    try {
        const pid=req.params.id
        const deleteproduct=await producttable.findByIdAndDelete(pid)
        console.log(deleteproduct)
        res.status(200).json({message:"Product deleted",d_product:deleteproduct})
    } catch (error) {
        console.log(error)
        req.status(500).json({message:"server error",error})
    }

 }

 const updateproduct=async(req,res)=>{
    // try {
    //     const {id}=req.params
    //     const body=req.body
    //     const updatedproduct=await producttable.findByIdAndUpdate(id,body,{new:true})
    //     console.log(updatedproduct)
    //     res.status(201).json({message:"Product updated",updatedata:updatedproduct})
        
    // } catch (error) {
    //    console.log(error) 
    //    res.status(500).json({message:"server error",error})
    // }
    


     try {
        const{productname,productprice,productquantity,productdescription,categoryId}=req.body;
        const pimage=req.file? req.file.filename:null
        const productdetails={
            productname,
            productprice,
            productquantity,
            productdescription,
            categoryId,
            productimage:pimage
        }
        const updatedProduct = await producttable.findByIdAndUpdate(
      req.params.id,
      productdetails,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct
    });
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server Error",error})
    }
 }
module.exports={addproduct,getproducts,getproductbyid,deleteproduct,updateproduct}