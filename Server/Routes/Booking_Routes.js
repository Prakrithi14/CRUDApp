const express=require('express')
const route=express.Router()
const {createBooking}=require('../Controller/booking_controller')
const auth=require('../Middleware/auth')
route.post('/createBooking',auth,createBooking)
module.exports=route