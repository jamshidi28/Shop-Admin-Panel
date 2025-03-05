import { addToCart, removeCart } from "@/services/cartService";
import { useMutation } from "@tanstack/react-query";

export const useAddToCart = () =>
    useMutation({
      mutationFn: addToCart,
    });

export const useRemoveCart = () =>
    useMutation({
      mutationFn: removeCart,
    });