import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function Products() {
  const [expanded, setExpanded] = React.useState(false);
   const[products,setProducts]=useState([]);
   const [category,setCategories]=useState([]);
   const [selectedcategory,setSelectedcategory]=useState("All")
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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 
useEffect(() => {
    axios.get('http://localhost:7000/category/getcategory')
      .then((res) => {
        console.log(res.data.allcategory)
        setCategories(res.data.allcategory)

      })
      .catch((error) => {
        console.log(error)
      })

  }, [])
const filteredproducts=selectedcategory==="All"?products:products.filter((pro)=>pro.categoryId===selectedcategory)
  return (
    <div style={{display:'flex',flexWrap:'wrap',gap:'20px'}}>
    <FormControl fullWidth>
      <InputLabel>Category</InputLabel>
      <Select 
      label="Category" 
      value={selectedcategory}
      onChange={(e)=>setSelectedcategory(e.target.value)}>
      <MenuItem value="All">All</MenuItem>
      {category.map((cat)=>(
        <MenuItem value={cat._id}>{cat.categoryname}</MenuItem>
      ))}
      </Select>
    </FormControl>
    {filteredproducts.map((pdata)=>(
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={pdata.productname}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={`http://localhost:7000/image/${pdata.productimage}`}
        alt={pdata.productname}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {pdata.productdescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    ))}
    </div>
    
  );
}
