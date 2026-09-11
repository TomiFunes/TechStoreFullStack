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
    <div className="mx-auto max-w-7xl p-8">
      <h1 className="mb-8 text-4xl font-bold text-white">Products</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
