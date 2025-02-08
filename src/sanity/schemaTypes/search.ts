import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../lib/client"; // Sanity client

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { query: searchTerm } = req.query;

  // Validate that searchTerm is a string and not empty
  if (typeof searchTerm !== "string" || searchTerm.trim() === "") {
    return res.status(400).json({ error: "Search term is required and must be a string" });
  }

  try {
    // Define the GROQ query directly
    const query = `*[_type == "products" && name match $searchTerm + "*"] {
      name,
      price,
      "imageUrl": image.asset->url,
      description
    }`;

    // Fetch products based on the searchTerm
    const products = await client.fetch(query, {
      searchTerm: searchTerm, // Passing the searchTerm parameter to GROQ
    });

    // Return the filtered products
    return res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
