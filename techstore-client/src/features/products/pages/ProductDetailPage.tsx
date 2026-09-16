import { useParams } from "react-router-dom";
import { useProductQuery } from "../hooks/useProductQuery";

export const ProductDetailPage = () => {
  const { id } = useParams();

  const { data: product, isLoading, isError } = useProductQuery(id ?? "");

  if (isLoading) {
    return <div className="p-10 text-white">Loading...</div>;
  }

  if (isError || !product) {
    return <div className="p-10 text-red-500">Product not found</div>;
  }

  return (
    <div className="mx-auto max-w-6xl p-8">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <img
            src={product.imageUrl}
            alt={product.title}
            className="bold text-white"
          />
          {product.title}

          <p className="mb-6 text-slate-400">{product.description}</p>

          <p className="mb-4 text-lg text-slate-300">Stock: {product.stock}</p>

          <p className="mb-8 text-5xl font-bold text-green-500">
            ${product.price}
          </p>

          <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
