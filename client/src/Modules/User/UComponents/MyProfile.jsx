import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function MyProfile() {
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    phone:'',
    address:'',
   

  })
const token=localStorage.getItem('UserToken')
console.log("usertoken details:",token)
  const handleChange=(e)=>{
    console.log({...formData,[e.target.name]:e.target.value})
    setFormData({...formData,[e.target.name]:e.target.value})
  }
useEffect(()=>{
  viewprofile()
},[])

const {uid}=useParams()
  const viewprofile=async(req,res)=>{
        try {
            const response=await fetch("http://localhost:7000/user/getprofile",{method:"GET",headers:{"auth-token":token}})
            // axios.get('http://localhost:7000/user/getprofile',{headers:{"auth-token":token}})
            const details=await response.json()
            console.log(details.udata)
            setFormData(details.udata)
            
        } catch (error) {
            console.log(error)
        }
    }
// const handleUpdate=async()=>{
   
//     try {
//         const response = await axios.put(
//             "http://localhost:7000/user/updateuser/" + formData._id,
//             formData,
//             {
//                 headers: {
//                     "auth-token": token
//                 }
//             }
//         )
//         console.log("Updated data:", response.data)
//         alert("Profile updated successfully")

//     } catch (error) {
//         console.log(error)
//         alert("Update failed")
//     }
// }
const handleProfile=async(req,res)=>{
  try {
     const response=await fetch("http://localhost:7000/user/updateprofile",{method:"PUT",body:JSON.stringify(formData),headers:{"auth-token":token,"Content-Type":"application/json"}})
     const details=await response.json()
     alert("Profile updated successfully")
    setFormData(details.udetails)
  } catch (error) {
    console.log(error)
    res.status(500).json({message:'Server error'})
  }
}
    // try {
    //   axios.put('http://localhost:7000/user/updateuser/${uid}',userdata,{headers:{"auth-token":token}})
    //   alert("Profile updated successfully");
    // } catch (error) {
    //   console.log(error)
      
    // }

  return (
    <div > 
      <Paper elevation={20} style={{width:"500px",borderRadius:"35px",padding:"15px",marginTop:"140px",marginBottom:"50px",marginLeft:"500px"}}> 
      <Typography variant='h4' style={{fontFamily:"math",fontWeight:"bold", marginLeft:"150px"}}>My Profile</Typography>
      <TextField variant='outlined' label=' Name' value={formData.name} name='name'type='Text'  onChange={handleChange} fullWidth style={{marginBottom:"10px"}}/>
      <TextField variant='outlined' label='Email' fullWidth value={formData.email}  name='email' type='Email' style={{marginBottom:"10px"}} onChange={handleChange}/>
      <TextField variant='outlined' label='Phone ' fullWidth value={formData.phone} name='phone'type='Number' style={{marginBottom:"10px"}} onChange={handleChange}/>
       <TextField variant='outlined' label='Address ' name='address'multiline rows={4}  value={formData.address}fullWidth style={{marginBottom:"10px"}} onChange={handleChange}/>

       <Button variant='contained' onClick={handleProfile}fullWidth sx={{backgroundColor:'black'}}>Update</Button>
       <a style={{marginLeft:"150px",marginBottom:"10px"}} href='/Login'>Already Registered?Login</a>
      </Paper>
    </div>
  )
}
