import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
export default function Login() {
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
    phone:'',
    address:'',
    // gender:''

  })
  
  const handleChange=(e)=>{
    console.log({...formData,[e.target.name]:e.target.value})
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleRegister=()=>{
    //   const existingusers=JSON.parse(localStorage.getItem('userdetails'))||[];
    //   console.log(existingusers)
    //   const allusers=[...existingusers,formData]
    //   localStorage.setItem('userdetails',JSON.stringify(allusers))
    //   alert("Registered Successful")
    console.log("Form data:",formData)
    axios.get('http://localhost:7000/user/registeruser',formData)
    .then((res)=>{
        console.log("Registered User:",res.data)
        //alert("Registered Successful")
       alert(res.data.message)
    })
    .catch((error)=>{
        console.log(error)
    })
  }
  return (
    <div> 
      <Paper elevation={20} style={{width:"500px",padding:"20px",marginTop:"200px",marginBottom:"50px",marginLeft:"500px"}}> 
      <Typography variant='h4' style={{fontFamily:"math",fontWeight:"bold", marginLeft:"100px"}}>Sign In</Typography>
      {/* <TextField variant='outlined' label=' Name' name='name'type='Text'  onChange={handleChange} fullWidth style={{marginBottom:"10px"}}/> */}
      <TextField variant='outlined' label='Email' fullWidth  name='email' type='Email' style={{marginBottom:"10px"}} onChange={handleChange}/>
      <TextField variant='outlined' label='Password' fullWidth name='password' type='password' style={{marginBottom:"10px"}} onChange={handleChange}/>
      {/* <TextField variant='outlined' label='Phone ' fullWidth name='phone'type='Number' style={{marginBottom:"10px"}} onChange={handleChange}/> */}
       {/* <TextField variant='outlined' label='Address ' name='address'multiline rows={4} fullWidth style={{marginBottom:"10px"}} onChange={handleChange}/> */}


    <Button variant='contained' fullWidth onClick={handleRegister}>Register</Button>
     <a style={{marginLeft:"200px",marginBottom:"10px"}}  href='/Register'>New User?Register</a>
      </Paper>
    </div>
  )
}
