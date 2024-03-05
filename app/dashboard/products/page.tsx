import ProductsTable from "@/app/ui/dashboard/products/products-table";
import { Suspense } from "react";
import { ProductsTableSkeleton } from "@/app/ui/skeletons";
import { CreateProduct } from "@/app/ui/dashboard/products/buttons";

export default async function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`text-2xl`}>Produkty</h1>
        <CreateProduct />
      </div>
      <Suspense fallback={<ProductsTableSkeleton />}>
        <ProductsTable />
      </Suspense>
    </div>
  );
}
