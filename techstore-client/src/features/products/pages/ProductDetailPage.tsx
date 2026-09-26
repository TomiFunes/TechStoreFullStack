import { useParams } from "react-router-dom";
import { useProductQuery } from "../hooks/useProductQuery";
import { useCartStore } from "../../../features/cart/store/cart-store";
import { useState } from "react";

export const ProductDetailPage = () => {
  const addItem = useCartStore((state) => state.addItem);
  const [added, setAdded] = useState(false);
  const { id } = useParams();

  const { data: product, isLoading, isError } = useProductQuery(id ?? "");

  if (isLoading) {
    return <div className="p-10 text-white">Loading...</div>;
  }

  if (isError || !product) {
    return <div className="p-10 text-red-500">Product not found</div>;
  }
  const handleAddToCart = () => {
    addItem(product);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };
  const getStockStatus = () => {
    if (product.stock === 0) {
      return {
        text: "Out of Stock",
        color: "bg-red-500/20 text-red-400",
      };
    }

    if (product.stock <= 4) {
      return {
        text: "Limited Units Available",
        color: "bg-orange-500/20 text-orange-400",
      };
    }

    return {
      text: "In Stock",
      color: "bg-green-500/20 text-green-400",
    };
  };

  const stockStatus = getStockStatus();

  return (
    <div className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"></div>

      <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="relative grid items-center gap-16 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="h-[500px] w-full rounded-3xl border border-slate-800 object-cover object-center shadow-2xl shadow-blue-500/10 transition duration-500 hover:scale-105"
          ></img>
        </div>

        <div>
          <h1 className="mb-5 text-5xl font-extrabold leading-tight tracking-tight text-white">
            {product.title}
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-400">
            {product.description}
          </p>

          <span
            className={`mb-6 inline-flex w-fit rounded-full px-4 py-2 text-sm font-medium ${stockStatus.color}`}
          >
            {stockStatus.text}
          </span>

          <p className="mb-10 text-6xl font-extrabold text-green-500">
            ${product.price.toFixed(2)}
          </p>
          <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Free Shipping</span>

              <span className="font-semibold text-green-400">
                Available Now
              </span>
            </div>
          </div>
          <div className="relative">
            <button
              disabled={product.stock === 0}
              onClick={handleAddToCart}
              className="w-full max-w-md rounded-2x1 bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40"
            >
              {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
            </button>
            {added && (
              <div className="absolute -top-16 left-0 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm font-medium text-green-400 backdrop-blur-md animate-bounce">
                ✅ Product added to cart
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
