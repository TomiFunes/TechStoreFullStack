import type { Product } from "../types/product";

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  return (
    <article className="rounded-xl bg-slate-900 p-4">
      <img src={product.imageUrl} alt={product.title} />

      <h2 className="text-xl font-bold text-white">{product.title}</h2>

      <p className="text-slate-400">{product.description}</p>

      <p className="mt-2 text-2xl font-bold text-green-500">${product.price}</p>
    </article>
  );
};
