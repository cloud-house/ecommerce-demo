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

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all products.");
  }
}
