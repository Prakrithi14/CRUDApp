const express=require('express')
const route=express.Router()
const {createBooking}=require('../Controller/booking_controller')

route.post('/createBooking',createBooking)
module.exports=route