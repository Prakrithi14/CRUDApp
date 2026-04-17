const bookingTable=require('../Models/Booking_model')
const createBooking=async(req,res)=>{
    try {
        const {fullname,email,phone,address,quantity,productId,totalamount}=req.body
        const uid=req.userid
        const newBooking=new bookingTable({
            fullname,email,phone,address,quantity,ProductId:productId,userId:uid,totalamount
        })
        const saveBooking=await newBooking.save()
        res.status(200).json({message:'Booking created successfully',bdata:saveBooking})
    } catch (error) {
            console.log(error)
            res.status(500).json({message:'Server error'})
    }
}
const getBookings=async(req,res)=>{
    try {
        const getallbookings=await bookingTable.find()
        console.log(getallbookings)
        res.status(200).json({message:'Bookings retrieved successfully',bdata:getallbookings})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Server error',error})
    }
}
module.exports={createBooking,getBookings}
