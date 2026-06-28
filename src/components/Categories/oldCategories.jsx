import { Box, Typography, CircularProgress } from '@mui/material';
import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Categories() {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const getCategories = async () => {
        try {
            setLoading(true);
            setError("");
            const response = await axios.get(`https://knowledgeshop.runasp.net/api/Categories`,
                {
                    headers: {
                        "Accept-Language": "en",
                    }
                }
            );
            console.log(response.data);
            setCategories(response.data.response.data);
        } catch (err) {
            
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getCategories();
    }, [])

if (loading) return <CircularProgress />;
if (error) return <Alert severity="error">{error}</Alert>;
if (categories.length === 0) return <Typography>No categories found</Typography>;

    return (
        <Box sx={{ py: 5, px: 3 }}>
            <Typography component={'h1'} variant='h2' py={3}> Categories </Typography>
            
            {categories.length === 0 ? (<Box> <CircularProgress /> </Box>) :
                (
                    <Box>{categories.map((category) => <Box> {category.name} </Box>)} </Box>
                )
            }
        </Box>
    );
}
