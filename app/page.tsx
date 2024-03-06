import ProductsWrapper from "@/app/ui/shop/products-wrapper";
import { Header } from "./ui/header";
import { Hero } from "./ui/shop/hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4">
        <Hero />
        <ProductsWrapper />
      </main>
    </>
  );
}
