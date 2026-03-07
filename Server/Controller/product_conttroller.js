//importing the product model
const producttable=require("../Models/Product_model")

//create a function
const addproduct=async(req,res)=>{

    try {
        const{productname,productprice,productquantity,productdescription}=req.body;
        const productdetails=new producttable({
            productname,
            productprice,
            productquantity,
            productdescription
        })
        await productdetails.save();
        res.status(201).json({message:"Product added successfully",pdata:productdetails})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server Error",error})
    }
}

module.exports=addproduct