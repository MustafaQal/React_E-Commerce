import { useQuery } from '@tanstack/react-query';
import { Box, Typography, CircularProgress, Alert } from '@mui/material';
import React from 'react'
import axios from 'axios'
import axiosinstance from '../API/axiosInstance';

export default function useCategories(limit=3) {
    const getCategories = async () => {
        const response = await axiosinstance.get(`/Categories?limit=${limit}`);
    return response.data;
}

const query = useQuery({
    queryKey: ['Category', limit],
    queryFn: getCategories,
    staleTime:1000*6*5
});


  return query;
}
