import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "../types/cart.types";
import type { Product } from "../../products/types/product.ts";

interface CartState {
  items: CartItem[];

  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;

  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;

  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],

      addItem: (product) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === product.id,
          );

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }

          return {
            items: [...state.items, { ...product, quantity: 1 }],
          };
        }),

      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        })),

      increaseQuantity: (productId) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === productId
              ? {
                  ...item,
                  quantity:
                    item.quantity < item.stock
                      ? item.quantity + 1
                      : item.quantity,
                }
              : item,
          ),
        })),

      decreaseQuantity: (productId) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              item.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item,
            )
            .filter((item) => item.quantity > 0),
        })),

      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
    },
  ),
);
