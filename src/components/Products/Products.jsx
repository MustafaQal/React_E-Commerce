import useProducts from '@/hooks/useProducts'
import Loader from '@/UI/Loader/Loader';
import { Box, Typography } from '@mui/material';
import React from 'react'

export default function Products() {

    const { data, isLoading, isError } = useProducts();
    //console.log(data);

    if (isLoading) return <Loader />;
    if (isError) return <Typography>Error loading products </Typography>;

    return (
        <Box>
            <Typography component={"h1"} variant='h2' sx={{ py: 4 }}> Products </Typography>
            {data.length === 0 ? (<Typography>No products found</Typography>) :
                <Box> {data.map((product) => (
                    <Box key={product.id}>
                        <Typography>{product.name}</Typography>
                        <Typography>{product.price}</Typography>
                        <Typography>{product.rate}</Typography>
                        <img src={product.image} alt={product.name} width={150} />

                    </Box>
                ))}
                </Box>
            }
        </Box>
    )
}
