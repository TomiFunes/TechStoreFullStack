import type { Product } from "@/features/products/types/product.ts";

export interface CartItem extends Product {
  quantity: number;
}
