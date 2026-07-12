import useProductDetails from '@/hooks/useProductDetails'
import Loader from '@/UI/Loader/Loader';
import { Typography } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';

export default function ProductsDetails() {

    const {id} = useParams();

    const { data, isLoading, isError } = useProductDetails(id);
    console.log(data);
   
    if (isLoading) return <Loader />;
    if (isError) return <Typography>Error loading products </Typography>;

  return (
    <div>ProductsDetails</div>
   
  )
}
