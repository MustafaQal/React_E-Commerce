import { useMutation } from '@tanstack/react-query'
import React from 'react'
import authaxiosinstance from '../API/authaxiosInstance'

export default function useAddToCart() {
    const addtoCart = useMutation({
        mutationFn:async({ProductId,Count})=>{
            return await authaxiosinstance.post('/Carts',{
                ProductId:ProductId,
                Count:Count
            })
        }
    })

return addtoCart;
}
