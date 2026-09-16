import type { CartItem as CartItemType } from "../types/cart.types";

interface CartItemProps {
  item: CartItemType;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  removeItem: (productId: string) => void;
}

export const CartItem = ({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}: CartItemProps) => {
  return (
    <div className="flex items-center gap-6 rounded-xl border border-slate-700 p-4">
      {item.imageUrl}

      <div className="flex-1">
        <h2 className="text-xl font-semibold text-white">{item.title}</h2>

        <p className="text-green-500">${item.price.toFixed(2)}</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => decreaseQuantity(item.id)}
          className="rounded bg-slate-700 px-3 py-1 text-white"
        >
          -
        </button>

        <span className="text-white">{item.quantity}</span>

        <button
          onClick={() => increaseQuantity(item.id)}
          className="rounded bg-slate-700 px-3 py-1 text-white"
        >
          +
        </button>
      </div>

      <div className="w-24 text-right">
        <p className="font-semibold text-white">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      <button
        onClick={() => removeItem(item.id)}
        className="rounded-lg bg-red-600 px-3 py-2 text-white hover:bg-red-700"
      >
        Remove
      </button>
    </div>
  );
};
