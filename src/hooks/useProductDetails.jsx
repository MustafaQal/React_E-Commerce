import authaxiosinstance from "@/API/authaxiosInstance";
import { useQuery } from "@tanstack/react-query";

export default function useProductDetails(id) {
  const getPDetails = async () => {
    const response = await authaxiosinstance.get(`/Products/${id}`);
    console.log('HOC',response );
    return response.data.response;
  };

  return useQuery({
    queryKey: ["product", id],
    queryFn: getPDetails,
    enabled: !!id, //Mustafa: https://medium.com/dailyjs/2-ways-to-convert-values-to-boolean-in-javascript-2abee60af76d
    staleTime: 1000 * 60 * 10,
  });
}