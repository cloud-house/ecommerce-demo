const { db } = require("@vercel/postgres");
const { products } = require("../app/lib/placeholder-data.js");

async function seedProducts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "products" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS products (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price INT NOT NULL,
        quantity INT NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "products" table`);

    // Insert data into the "products" table
    const insertedProducts = await Promise.all(
      products.map(async (product) => {
        return client.sql`
        INSERT INTO products (id, name, price, quantity, image_url)
        VALUES (${product.id}, ${product.name}, ${product.price}, ${product.quantity}, ${product.image_url})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedProducts.length} products`);

    return {
      createTable,
      products: insertedProducts,
    };
  } catch (error) {
    console.error("Error seeding products:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedProducts(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
