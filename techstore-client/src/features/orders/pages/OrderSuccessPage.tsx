import { Link } from "react-router-dom";

export const OrderSuccessPage = () => {
  return (
    <div className="mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-6 text-center">
      <div className="rounded-2xl border border-green-500/30 bg-slate-900 p-10">
        <h1 className="mb-4 text-5xl font-bold text-green-500">
          Order Successful
        </h1>

        <p className="mb-8 text-slate-300">Thank you for your purchase.</p>

        <div className="flex justify-center gap-4">
          <Link
            to="/products"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};
