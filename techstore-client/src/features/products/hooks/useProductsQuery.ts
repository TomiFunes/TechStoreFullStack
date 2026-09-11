import { useQuery } from "@tanstack/react-query";

import { getProducts } from "../api/products-api";
import type { Product } from "../types/product";

export const useProductsQuery = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};
