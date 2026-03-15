import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ViewCategory() {

  const [category,setCategory]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:7000/category/viewcategory")
    .then((res)=>{
      console.log(res)
      setCategory(res.data.allcategory)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  return (
    <div>

      <TableContainer>
        <Table>

          <TableHead>
            <TableRow>
              <TableCell>Category Name</TableCell>
              <TableCell>Category Description</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

            {category.map((cat,index)=>(
              <TableRow key={index}>
                <TableCell>{cat.categoryname}</TableCell>
                <TableCell>{cat.categorydescription}</TableCell>
              </TableRow>
            ))}

          </TableBody>

        </Table>
      </TableContainer>

    </div>
  )
}