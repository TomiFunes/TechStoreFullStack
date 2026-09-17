import { useCartStore } from "@/features/cart/store/cart-store";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../orders-api.ts/orders-api";

export const CheckoutPage = () => {
  const items = useCartStore((state) => state.items);

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const navigate = useNavigate();
  const clearCart = useCartStore((state) => state.clearCart);
  const handleCheckout = async () => {
    try {
      await createOrder(total);

      clearCart();

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mx-auto max-w-6xl p-8">
      <h1 className="mb-8 text-4xl font-bold text-white">Checkout</h1>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between rounded border p-4 text-white"
          >
            <span>
              {item.title} x {item.quantity}
            </span>

            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <button
        onClick={handleCheckout}
        className="mt-8 rounded-lg bg-green-600 px-8 py-3 text-white"
      >
        Checkout
      </button>
      <div className="mt-8 flex justify-between text-2xl font-bold text-green-500">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
};
