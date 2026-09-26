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

      navigate("/order-success");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"></div>

      <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="relative mb-12 text-center">
        <p className="mb-2 text-blue-500">Secure Checkout</p>

        <h1 className="text-5xl font-extrabold text-white">
          Review Your Order
        </h1>

        <p className="mt-4 text-slate-400">Complete your purchase securely.</p>
      </div>
      <div className="h-fit rounded-3xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-md ">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between p-4 text-white"
              >
                <img
                  src={item.imageUrl}
                  className="h-28 w-28 flex-shrink-0 rounded-2xl bg-slate-900 p-2 object-contain"
                ></img>
                <div className="flex flex-1 flex-col justify-center">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <div className="ml-auto flex flex-col items-end justify-center">
                  <span className="rounded-xl bg-green-500/10 px-4 py-2 text-2xl font-extrabold text-green-400">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-slate-400">
            <div className="mt-6 space-y-2 text-sm text-slate-400">
              <p>✓ Secure payment</p>
              <p>✓ Free shipping</p>
              <p>✓ 30-day return policy</p>
            </div>
          </div>
          <button
            onClick={handleCheckout}
            className="mt-6 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 text-lg font-semibold text-white shadow-xl shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/40
  "
          >
            Place Order
          </button>
          <div className="mt-6 border-t border-slate-800 pt-6">
            <div className="flex justify-between">
              <span className="text-xl font-semibold text-white">Total</span>

              <span className="text-3xl font-extrabold text-green-500">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
