import { useParams } from "react-router-dom";
import { useProductQuery } from "../hooks/useProductQuery";
import { useCartStore } from "../../../features/cart/store/cart-store";

export const ProductDetailPage = () => {
  const addItem = useCartStore((state) => state.addItem);
  const { id } = useParams();

  const { data: product, isLoading, isError } = useProductQuery(id ?? "");

  if (isLoading) {
    return <div className="p-10 text-white">Loading...</div>;
  }
  console.log(product);

  if (isError || !product) {
    return <div className="p-10 text-red-500">Product not found</div>;
  }

  return (
    <div className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"></div>

      <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="relative grid items-center gap-16 lg:grid-cols-2">
        <div>
          <img
            src={product.imageUrl}
            alt={product.title}
            className="h-[500px] w-full rounded-3xl border border-slate-800 object-cover object-center shadow-2xl shadow-blue-500/10"
          ></img>
        </div>

        <div>
          <h1 className="mb-4 text-4xl font-bold text-white">
            {product.title}
          </h1>

          <p className="mb-6 text-slate-400">{product.description}</p>

          <p className="mb-4 text-lg text-slate-300">Stock: {product.stock}</p>

          <p className="mb-8 text-5xl font-bold text-green-500">
            ${product.price.toFixed(2)}
          </p>

          <button
            onClick={() => addItem(product)}
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
