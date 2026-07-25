import { useQuery } from '@tanstack/react-query';
import { Box, Typography, Alert, Grid, Card, CardContent } from '@mui/material';
import React from 'react'
import axios from 'axios'
import useCategories from '../../hooks/useCategories';
import Loader from '@/UI/Loader/Loader';
import { Link } from 'react-router-dom';
import { TextAlignCenter } from 'lucide-react';
import DisplayCategory from '../../UI/Category/DisplayCategory';

export default function CategoryPage() {
    const { data, isError, isLoading, error } = useCategories(10);
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
                                <DisplayCategory category={category} />
                            </Grid>
                        )}
                    </Grid>
                )
            }

            <Link to={"/"} component={TextAlignCenter} > Back </Link>
        </Box>
    )
}
