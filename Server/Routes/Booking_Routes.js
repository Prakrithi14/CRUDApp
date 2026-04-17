const express=require('express')
const route=express.Router()
const {createBooking,getBookings}=require('../Controller/booking_controller')
const auth=require('../Middleware/auth')
route.post('/createBooking',auth,createBooking)
route.get('/getBookings',getBookings)
module.exports=route