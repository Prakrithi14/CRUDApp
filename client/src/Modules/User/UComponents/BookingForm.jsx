import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function BookingForm() {
    const {productId}=useParams()  // Access the productId from the URL parameters
    const [booking, setBooking]=useState({
        fullname:'',
        email:'',
        phone:'',
        address:'',
        quantity:'',
        totalamount:'',
    })

    const [price,setPrice]=useState(0)
    const handleChange=(e)=>{
        if(e.target.name==='quantity'){
          const qty=e.target.value
          setBooking({...booking,quantity:qty,totalamount:qty*price})
          
        }
        else{
        setBooking({...booking,[e.target.name]:e.target.value})
        console.log({...booking,[e.target.name]:e.target.value})
        }
    }
    useEffect(()=>{
        axios.get(`http://localhost:7000/products/getproductbyid/${productId}`)
        .then((res)=>{
          console.log("product details:",res.data.productid.productprice)
          setPrice(res.data.productid.productprice)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
    const utoken=localStorage.getItem("UserToken")
    const handleBooking=async()=>{
      try {
        await axios.post("http://localhost:7000/booking/createBooking",{...booking,productId},{headers:{"auth-token":utoken}}
            )
        alert('Booking created successfully')
      } catch (error) {
        console.log(error)
        alert("Booking failed")
      }
    }
  return (
    <div>
      <Box sx={{maxWidth:700,display:'flex',justifyContent:'center',alignItems:'center',gap:2,margin:'auto',flexDirection:'column'}}>
        <Typography>BOOK NOW</Typography>
        <TextField label="full name" name='fullname' fullWidth onChange={handleChange}/>
        <TextField label="email" name='email' fullWidth onChange={handleChange}/>
        <TextField label="Phone" type='number' name='phone' fullWidth onChange={handleChange}/>
        <TextField label="Address" name='address' fullWidth multiline rows={4} onChange={handleChange}/>
        <TextField label="Quantity" type='number' name='quantity' fullWidth onChange={handleChange}/>
        <TextField label="Price" type='number' name='productprice' value={price}fullWidth inputProps={{readOnly:true}} onChange={handleChange}/>
        <TextField label="Total Amount" type='number' name='totalAmount' value={booking.totalamount}fullWidth inputProps={{readOnly:true}} onChange={handleChange}/>
        <Button onClick={handleBooking} fullWidth variant="contained" color='success'>
          Book Now
        </Button>
      </Box>
    </div>
  )
}
