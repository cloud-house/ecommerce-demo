"use client";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/button";
import { Product } from "@/app/lib/definitions";
import Image from "next/image";
import clsx from "clsx";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { formatCurrency } from "@/app/lib/utils";

export function Product({
  isLink,
  product,
}: {
  isLink: boolean;
  product: Product;
}) {
  const handleAddToCart = () => {
    toast.success("Produkt dodany do koszyka");
  };

  return (
    <div>
      <div className="group relative">
        <div
          className={clsx(
            "aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none",
            {
              "group-hover:opacity-75": isLink,
            }
          )}
        >
          <Image
            src={product.image_url}
            alt={product.name}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            width={400}
            height={400}
          ></Image>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              {isLink ? (
                <Link href={`/products/${product.id}`}>
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  {product.name}
                </Link>
              ) : (
                product.name
              )}
            </h3>
          </div>
          <p className="text-sm font-medium text-gray-900">
            {formatCurrency(product.price)}
          </p>
        </div>
      </div>
      <Button onClick={handleAddToCart} className="mt-4 w-full">
        <ShoppingCartIcon className="w-6 h-6 mr-3" />
        Dodaj do koszyka
      </Button>
    </div>
  );
}
