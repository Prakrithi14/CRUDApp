import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
export default function AddProduct() {
  const [product,setProduct]=useState({
            productname:'',
            productprice:'',
            productquantity:'',
            productdescription:''

  })

  const handleChange=(e)=>{
    console.log({...product,[e.target.name]:e.target.value})
    setProduct({...product,[e.target.name]:e.target.value})
  }
  const handleRegister=()=>{
    //   const existingusers=JSON.parse(localStorage.getItem('userdetails'))||[];
    //   console.log(existingusers)
    //   const allusers=[...existingusers,formData]
    //   localStorage.setItem('userdetails',JSON.stringify(allusers))
    //   alert("Registered Successful")
    console.log("Product data:",product)
    axios.post('http://localhost:7000/products/addproduct',product)
    .then((res)=>{
        console.log("Product added successfully",res.data)
        //alert("Registered Successful")
       alert(res.data.message)
    })
    .catch((error)=>{
        console.log(error)
    })
  }
  return (
    <div style={{backgroundColor:"aliceblue"}}> 
      <Paper elevation={20} style={{width:"500px",padding:"20px",marginTop:"50px",marginBottom:"50px",marginLeft:"370px"}}> 
      <Typography variant='h4' style={{fontFamily:"math",fontWeight:"bold", marginLeft:"100px"}}>Add Product</Typography>
      <TextField variant='outlined' label=' Product Name' name='productname'type='Text'  onChange={handleChange} fullWidth style={{marginBottom:"10px"}}/>
      <TextField variant='outlined' label='Product Price' fullWidth  name='productprice' type='Number' style={{marginBottom:"10px"}} onChange={handleChange}/>
      <TextField variant='outlined' label='Quantity' fullWidth name='productquantity' type='Number' style={{marginBottom:"10px"}} onChange={handleChange}/>
      {/* <TextField variant='outlined' label='Quantity' fullWidth name='productdescription' type='Text' style={{marginBottom:"10px"}} onChange={handleChange}/> */}
    <TextField variant='outlined' label='Description ' name='productdescription 'multiline rows={4} fullWidth style={{marginBottom:"10px"}} onChange={handleChange}/>
       <Button variant='contained' fullWidth onClick={handleRegister}>Add Product</Button>
      </Paper>
    </div>
  )
}
