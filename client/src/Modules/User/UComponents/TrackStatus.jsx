import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Menu, MenuItem, Select } from '@mui/material'
import { useNavigate } from 'react-router-dom'
export default function TrackStatus() {

  const [bookings, setBookings] = useState([])
const navigate=useNavigate()

const utoken=localStorage.getItem('UserToken')
console.log("user token",utoken)
if(!utoken){
    alert("Please login to view order status!!")
    navigate('/Login')
    
}
const fetchbooking=()=>{
  axios.get("http://localhost:7000/booking/getuserBooking",{headers:{"Content-Type":"application/json","auth-token":utoken}})
    .then((res)=>{
      console.log(res.data)
      setBookings(res.data.bdata)
    })
    .catch((error)=>{
      console.log(error)
    })
}
  useEffect(()=>{
    fetchbooking()
  }, [])


 
  return (
    <Box sx={{
      minHeight: "100vh",
      background: "#f4f6f8",
      p: 4
    }}>
      <Typography
     variant="h4"
     mb={3}
     fontWeight="bold"
     textAlign="center"
   >
      Booking Management </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TableContainer sx={{ width: "90%", background: "white", borderRadius: 2, boxShadow: 3 }}>
        <Table>
          <TableHead sx={{ background: "#4f46e5" }}>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Sl Number</TableCell>
              <TableCell sx={{ color: "white" }}>Name</TableCell>
              
              <TableCell sx={{ color: "white" }}>Address</TableCell>
              <TableCell sx={{ color: "white" }}>Product ID</TableCell>
             
              <TableCell sx={{ color: "white" }}>Booking Status</TableCell>
            
            </TableRow>
          </TableHead>
           
        <TableBody>
          {bookings.map((b,index) => (
            <TableRow>
              <TableCell>{index+1}</TableCell>
              <TableCell>{b.fullname}</TableCell>              
              <TableCell>{b.address}</TableCell>              
              <TableCell>{b.ProductId?.productname}</TableCell>              
              <TableCell>{b.bookingstatus}</TableCell>             
            </TableRow>
          ))}
        </TableBody>
        </Table>
        </TableContainer>
       
      </Box>
    </Box>
  )
}
