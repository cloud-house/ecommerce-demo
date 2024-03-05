import Form from "@/app/ui/dashboard/products/create-form";
import Breadcrumbs from "@/app/ui/dashboard/breadcrumbs";

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Produkty", href: "/dashboard/products" },
          {
            label: "Nowy produkt",
            href: "/dashboard/products/create",
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}
