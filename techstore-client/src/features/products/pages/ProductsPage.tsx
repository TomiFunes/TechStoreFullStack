import { ProductCard } from "../components/ProductCard";
import { useProductsQuery } from "../hooks/useProductsQuery";

export const ProductsPage = () => {
  const { data, isLoading, isError } = useProductsQuery();

  if (isLoading) {
    return <p className="p-10 text-white">Loading...</p>;
  }

  if (isError) {
    return <p className="p-10 text-red-500">Error loading products</p>;
  }

  return (
    <div className="relative mx-auto max-w-7xl p-8 py-12">
      <div className="absolute left-20 top-10 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"></div>
      <div className="absolute left-20 top-10 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"></div>
      <div className="mb-12 text-center">
        <p className="mb-2 text-blue-500">Explore our catalog</p>

        <h1 className="mb-4 text-5xl font-extrabold text-white">
          Premium Technology
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-slate-400">
          Discover laptops, smartphones and accessories carefully selected for
          performance and design.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
