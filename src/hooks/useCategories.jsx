import { useQuery } from '@tanstack/react-query';
import { Box, Typography, CircularProgress, Alert } from '@mui/material';
import React from 'react'
import axios from 'axios'

export default function useCategories() {
    const getCategories = async () => {
        const response = await axios.get(`https://knowledgeshop.runasp.net/api/Categories`,
            {
                headers: {
                    "Accept-Language": "en",
                }
            }
    );
    return response.data;
}

const query = useQuery({
    queryKey: ['Category'],
    queryFn: getCategories,
    staleTime:1000*6*5
});


  return query;
}
