import ProductsWrapper from "@/app/ui/shop/products-wrapper";
import { Header } from "./ui/menu";
import { Hero } from "./ui/shop/hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero />
        <ProductsWrapper />
      </main>
    </>
  );
}
