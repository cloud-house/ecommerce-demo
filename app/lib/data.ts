import { Product } from "./definitions";
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchProducts() {
  noStore();
  try {
    const data = await sql<Product>`
        SELECT
          id,
          name,
          price,
          quantity,
          image_url
        FROM products
        ORDER BY name ASC
      `;

    const products = data.rows.map((product) => ({
      ...product,
      price: product.price / 100,
    }));
    return products;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all products.");
  }
}

export async function fetchProductById(id: string) {
  noStore();
  try {
    const data = await sql<Product>`
        SELECT
            products.id,
            products.name,
            products.price,
            products.quantity,
            products.image_url
        FROM products
        WHERE products.id = ${id};
      `;

    const product = data.rows.map((product) => ({
      ...product,
      price: product.price / 100,
    }));

    return product[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product.");
  }
}
