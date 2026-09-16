import { useCartStore } from "../store/cart-store";

export const CartPage = () => {
  const { items, increaseQuantity, decreaseQuantity, removeItem, clearCart } =
    useCartStore();

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-6xl p-8">
        <h1 className="mb-6 text-4xl font-bold text-white">Shopping Cart</h1>

        <div className="py-20 text-center">
          <p className="text-xl text-slate-400 text-white">
            Your cart is empty.
          </p>
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

      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 rounded-xl border p-4 text-white"
          >
            <img src={item.imageUrl} alt={item.title}></img>

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

        <div className="flex justify-between text-lg text-green-500">
          <span>Total</span>

          <span>${total.toFixed(2)}</span>
        </div>
        <button className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
          Checkout
        </button>
      </div>
    </div>
  );
};
