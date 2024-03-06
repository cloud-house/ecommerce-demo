import { fetchProductById } from "@/app/lib/data";
import { Header } from "@/app/ui/menu";
import { Product } from "@/app/ui/shop/product";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const product = await fetchProductById(id);
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Product isLink={false} product={product} />
      </main>
    </>
  );
}
