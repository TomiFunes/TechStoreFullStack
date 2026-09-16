import { api } from "@/lib/axios";

import type { Product } from "../types/product";

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>("/products");

  return response.data;
};

export const getProductById = async (id: string): Promise<Product> => {
  const response = await api.get<Product>(`/products/${id}`);

  return response.data;
};
