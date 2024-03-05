import Form from "@/app/ui/dashboard/products/edit-form";
import Breadcrumbs from "@/app/ui/dashboard/breadcrumbs";
import { fetchProductById } from "@/app/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const product = await fetchProductById(id);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Produkty", href: "/dashboard/products" },
          {
            label: "Edytuj produkt",
            href: `/dashboard/products/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form product={product} />
    </main>
  );
}
