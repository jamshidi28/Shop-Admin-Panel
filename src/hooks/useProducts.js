import { addProdcut } from "@/services/adminService";
import { getProducts } from "@/services/productService";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetProducts = ()=>{
    return  useQuery({
        queryKey: ["get-products"],
        queryFn: getProducts,
        retry:false,
        refetchOnWindowFocus:true
    });
   }

   export const useAddProduct = () => {
    return useMutation({ mutationFn: addProdcut });
  };
  