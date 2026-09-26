import { Link } from "react-router-dom";

export const OrderSuccessPage = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-green-500/10 blur-3xl"></div>

      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="relative w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-900/80 p-12 text-center shadow-2xl backdrop-blur-md">
        <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r ">
          <span
            className="
mx-auto
mb-8
flex
h-28
w-28
animate-bounce
items-center
justify-center
rounded-full
bg-gradient-to-r
from-green-500
to-emerald-600
shadow-lg
shadow-green-500/30
"
          >
            ✓
          </span>
        </div>

        <p className="mb-3 text-green-400">Payment Confirmed</p>

        <h1 className="mb-6 text-6xl font-extrabold text-white">
          Order Successful
        </h1>

        <p className="mx-auto mb-10 max-w-lg text-lg text-slate-400">
          Thank you for shopping with TechStore. Your order has been placed
          successfully and is now being processed.
        </p>

        <div className="mb-10 rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-slate-500">Status</p>

              <p className="mt-2 font-semibold text-green-400">Confirmed</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Shipping</p>

              <p className="mt-2 font-semibold text-white">Free</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Returns</p>

              <p className="mt-2 font-semibold text-white">30 Days</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/products"
            className="
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};
