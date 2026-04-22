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
export default function ViewBooking() {

  const [bookings, setBookings] = useState([])
const [SelectedBooking, setSelectedBooking] = useState(null)
const [status,setStatus]=useState("")
const [open,setOpen]=useState(false)


const fetchbooking=()=>{
  axios.get("http://localhost:7000/booking/getallbookings")
    .then((res)=>{
      console.log(res.data.bdata)
      setBookings(res.data.bdata)
    })
    .catch((error)=>{
      console.log(error)
    })
}
  useEffect(()=>{
    fetchbooking()
  }, [])

  const handleChangeStatus=(bookings,status)=>{
    setSelectedBooking(bookings)
    setStatus(status)
    setOpen(true)
  }
const handleConfirm=async()=>{
  try {
    await axios.put(`http://localhost:7000/booking/updateStatus/${SelectedBooking._id}`,{newstatus:status})
  fetchbooking()
    setStatus(status)
    
    setOpen(false)
  } catch (error) {
    console.log(error)
  }
}
 
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
              {/* <TableCell sx={{ color: "white" }}> Email</TableCell> */}
              <TableCell sx={{ color: "white" }}>Address</TableCell>
              <TableCell sx={{ color: "white" }}>Product ID</TableCell>
              {/* <TableCell sx={{ color: "white" }}>Quantity</TableCell> */}
              {/* <TableCell sx={{ color: "white" }}>Total Price</TableCell> */}
              <TableCell sx={{ color: "white" }}>Booking Status</TableCell>
              <TableCell sx={{ color: "white" }}>Action</TableCell>
            </TableRow>
          </TableHead>
           {/* <TableBody>
          {bookings.map((row,index) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            
              <TableCell >{row.userId}</TableCell>
              <TableCell >{row.fullname}</TableCell>
              <TableCell >{row.email}</TableCell>
              <TableCell >{row.phone}</TableCell>
              <TableCell >{row.ProductId?.productname}</TableCell>
              <TableCell >{row.quantity}</TableCell>
              <TableCell >{row.totalamount}</TableCell>
<TableCell>
  <Typography
    sx={{ cursor: "pointer", color: "#4f46e5", fontWeight: "bold" }}
    onClick={(e) => handleClick(e, row._id)}
  >
    Actions
  </Typography>

  <Menu
    anchorEl={anchorEl}
    open={Boolean(anchorEl) && selectedId === row._id}
    onClose={handleClose}
  >
    <MenuItem onClick={handleClose}>Pending</MenuItem>
    <MenuItem onClick={handleClose}>Approved</MenuItem>
    <MenuItem onClick={handleClose}>Rejected</MenuItem>
    <MenuItem onClick={handleClose}>Completed</MenuItem>
  </Menu>
</TableCell>
            </TableRow>
          ))}
        </TableBody> */}
        <TableBody>
          {bookings.map((b,index) => (
            <TableRow>
              <TableCell>{index+1}</TableCell>
              <TableCell>{b.fullname}</TableCell>              
              <TableCell>{b.address}</TableCell>              
              <TableCell>{b.ProductId?.productname}</TableCell>              
              <TableCell>{b.bookingstatus}</TableCell>              
              <TableCell>
                <Select value={b.bookingstatus} onChange={(e)=>handleChangeStatus(b,e.target.value)}>
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="Approved">Approved</MenuItem>
                  <MenuItem value="Rejected">Rejected</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
        </TableContainer>
        <Dialog open={open} onClose={()=>setOpen(false)} >
          <DialogTitle>Confirm Status Update</DialogTitle>
          <DialogContent>Are You sure want to change the status to {status}?</DialogContent>
          <DialogActions>
            <Button variant='contained' color='error' onClick={()=>setOpen(false)} >Cancel</Button>
            <Button variant='contained' color='success' onClick={handleConfirm}>Confirm</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  )
}
