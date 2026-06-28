import { useQuery } from '@tanstack/react-query';
import { Box, Typography, CircularProgress, Alert } from '@mui/material';
import React from 'react'
import axios from 'axios'
import axiosinstance from '../API/axiosInstance';

export default function useCategories() {
    const getCategories = async () => {
        const response = await axiosinstance.get(`/Categories`);
    return response.data;
}

const query = useQuery({
    queryKey: ['Category'],
    queryFn: getCategories,
    staleTime:1000*6*5
});


  return query;
}
