import { useNavigate } from "react-router-dom";
import type { Product } from "../types/product";

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/products/${product.id}`)}
      className="cursor-pointer rounded-xl bg-slate-900 p-4 transition hover:scale-105"
    >
      <img
        src={product.imageUrl}
        alt={product.title}
        className="mb-4 h-48 w-full rounded-lg object-cover"
      />

      <h2 className="text-xl font-bold text-white">{product.title}</h2>

      <p className="text-slate-400">{product.description}</p>

      <p className="mt-2 text-2xl font-bold text-green-500">${product.price}</p>
    </article>
  );
};
