import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


export default function ViewProduct() {
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:7000/products/getproducts')
        .then((res)=>{
            console.log(res.data.allproducts)
            setProducts(res.data.allproducts)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
     const HandleDelete=(cid)=>{
    axios.delete(`http://localhost:7000/products/deleteproduct/${cid}`)
    .then((res)=>{
      console.log(res)
      alert("Product deleted successfully")
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div>
      <TableContainer>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Product Description</TableCell>
            <TableCell>Product Image</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.ProductName}>
              <TableCell>{product.productname}</TableCell>
              <TableCell>{product.productprice}</TableCell>
              <TableCell>{product.productquantity}</TableCell>
              <TableCell>{product.productdescription}</TableCell>
              <TableCell>
                <img src={`http://localhost:7000/image/${product.productimage}`} alt='' style={{width:'200px',height:'200px'}}/>
              </TableCell>
              
                <TableCell align='center'>
                  <Button variant='contained' sx={{ mr: 2 }} component={Link} to={`/Admin/UpdateProduct/${product._id}`}>Update</Button>
                  <Button variant='contained' color='error' onClick={()=>HandleDelete(product._id)}>Delete</Button>
                </TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
