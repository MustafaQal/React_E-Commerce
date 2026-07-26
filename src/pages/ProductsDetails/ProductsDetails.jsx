import useProductDetails from '@/hooks/useProductDetails'
import Loader from '@/UI/Loader/Loader';
import { Box, Button, Card, CardMedia, Chip, Divider, Grid, Rating, Stack, Typography, Link} from '@mui/material';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React from 'react'
import { useParams } from 'react-router-dom';

export default function ProductsDetails() {

  const { id } = useParams();

  const { data, isLoading, isError } = useProductDetails(id);
  console.log("Data", data);

  if (isLoading) return <Loader />;
  if (isError) return <Typography>Error loading products </Typography>;

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
            <Rating value={data.rate} precision={0.5} readOnly />
            <Typography color="text.secondary">
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

          <Button variant="contained" startIcon={<ShoppingCartOutlinedIcon />}
            sx={{ width: 220 }}
          >
            Add to Cart
          </Button>
        </Stack>
      </Grid>
    </Grid>

<Typography variant="h6" gutterBottom>Mustafa: 📚 MUI Study Notes </Typography>
<Stack spacing={1}>
  <Link href="https://mui.com/material-ui/react-card/" target="_blank" underline="hover" >Card </Link> 
  <Link href="https://mui.com/material-ui/react-divider/" target="_blank" underline='none'> Divider: Separates sections visually  </Link>
  <Link href="https://mui.com/material-ui/react-stack/" target="_blank" underline="always" > Stack: Vertical and horizontal spacing </Link>
  <Link href="https://mui.com/material-ui/react-card/#media" target="_blank" underline='hover'>CardMedia: Displays the product image </Link>
</Stack>

  </Box>
);
}