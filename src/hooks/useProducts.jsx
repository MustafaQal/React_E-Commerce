import authaxiosinstance from '@/API/authaxiosInstance'
import { useQuery } from '@tanstack/react-query';
import React from 'react'

export default function useProducts() {

    const getProducts = async ()=> {

      const response = await authaxiosinstance.get('/Products');
      //console.log("useProducts", response.data);
      return response.data.response.data;

    }


const query = useQuery ({
    queryKey: ['Products', 'en'],
    queryFn: getProducts,
    staleTime: 1000*6*5
});

  return query;
}
