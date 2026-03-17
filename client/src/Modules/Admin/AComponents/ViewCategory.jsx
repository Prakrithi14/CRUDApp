import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ViewCategory() {

  const [category,setCategory]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:7000/Category/getcategory")
    .then((res)=>{
      console.log(res.data.allcategory)
      setCategory(res.data.allcategory)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])
  const HandleDelete=(cid)=>{
    axios.delete(`http://localhost:7000/Category/deletecategory/${cid}`)
    .then((res)=>{
      console.log(res)
      alert("Category deleted successfully")
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div>

      <TableContainer>
        <Table>

          <TableHead>
            <TableRow>
              <TableCell align='center'>Category Name</TableCell>
              <TableCell align='center'>Category Description</TableCell>
              <TableCell align='center'>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

            {category.map((cat,index)=>(
              <TableRow key={index}>
                <TableCell align='center'>{cat.categoryname}</TableCell>
                <TableCell align='center'>{cat.categorydescription}</TableCell>
                <TableCell align='center'>
                  <Button variant='contained' sx={{ mr: 2 }} component={Link} to={`Admin/UpdateCategory/${cat._id}`}>Update</Button>
                  <Button variant='contained' color='error' onClick={()=>HandleDelete(cat._id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}

          </TableBody>

        </Table>
      </TableContainer>

    </div>
  )
}