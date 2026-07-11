import { useQuery } from '@tanstack/react-query';
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
