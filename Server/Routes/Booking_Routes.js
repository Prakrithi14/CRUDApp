const express=require('express')
const route=express.Router()
const {createBooking,getBookings,getallbookings,updateStatus}=require('../Controller/booking_controller')

const auth=require('../Middleware/auth')
route.post('/createBooking',auth,createBooking)
route.get('/getBookings',getBookings)
route.get('/getallbookings',getallbookings)
route.put('/updateStatus/:id',updateStatus)
module.exports=route