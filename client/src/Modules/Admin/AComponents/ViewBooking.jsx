import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'

export default function ViewBooking() {
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
      <Box></Box>
    </Box>
  )
}
