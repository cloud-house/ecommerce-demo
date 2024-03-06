"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const FormSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.coerce.number(),
  quantity: z.coerce.number(),
  image_url: z.string(),
});

const CreateProduct = FormSchema.omit({ id: true });
const UpdateProduct = FormSchema.omit({ id: true });

export async function createProduct(formData: FormData) {
  const validatedFields = CreateProduct.safeParse({
    name: formData.get("name"),
    price: formData.get("price"),
    quantity: formData.get("quantity"),
    image_url: formData.get("image_url"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Product.",
    };
  }

  const { name, price, quantity, image_url } = validatedFields.data;
  const priceInCents = price * 100;

  try {
    await sql`
    INSERT INTO products (name, price, quantity, image_url)
    VALUES (${name}, ${priceInCents}, ${quantity}, ${image_url})
  `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Product.",
    };
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}

export async function updateProduct(id: string, formData: FormData) {
  const validatedFields = UpdateProduct.safeParse({
    name: formData.get("name"),
    price: formData.get("price"),
    quantity: formData.get("quantity"),
    image_url: formData.get("image_url"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Update Product.",
    };
  }

  const { name, price, quantity, image_url } = validatedFields.data;
  const priceInCents = price * 100;

  try {
    await sql`
    UPDATE products
    SET name = ${name}, price = ${priceInCents}, quantity = ${quantity}, image_url = ${image_url}
    WHERE id = ${id}
  `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Update Product.",
    };
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}

export async function deleteProduct(id: string) {
  try {
    await sql`DELETE FROM products WHERE id = ${id}`;
  } catch (error) {
    return {
      message: "Database Error: Failed to Delete Product.",
    };
  }
  revalidatePath("/dashboard/products");
}
