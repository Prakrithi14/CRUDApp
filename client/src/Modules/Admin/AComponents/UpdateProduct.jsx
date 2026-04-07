import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useParams } from 'react-router-dom';

export default function UpdateProduct() {
  const [product,setProduct]=useState({
            productname:'',
            productprice:'',
            productquantity:'',
            productdescription:'',
            categoryId:'',
            productimage:''

  })
const [category,setCategory]=useState([])

const {pid}=useParams()
useEffect(()=>{
  axios.get("http://localhost:7000/Category/getcategory")
  .then((res)=>{
    console.log(res.data.allcategory)
    setCategory(res.data.allcategory)
  })
 .catch((error)=>{
     console.log(error)
 })
},[])


  const handleChange=(e)=>{
    console.log({...product,[e.target.name]:e.target.value})
    //setProduct({...product,[e.target.name]:e.target.value})
    if(e.target.name==='productimage'){
      setProduct({...product,productimage:e.target.files[0]})
  }else{
     setProduct({...product,[e.target.name]:e.target.value})
  }
}
useEffect(()=>{
  axios.get(`http://localhost:7000/products/getproductbyid/${pid}`)
  .then((res)=>{
    console.log(res.data.productid)
      setProduct(res.data.productid)
  })
  .catch((error)=>{
    console.log(error)
  })
},[])
//   const handleUpdate=async()=>{
//     const productdatas=new FormData();
//     productdatas.append('productname',product.productname);
//     productdatas.append('productprice',product.productprice);
//     productdatas.append('productquantity',product.productquantity);
//     productdatas.append('productdescription',product.productdescription);
//  productdatas.append('categoryId',product.categoryId)    
//     // productdatas.append('productimage',productdatas.productimage) 
//     try {
//         await axios.put(`http://localhost:7000/products/updateproduct/${pid}`,product);
//         alert("Product updated successfully");
//     } catch (error) {
//         console.log(error)
//     }
// }


  const handleUpdate=async()=>{
    const productdatas=new FormData();
    productdatas.append('productname',product.productname);
    productdatas.append('productprice',product.productprice);
    productdatas.append('productquantity',product.productquantity);
    productdatas.append('productdescription',product.productdescription);
  productdatas.append('categoryId',product.categoryId)
    
    if(product.productimage){
      productdatas.append('productimage',product.productimage)
    }

    try {
        await axios.put(`http://localhost:7000/products/updateproduct/${pid}`,productdatas,{
          headers:{
            'Content-Type':'multipart/form-data'
          }
        }); 
        alert("Product updated successfully");
    } catch (error) {
        console.log(error)
    }
  } 
  return (
    <div style={{backgroundColor:"aliceblue"}}> 
      <Paper elevation={20} style={{width:"500px",padding:"20px",marginTop:"50px",marginBottom:"50px",marginLeft:"370px"}}> 
      <Typography variant='h4' style={{fontFamily:"math",fontWeight:"bold", marginLeft:"100px"}}>Update Product</Typography>
      <TextField variant='outlined' label=' Product Name' name='productname'type='Text'  value={product.productname} onChange={handleChange} fullWidth style={{marginBottom:"10px"}}/>
      <TextField variant='outlined' label='Product Price' fullWidth  name='productprice'  value={product.productprice} type='Number' style={{marginBottom:"10px"}} onChange={handleChange}/>
      <TextField variant='outlined' label='Quantity' fullWidth name='productquantity' type='Number' value={product.productquantity} style={{marginBottom:"10px"}} onChange={handleChange}/>
      <TextField variant='outlined' label='productimage' fullWidth name='productimage' type='file' InputLabelProps={{shrink:true}} style={{marginBottom:"10px"}} onChange={handleChange}/>
      {/* <TextField variant='outlined' label='Quantity' fullWidth name='productdescription' type='Text' style={{marginBottom:"10px"}} onChange={handleChange}/> */}
    <TextField variant='outlined' label='Description' name='productdescription' multiline rows={4}  value={product.productdescription} fullWidth style={{marginBottom:"10px"}} onChange={handleChange}/>
       
       <FormControl fullWidth label="Age">
        <Select
        name='categoryId'
        sx={{marginBottom:"10px"}}
         labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={product.categoryId}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem>Select Category</MenuItem>
          {category.map((cat)=>(
            <MenuItem value={cat._id}>{cat.categoryname}</MenuItem>
            
          ))}
       
        </Select>
      </FormControl>

       <Button variant='contained' fullWidth onClick={handleUpdate}>Update Product</Button>
      </Paper>
    </div>
  )
}
