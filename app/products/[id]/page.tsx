import { fetchProductById } from "@/app/lib/data";
import { Header } from "@/app/ui/header";
import { Product } from "@/app/ui/shop/product";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const product = await fetchProductById(id);
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-xl m-auto">
          <Product isLink={false} product={product} />
        </div>
      </main>
    </>
  );
}
