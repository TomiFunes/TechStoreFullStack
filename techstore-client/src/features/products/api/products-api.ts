import { api } from "@/lib/axios";

import type { Product } from "../types/product";

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>("/products");

  return response.data;
};
