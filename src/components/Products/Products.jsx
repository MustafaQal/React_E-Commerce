import useProducts from '@/hooks/useProducts'
import Loader from '@/UI/Loader/Loader';
import { Box, CardContent, CardMedia, Grid, Rating, Typography, CardActions, Button, Card } from '@mui/material';
import React from 'react'
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StarIcon from "@mui/icons-material/Star";

export default function Products() {

    const { data, isLoading, isError } = useProducts();
    //console.log(data);

    if (isLoading) return <Loader />;
    if (isError) return <Typography>Error loading products </Typography>;

    return (
        <Box>
            <Typography component={"h1"} variant='h2' sx={{ py: 4 }}> Products </Typography>

            {data.length === 0 ? (<Typography>No products found</Typography>) : (
                <Grid container spacing={4}>
                    {data.map((product) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={product.id} sx={{ py: 4 }}>
                            <Card sx={{borderRadius: 3, height: "100%", transition: "0.5s", "&:hover": {boxShadow: 8,}}}>

                                <CardMedia component={'img'} image={product.image} alt={product.name} height="220" >
                                </CardMedia>
                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold" gutterBottom noWrap>{product.name}</Typography>
                                    <Typography component={'span'} sx={{ mt: 1 }} fontWeight="bold" color="success">{product.price}$</Typography>
                                    <Rating readOnly size="small">{product.rate} </Rating>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" fullWidth borderRadius="2">
                                        Add to Cart
                                    </Button>
                                </CardActions>

                            </Card>


                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
}
