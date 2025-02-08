// src/sanity/lib/fetchProducts.ts
import { client } from './client';
import { groq } from 'next-sanity';

// GROQ query to fetch products by category (assuming categories are tagged)
export async function fetchProductsByCategory(categoryId: string) {
  const query = groq`*[_type == "products" && "${categoryId}" in tags] {
    _id,
    name,
    price,
    description,
    "image": image.asset->url,
    "slug": slug.current,
    discountPercent,
    rating,
    inventory
  }`;

  const params = { categoryId };
  
  // Fetch products based on the category
  const products = await client.fetch(query, params);
  return products;
}
