import { fetchProducts } from "@/app/lib/data";
import { Product } from "@/app/ui/shop/product";

export default async function ProductsWrapper() {
  const products = await fetchProducts();
  return (
    <div className="bg-white w-full max-w-7xl">
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-12">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-10">
          Produkty
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-16">
          {products.length === 0 ? (
            <p className="text-2xl">Brak produktów</p>
          ) : (
            products.map((product) => (
              <Product key={product.id} isLink={true} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
