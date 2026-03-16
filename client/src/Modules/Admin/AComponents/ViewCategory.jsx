import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
              <TableCell>Category Name</TableCell>
              <TableCell>Category Description</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

            {category.map((cat,index)=>(
              <TableRow key={index}>
                <TableCell>{cat.categoryname}</TableCell>
                <TableCell>{cat.categorydescription}</TableCell>
                <TableCell>
                  <Button variant='outlined'>Update</Button>
                  <Button variant='contained' onClick={()=>HandleDelete(cat._id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}

          </TableBody>

        </Table>
      </TableContainer>

    </div>
  )
}