// import { Container, Paper, Typography, TextField, Button, Box } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// export default function AddCategory() {

//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const navigate = useNavigate();

//   const handleSave = () => {
//     console.log("New Category:", name);
//     navigate("/Admin/ManageCategory");
//   };

//   return (
//     <Container maxWidth="sm" sx={{ mt: 4 }}>
//       <Paper sx={{ p: 3 }}>
//         <Typography variant="h6" mb={2}>
//           Add Category
//         </Typography>

//         <Box display="flex" flexDirection="column" gap={2}>
//           <TextField
//             label="Category Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             fullWidth
//           />
//            <TextField
//             label="Category Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             fullWidth
//           />

//           <Button variant="contained" onClick={handleSave}>
//             Save
//           </Button>

//           <Button variant="outlined" onClick={() => navigate(-1)}>
//             Cancel
//           </Button>
//         </Box>
//       </Paper>
//     </Container>
//   );
// }

import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
export default function AddCategory() {
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
    phone:'',
    address:''

  })
  const [categorydata,setCategorydata]=useState({
    categoryname:'',
    categorydescription:''
  }
)


  const handleChange=(e)=>{
    console.log({...categorydata,[e.target.name]:e.target.value})
    setCategorydata({...categorydata,[e.target.name]:e.target.value})
  }
  const handleadd=()=>{
    //   const existingusers=JSON.parse(localStorage.getItem('userdetails'))||[];
    //   console.log(existingusers)
    //   const allusers=[...existingusers,formData]
    //   localStorage.setItem('userdetails',JSON.stringify(allusers))
    //   alert("Registered Successful")
    console.log("Category data :",categorydata)
    axios.post('http://localhost:7000/Category/addcategory',categorydata)
    .then((res)=>{
        console.log("Categories:",res.data)
        alert("Category added Successfully")
       console.log(res.data.message)
    })
    .catch((error)=>{
        console.log(error)
    })
  }
  return (
    <div style={{backgroundColor:"aliceblue"}}> 
      <Paper elevation={20} style={{width:"500px",padding:"20px",marginTop:"50px",marginBottom:"50px",marginLeft:"370px"}}> 
      <Typography variant='h4' style={{fontFamily:"math",fontWeight:"bold", marginLeft:"100px"}}>Add Category</Typography>
      <TextField variant='outlined' label=' Category Name' name='categoryname'type='Text'  onChange={handleChange} fullWidth style={{marginBottom:"10px"}}/>
       <TextField variant='outlined' label='category description' name='categorydescription' multiline rows={4} fullWidth style={{marginBottom:"10px"}} onChange={handleChange}/>
       <Button variant='contained' fullWidth onClick={handleadd}>Add</Button>
      </Paper>
    </div>
  )
}
