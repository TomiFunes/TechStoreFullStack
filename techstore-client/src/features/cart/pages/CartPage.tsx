import { useCartStore } from "../store/cart-store";
import { useNavigate } from "react-router-dom";

export const CartPage = () => {
  const { items, increaseQuantity, decreaseQuantity, removeItem, clearCart } =
    useCartStore();

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const navigate = useNavigate();
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-6xl p-8">
        <h1 className="mb-6 text-4xl font-bold text-white">Shopping Cart</h1>

        <div className="py-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Your cart is empty
          </h2>

          <p className="text-slate-400">
            Add some products and start shopping.
          </p>

          <button
            onClick={() => navigate("/products")}
            className="mt-8 rounded-xl bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl p-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-white">Shopping Cart</h1>

        <button
          onClick={clearCart}
          className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
        >
          Clear Cart
        </button>
      </div>

      <div className="h-fit rounded-3xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-md">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 rounded-xl border p-4 text-white"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="h-28 w-28 flex-shrink-0 rounded-2xl bg-slate-900 p-2 object-contain"
            ></img>

            <div className="flex-1">
              <h2 className="text-xl font-semibold">{item.title}</h2>

              <p>${item.price.toFixed(2)}</p>
            </div>

            <div className="flex items-center gap-3 text-white">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="rounded bg-slate-700 px-3 py-1 text-white"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => increaseQuantity(item.id)}
                className="rounded bg-slate-700 px-3 py-1 text-white"
              >
                +
              </button>
              {item.quantity === item.stock && (
                <p className="text-sm text-orange-400">
                  Maximum available stock reached
                </p>
              )}
            </div>

            <p className="w-24 text-right font-semibold text-green-500">
              ${(item.price * item.quantity).toFixed(2)}
            </p>

            <button
              onClick={() => removeItem(item.id)}
              className="rounded bg-red-600 px-3 py-2 text-white hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border p-6">
        <h2 className="mb-4 text-2xl font-bold text-white">Order Summary</h2>
        <div className="mb-2 flex justify-between text-white">
          <span>Items</span>
          <span>{totalItems}</span>
        </div>
        <div className="flex justify-between text-lg text-green-500">
          <span>Total</span>

          <span>${total.toFixed(2)}</span>
        </div>
        <button
          onClick={() => navigate("/checkout")}
          className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
