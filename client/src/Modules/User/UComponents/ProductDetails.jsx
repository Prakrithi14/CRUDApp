import { Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

export default function ProductDetails() {
  const {id}=useParams()
  const [product,setProduct]=useState([])
  console.log(id); // this is your product id
    useEffect(()=>{
  axios.get(`http://localhost:7000/products/getproductbyid/${id}`)
  .then((res)=>{
    console.log(res.data.productid)
      setProduct(res.data.productid)
  })
  .catch((error)=>{
    console.log(error)
  })
},[])
  return (
    <div>
        <Box
  sx={{
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    pt: 5,
    px: 2,
    backgroundColor: '#f5f5f5'
  }}
>
  <Card
    sx={{
      width: '100%',
      maxWidth: 1000,
      borderRadius: 3,
      boxShadow: 5,
      overflow: 'hidden'
    }}
  >
    <CardMedia
      component="img"
     
      image={`http://localhost:7000/image/${product.productimage}`}
      alt={product.productname}
    />

    <CardContent>
      <Typography variant="h5" gutterBottom>
        {product.productname}
      </Typography>

      <Typography variant="h6" color="primary">
        Rs.{product.productprice}
      </Typography>

      <Typography variant="body2" sx={{ mt: 2 }}>
        {product.productdescription}
      </Typography>

      <Typography variant="body2" sx={{ mt: 2 }}>
        <b>Quantity:</b> {product.productquantity}
      </Typography>
    </CardContent>

    {/* Actions */}
    <CardActions sx={{ px: 2, pb: 2 }}>
      <Button variant="contained" fullWidth>
        Add To Cart<IconButton>
           <ShoppingCartTwoToneIcon/>
        </IconButton>
      </Button>
    </CardActions>
  </Card>
</Box>
        
        
    
    </div>
  )
}

