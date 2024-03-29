import Link from "next/link";
import {
  CheckIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/dashboard/button";
import { updateProduct } from "@/app/lib/actions";
import { Product } from "@/app/lib/definitions";

export default function EditProductForm({ product }: { product: Product }) {
  const updateProductWithId = updateProduct.bind(null, product.id);
  const availableImages = [
    {
      value: "/dres-adidas-big-logo.jpg",
      displayValue: "Dres Adidas Big Logo",
    },
    {
      value: "/dres-meski-adidas-3-stripes.jpg",
      displayValue: "Dres Meski Adidas 3-stripes",
    },
    {
      value: "/dres-meski-adidas-ribbed-aeroready.jpg",
      displayValue: "Dres Męski Adidas Ribbed Aeroready",
    },
  ];
  return (
    <form action={updateProductWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Nazwa produktu
          </label>
          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              defaultValue={product.name}
              placeholder="Wprowadź nazwę"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              required
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <label htmlFor="price" className="mb-2 block text-sm font-medium">
            Cena
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="price"
                name="price"
                type="number"
                step="0.01"
                defaultValue={product.price}
                placeholder="Wprowadź cenę"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Quantity */}
        <div className="mb-4">
          <label htmlFor="quantity" className="mb-2 block text-sm font-medium">
            Ilość
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="quantity"
                name="quantity"
                type="number"
                step="1"
                defaultValue={product.quantity}
                placeholder="Wprowadź ilość"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              />
              <CheckIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Photo URL */}
        <div className="mb-4">
          <label htmlFor="image_url" className="mb-2 block text-sm font-medium">
            Url zdjęcia
          </label>
          <div className="relative">
            <select
              id="image_url"
              name="image_url"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={product.image_url}
              required
            >
              <option value="" disabled>
                Wybierz zdjęcie
              </option>
              {availableImages.map((image) => (
                <option key={image.value} value={image.value}>
                  {image.displayValue}
                </option>
              ))}
            </select>
            <PhotoIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/products"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Anuluj
        </Link>
        <Button type="submit">Edytuj produkt</Button>
      </div>
    </form>
  );
}
