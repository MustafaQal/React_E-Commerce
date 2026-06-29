import { useQuery } from '@tanstack/react-query';
import { Box, Typography, CircularProgress, Alert } from '@mui/material';
import React from 'react'
import axios from 'axios'
import authaxiosinstance from '../API/authaxiosInstance';

export default function useCart() {
    const getCart = async () => {
        const response = await authaxiosinstance.get(`/carts`);
          //console.log(response);
    return response.data;
}

const query = useQuery({
    queryKey: ['cart', 'en'],
    queryFn: getCart,
    staleTime:1000*6*5
});


  return query;
}
