import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useParams } from 'react-router-dom';

export default function UpdateProduct() {
  const [product,setProduct]=useState({
            productname:'',
            productprice:'',
            productquantity:'',
            productdescription:'',
            categoryId:'',
            productimage:''

  })
 const {catid}=useParams();
useEffect(()=>{
  axios.get(`http://localhost:7000/products/getproductbyid/${catid}`)
  .then((res)=>{
    console.log(res.data.productid)
    setProduct(res.data.productid)
  })
 .catch((error)=>{
     console.log(error)
 })
},[])
  
  const handleChange=(e)=>{
    console.log({...product,[e.target.name]:e.target.value})
    //setProduct({...product,[e.target.name]:e.target.value})
    if(e.target.name==='productimage'){
      setProduct({...product,productimage:e.target.files[0]})
  }else{
     setProduct({...product,[e.target.name]:e.target.value})
  }
}
  // const handleRegister=()=>{
  //   //   const existingusers=JSON.parse(localStorage.getItem('userdetails'))||[];
  //   //   console.log(existingusers)
  //   //   const allusers=[...existingusers,formData]
  //   //   localStorage.setItem('userdetails',JSON.stringify(allusers))
  //   //   alert("Registered Successful")
  //   console.log("Product data:",product)
  //   axios.post('http://localhost:7000/products/addproduct',product,
  //     {headers:{'Content-Type':'multipart/form-data'}})
  //   .then((res)=>{
  //       console.log("Product added successfully",res.data)
  //       //alert("Registered Successful")
  //      alert(res.data.message)
  //   })
  //   .catch((error)=>{
  //       console.log(error)
  //   })
  // }
  const handleUpdate=async()=>{
    const productdatas=new FormData();
    productdatas.append('productname',productdatas.productname);
    productdatas.append('productprice',productdatas.productprice);
    productdatas.append('productquantity',productdatas.productquantity);
    productdatas.append('productdescription',productdatas.productdescription);
    productdatas.append('categoryId',productdatas.categoryId)    
    productdatas.append('productimage',productdatas.productimage)    

   
    try {
        await axios.put(`http://localhost:7000/products/updateproduct/${catid}`,product);
        alert("Product updated successfully");
    } catch (error) {
        console.log(error)
    }
}
  return (
    <div style={{backgroundColor:"aliceblue"}}> 
      <Paper elevation={20} style={{width:"500px",padding:"20px",marginTop:"50px",marginBottom:"50px",marginLeft:"370px"}}> 
      <Typography variant='h4' style={{fontFamily:"math",fontWeight:"bold", marginLeft:"100px"}}>Update Product</Typography>
      <TextField variant='outlined' label=' Product Name' name='productname'type='Text'  onChange={handleChange} fullWidth style={{marginBottom:"10px"}}/>
      <TextField variant='outlined' label='Product Price' fullWidth  name='productprice' type='Number' style={{marginBottom:"10px"}} onChange={handleChange}/>
      <TextField variant='outlined' label='Quantity' fullWidth name='productquantity' type='Number' style={{marginBottom:"10px"}} onChange={handleChange}/>
      <TextField variant='outlined' label='productimage' fullWidth name='productimage' type='file' InputLabelProps={{shrink:true}} style={{marginBottom:"10px"}} onChange={handleChange}/>
      {/* <TextField variant='outlined' label='Quantity' fullWidth name='productdescription' type='Text' style={{marginBottom:"10px"}} onChange={handleChange}/> */}
    <TextField variant='outlined' label='Description' name='productdescription' multiline rows={4} fullWidth style={{marginBottom:"10px"}} onChange={handleChange}/>
       
       <FormControl fullWidth label="Age">
        {/* <Select
        name='categoryId'
        sx={{marginBottom:"10px"}}
         labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={product.categoryId}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem>Select Category</MenuItem>
          {category.map((cat)=>(
            <MenuItem value={cat._id}>{cat.categoryname}</MenuItem>
            
          ))}
       
        </Select> */}
      </FormControl>

       <Button variant='contained' fullWidth onClick={handleUpdate} >Update</Button>
      </Paper>
    </div>
  )
}

// import React, { useEffect, useState } from 'react'
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import axios from 'axios';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { useParams, useNavigate } from 'react-router-dom';

// export default function UpdateProduct() {

//   const [product, setProduct] = useState({
//     productname: '',
//     productprice: '',
//     productquantity: '',
//     productdescription: '',
//     categoryId: '',
//     productimage: null
//   });

//   const [category, setCategory] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const { catid } = useParams();
//   const navigate = useNavigate();

//   // ✅ FETCH PRODUCT
//   useEffect(() => {
//     axios.get(`http://localhost:7000/products/getproductbyid/${catid}`)
//       .then((res) => {
//         const data = res.data.productid;

//         setProduct({
//           ...data,
//           categoryId: data.categoryId?._id || data.categoryId // 🔥 FIX
//         });
//       })
//       .catch((error) => console.log(error));
//   }, [catid]);

//   // ✅ FETCH CATEGORY
//   useEffect(() => {
//     axios.get("http://localhost:7000/category/getcategory")
//       .then((res) => {
//         setCategory(res.data.category || []);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   // ✅ HANDLE INPUT
//   const handleChange = (e) => {
//     if (e.target.name === 'productimage') {
//       setProduct({ ...product, productimage: e.target.files[0] });
//     } else {
//       setProduct({ ...product, [e.target.name]: e.target.value });
//     }
//   };

//   // ✅ VALIDATION
//   const validate = () => {
//     if (!product.productname) return "Product name required";
//     if (!product.productprice) return "Price required";
//     if (!product.productquantity) return "Quantity required";
//     if (!product.categoryId) return "Select category";
//     return null;
//   };

//   // ✅ UPDATE FUNCTION
//   const handleUpdate = async () => {

//     const error = validate();
//     if (error) {
//       alert(error);
//       return;
//     }

//     const formData = new FormData();

//     formData.append('productname', product.productname);
//     formData.append('productprice', product.productprice);
//     formData.append('productquantity', product.productquantity);
//     formData.append('productdescription', product.productdescription);
//     formData.append('categoryId', product.categoryId);

//     // Only send image if new file selected
//     if (product.productimage instanceof File) {
//       formData.append('productimage', product.productimage);
//     }

//     try {
//       setLoading(true);

//       await axios.put(
//         `http://localhost:7000/products/updateproduct/${catid}`,
//         formData,
//         { headers: { 'Content-Type': 'multipart/form-data' } }
//       );

//       alert("✅ Product updated successfully");

//       // 🔥 REDIRECT
//       navigate('/viewproduct');

//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ backgroundColor: "aliceblue", minHeight: "100vh" }}>

//       <Paper elevation={20}
//         style={{
//           width: "500px",
//           padding: "20px",
//           margin: "50px auto"
//         }}>

//         <Typography
//           variant='h4'
//           style={{
//             fontWeight: "bold",
//             textAlign: "center",
//             marginBottom: "20px"
//           }}>
//           Update Product
//         </Typography>

//         {/* NAME */}
//         <TextField
//           label='Product Name'
//           name='productname'
//           value={product.productname || ""}
//           onChange={handleChange}
//           fullWidth
//           style={{ marginBottom: "10px" }}
//         />

//         {/* PRICE */}
//         <TextField
//           label='Product Price'
//           name='productprice'
//           type='number'
//           value={product.productprice || ""}
//           onChange={handleChange}
//           fullWidth
//           style={{ marginBottom: "10px" }}
//         />

//         {/* QUANTITY */}
//         <TextField
//           label='Quantity'
//           name='productquantity'
//           type='number'
//           value={product.productquantity || ""}
//           onChange={handleChange}
//           fullWidth
//           style={{ marginBottom: "10px" }}
//         />

//         {/* IMAGE */}
//         <TextField
//           label='Product Image'
//           name='productimage'
//           type='file'
//           InputLabelProps={{ shrink: true }}
//           onChange={handleChange}
//           fullWidth
//           style={{ marginBottom: "10px" }}
//         />

//         {/* ✅ IMAGE PREVIEW */}
//         {typeof product.productimage === "string" && (
//           <img
//             src={`http://localhost:7000/uploads/${product.productimage}`}
//             alt="product"
//             style={{ width: "100%", marginBottom: "10px", borderRadius: "10px" }}
//           />
//         )}

//         {/* DESCRIPTION */}
//         <TextField
//           label='Description'
//           name='productdescription'
//           value={product.productdescription || ""}
//           onChange={handleChange}
//           multiline
//           rows={4}
//           fullWidth
//           style={{ marginBottom: "10px" }}
//         />

//         {/* CATEGORY */}
//         <FormControl fullWidth style={{ marginBottom: "10px" }}>
//           <Select
//             name="categoryId"
//             value={product.categoryId || ""}
//             onChange={handleChange}
//             displayEmpty
//           >
//             <MenuItem value="">Select Category</MenuItem>

//             {Array.isArray(category) && category.map((cat) => (
//               <MenuItem key={cat._id} value={cat._id}>
//                 {cat.categoryname}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>

//         {/* BUTTON */}
//         <Button
//           variant='contained'
//           fullWidth
//           onClick={handleUpdate}
//           disabled={loading}
//         >
//           {loading ? "Updating..." : "Update Product"}
//         </Button>

//       </Paper>
//     </div>
//   );
// }

