import useProducts from '@/hooks/useProducts'
import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react'

export default function Products() {

    const { data, isLoading, isError } = useProducts();
    console.log(data);

    if (isLoading) return <CircularProgress />;
    if (isError) return <Typography>Error loading products.</Typography>;

    return (
        <Box>
            <Typography component={"h1"} variant='h2'> Products </Typography>
            {data.length === 0 ? (<Box> <CircularProgress /> </Box>) :
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
