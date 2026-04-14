const bookingTable=require('../Models/Booking_model')
const createBooking=async(req,res)=>{
    try {
        const {fullname,email,phone,address,quantity}=req.body
        const newBooking=new bookingTable({
            fullname,email,phone,address,quantity
        })
        const saveBooking=await newBooking.save()
        res.status(200).json({MessageChannel:'Booking created successfully',bdata:saveBooking})
    } catch (error) {
            console.log(error)
            res.status(500).json({message:'Server error'})
    }
}
module.exports={createBooking}
