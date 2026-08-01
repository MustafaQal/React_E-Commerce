import useProductDetails from '@/hooks/useProductDetails'
import Loader from '@/UI/Loader/Loader';
import { Box, Button, Card, CardMedia, Chip, Divider, Grid, Rating, Stack, 
  Typography, Link, Avatar, CardContent} from '@mui/material';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { green } from '@mui/material/colors';

export default function ProductsDetails() {

  const { id } = useParams();
  const reviewsRef = useRef(null);
  const [showAllRev, setShowAllRev] = useState(false);
  const { data, isLoading, isError } = useProductDetails(id);
  console.log("Data", data);

  if (isLoading) return <Loader />;
  if (isError) return <Typography>Error loading products </Typography>;

   const showReviews = showAllRev ? data.reviews: data.reviews.slice(0, 6);

 return (
  <Box sx={{ py: 5 }}>
    <Grid container spacing={5}>
      <Grid item size={{ xs: 12, md: 6 }}>
        <Card sx={{ p: 2, borderRadius: 3 }}>
          <CardMedia
            component="img"
            image={data.image}
            alt={data.name}
            sx={{ height: 450, objectFit: "contain" }}
          />
        </Card>
      </Grid>

      <Grid item size={{ xs: 12, md: 6 }}>
        <Stack spacing={3}>
          <Typography variant="h4" fontWeight="bold">
            {data.name}
          </Typography>

          <Stack direction="row" spacing={2} alignItems="center">
            <Rating value={data.rate} precision={0.5} readOnly /> {/* Mustafa: Precision allows half-star increments */}
            <Typography color="success" sx={{cursor: "pointer","&:hover":{textDecoration:"underline",}}} 
            onClick={()=> reviewsRef.current?.scrollIntoView({behavior: "smooth",})} >
              ({data.reviews.length} Reviews)
            </Typography>
          </Stack>

          <Typography variant="h3" color="success.main" fontWeight="bold">
            ${data.price}
          </Typography>

          <Chip
            color="success"
            label={`In Stock (${data.quantity})`}
            sx={{ width: "fit-content" }}
          />

          <Divider />

          <Typography color="text.secondary" sx={{ lineHeight: 2 }}>
            {data.description}
          </Typography>

          <Button variant="contained" sx={{ bgcolor: '#009688', width: 220 }} startIcon={<ShoppingCartOutlinedIcon />} >
            Add to Cart
          </Button>
        </Stack>
      </Grid>
    </Grid>

{/* Customer Reviews */}

<Box ref={reviewsRef} sx={{ mt: 6, scrollMarginTop:"100px" }}>

  <Typography variant='h5' fontWeight='bold' gutterBottom > 
        Customer Reviews
  </Typography>

  <Typography color="success" sx={{mb:3}}> {data.reviews.length} Reviews </Typography>

  <Stack spacing={3}>
    {showReviews.map((review, index)=>(
      <Card key={index} elevation={2} sx={{borderRadius:5}}>
        <CardContent >
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: green[800] }} > {/*Mustafa: https://mui.com/material-ui/react-avatar/ */}
              {review.userName.charAt(0).toUpperCase()}
              </Avatar> 
              <Box>
                <Typography fontWeight="bold" gutterBottom>
                  {review.userName}
                </Typography>
                
                <Rating  value={review.rating} readOnly size="medium"/>

                <Typography sx={{mt:1, lineHeight:1.7}} > {review.comment} </Typography>

                <Typography variant="caption" > {new Date(
                      review.createdAt).toLocaleDateString()} 
                </Typography> {/* https://mui.com/x/react-chat/display/date-divider/#enabling-date-dividers  */}
              </Box>
          </Stack>        
        </CardContent>
      </Card>
    ))} 
  </Stack>
        {/* Mustafa: Show more reviewos */}

        {!showAllRev && data.reviews.length > 6 && (
          <Button variant="outlined" color="success" onClick={()=> setShowAllRev(true)} sx={{mt:3}}>               
            Show More Reviews</Button>
        )}
  
</Box>

<Typography sx={{mt:3}}> =============================================== </Typography>
<Typography variant="h6" gutterBottom sx={{mt:3}}>Mustafa: 📚 MUI Study Notes </Typography>
<Stack spacing={1}>
  <Link href="https://mui.com/material-ui/react-card/" target="_blank" underline="hover" >Card </Link> 
  <Link href="https://mui.com/material-ui/react-rating/"target="_blank" underline='hover' > Rating </Link>
  <Link href="https://mui.com/material-ui/react-divider/" target="_blank" underline='none'> Divider: Separates sections visually  </Link>
  <Link href="https://mui.com/material-ui/react-stack/" target="_blank" underline="always" > Stack: Vertical and horizontal spacing </Link>
  <Link href="https://mui.com/material-ui/react-card/#media" target="_blank" underline='hover'>CardMedia: Displays the product image </Link>
</Stack>

  </Box>
);
}