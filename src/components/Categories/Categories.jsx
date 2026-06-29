import { useQuery } from '@tanstack/react-query';
import { Box, Typography, CircularProgress, Alert } from '@mui/material';
import React from 'react'
import axios from 'axios'
import useCategories from '../../hooks/useCategories';

export default function Categories() {

    const { data, isError, isLoading, error } = useCategories();
    if (isLoading) return <CircularProgress />;
    if (isError) return <Alert severity="error">{error.message}</Alert>;

    return (
        <Box sx={{ py: 5, px: 3 }}>
            <Typography component={'h1'} variant='h2' sx={{ py: 5 }}> Categories </Typography>
            {data.response.data.length === 0 ? (<Box> <CircularProgress /> </Box>) :
                (
                    <Box>{data.response.data.map((category) => <Box> {category.name} </Box>)} </Box>
                )
            }
        </Box>
    );
}
