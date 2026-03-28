
import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
export default function UpdateCategory() {
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
    phone:'',
    address:''

  })
  const [categorydata,setCategorydata]=useState({
    categoryname:'',
    categorydescription:''
  }
)

  const {catid}=useParams();
  const handleChange=(e)=>{
    console.log({...categorydata,[e.target.name]:e.target.value})
    setCategorydata({...categorydata,[e.target.name]:e.target.value})
  }
  useEffect(()=>{
    axios.get(`http://localhost:7000/Category/getcategorybyid/${catid}`)
    .then((res)=>{
        console.log(res.data.cdata)
        setCategorydata(res.data.cdata)
    })
    .catch((error)=>{
        console.log(error)

    })
  },[])
const handleUpdate=async()=>{
    const categorydatas=new FormData();
    categorydatas.append('categoryname',categorydatas.categoryname);
    categorydatas.append('categorydescription',categorydatas.categorydescription);
    try {
        await axios.put(`http://localhost:7000/Category/updatecategory/${catid}`,categorydata);
        alert("Category updated successfully");
    } catch (error) {
        console.log(error)
    }
}
  return (
    <div style={{backgroundColor:"aliceblue"}}> 
      <Paper elevation={20} style={{width:"500px",padding:"20px",marginTop:"50px",marginBottom:"50px",marginLeft:"370px"}}> 
      <Typography variant='h4' style={{fontFamily:"math",fontWeight:"bold", marginLeft:"100px"}}>Update Category</Typography>
      <TextField variant='outlined' label=' Category Name' name='categoryname'type='Text' value={categorydata.categoryname}  onChange={handleChange} fullWidth style={{marginBottom:"10px"}}/>
       <TextField variant='outlined' label='category description' name='categorydescription' value={categorydata.categorydescription} multiline rows={4} fullWidth style={{marginBottom:"10px"}} onChange={handleChange}/>
       <Button variant='contained' fullWidth onClick={handleUpdate} >Update</Button>
      </Paper>
    </div>
  )
}
