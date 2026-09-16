import { useQuery } from "@tanstack/react-query";

import { getProductById } from "../api/products-api";
import type { Product } from "../types/product";

export const useProductQuery = (id: string) => {
  return useQuery<Product>({
    queryKey: ["product", id],

    queryFn: () => getProductById(id),

    enabled: !!id,
  });
};
