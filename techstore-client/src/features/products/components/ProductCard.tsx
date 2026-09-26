import { useNavigate } from "react-router-dom";
import type { Product } from "../types/product";

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  const navigate = useNavigate();
  const stockStatus =
    product.stock === 0
      ? {
          text: "Out of Stock",
          className: "bg-red-500/10 text-red-400",
        }
      : product.stock <= 4
        ? {
            text: "Limited Units",
            className: "bg-orange-500/10 text-orange-400",
          }
        : {
            text: "In Stock",
            className: "bg-green-500/10 text-green-400",
          };
  return (
    <article
      onClick={() => navigate(`/products/${product.id}`)}
      className="group cursor-pointer overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10
    "
    >
      <div className="bg-slate-950 p-6">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="mx-auto h-52 w-full object-contain"
        ></img>
        <div className="mt-4">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${stockStatus.className}`}
          >
            {stockStatus.text}
          </span>
        </div>

        <h2 className="mt-4 line-clamp-1 text-xl font-bold text-white">
          {product.title}
        </h2>

        <p className="mt-2 line-clamp-2 text-sm text-slate-400">
          {product.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-3xl font-extrabold text-green-500">
            ${product.price.toFixed(2)}
          </p>

          <div className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-blue-500">
            View
          </div>
        </div>
      </div>
    </article>
  );
};
