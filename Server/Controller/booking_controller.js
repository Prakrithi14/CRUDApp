const bookingTable=require('../Models/Booking_model')
const createBooking=async(req,res)=>{
    try {
        const {fullname,email,phone,address,quantity,productId,totalamount}=req.body
        const uid=req.userid
        const newBooking=new bookingTable({
            fullname,email,phone,address,quantity,ProductId:productId,userId:uid,totalamount
        })
        const saveBooking=await newBooking.save()
        res.status(200).json({message:'Booking created successfully!',bdata:saveBooking})
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
const getallbookings=async(req,res)=>{
    try {
        const bookings=await bookingTable.find()
        .populate("userId","name address phone")
        .populate("ProductId","productname productprice productquantity")
        console.log(bookings)
        res.status(200).json({message:'Bookings retrieved successfully',bdata:bookings})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Server error',error})
    }
}
const updateStatus=async(req,res)=>{
    try {
        const {status}=req.body
        const updatedbooking=await bookingTable.findByIdAndUpdate(req.params.id,{bstatus:status},{new:true})
        if(!updatedbooking){
            res.status(404).json({message:"booking not found"})
        }
        res.status(200).json({message:"booking status updated",ubooking:updatedbooking})

    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Server error',error})
    }
}

module.exports={createBooking,getBookings,getallbookings,updateStatus}
