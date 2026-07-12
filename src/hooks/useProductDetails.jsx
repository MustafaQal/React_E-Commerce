import authaxiosinstance from "@/API/authaxiosInstance";
import { useQuery } from "@tanstack/react-query";

export default function useProductDetails(id) {
  const getPDetails = async () => {
    const response = await authaxiosinstance.get(`/Products/${id}`);
    console.log('HOC',response );
    return response.data;
  };

  return useQuery({
    queryKey: ["product", id],
    queryFn: getPDetails,
    enabled: !!id,
    staleTime: 1000 * 60 * 10,
  });
}