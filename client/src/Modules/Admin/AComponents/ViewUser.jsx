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
import Button from '@mui/material/Button';



export default function ViewUser() {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:7000/user/getuser')
        .then((res)=>{
            console.log(res.data.allusers)
            setUsers(res.data.allusers)
        })
        .catch((error)=>{
            console.log(error)
        }
        )
    },[])
    const HandleDelete=(uid)=>{
      axios.delete(`http://localhost:7000/user/deleteuser/${uid}`)
      .then((res)=>{
        console.log(res)
        alert("User deleted successfully")

      })
      .catch((error)=>{
        console.log(error)
      })
    }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>serial number</TableCell>
            <TableCell align="right">NAME</TableCell>
            <TableCell align="right">EMAIL</TableCell>
            <TableCell align="right">PHONE</TableCell>
            <TableCell align="right">ADDRESS</TableCell>
            <TableCell align="center">ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row,index) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th"  align="center" scope="row">
                {index+1}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell  align='center'>
                <Button variant='outlined' sx={{ mr: 2 }} >Update</Button>
                <Button variant='contained' color='error' onClick={()=>HandleDelete(row._id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
  );
}

