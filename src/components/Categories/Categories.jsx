import { useQuery } from '@tanstack/react-query';
import { Box, Typography, Alert, Grid, Card, CardContent } from '@mui/material';
import React from 'react'
import axios from 'axios'
import useCategories from '../../hooks/useCategories';
import Loader from '@/UI/Loader/Loader';

export default function Categories() {

    const { data, isError, isLoading, error } = useCategories();
    if (isLoading) return <Loader />;
    if (isError) return <Alert severity="error">{error.message}</Alert>;

    return (
        <Box sx={{ py: 5 }}>
            <Typography component={'h1'} variant='h2' sx={{ py: 4 }}> Categories </Typography>
            {data.response.data.length === 0 ? (<Typography align='center'>No Categories found</Typography>) :
                (
                    <Grid container spacing={2}>
                        {data.response.data.map((category) =>
                            <Grid item size={{ xs: 12, sm: 4, md: 2 }}>
                                <Card sx={{borderRadius: 3, transition: "0.5s", "&:hover": {boxShadow: 8}}}>
                                    <CardContent>
                                        <Typography  variant="h6" fontWeight={600}> {category.name} </Typography> 
                                    </CardContent>
                                </Card>
                            </Grid>
                        )}
                    </Grid>
                )
            }
        </Box>
    );
}
