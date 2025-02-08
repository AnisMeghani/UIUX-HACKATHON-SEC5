import { groq } from "next-sanity";

// queries.ts
export const allProducts = (searchTerm: string) => groq`*[_type == "products" && (name match $searchTerm + "*" || description match $searchTerm + "*")] {
  _id,
  name,
  price,
  "imageUrl": image.asset->url,
  description,
  "slug": slug.current
}`;
export const fourProducts = groq`*[_type == "products"][0..3]`
export const NewFourProducts = groq`*[_type == "products" && new == true][0...4]`

export const ReviewQuerry = groq`*[_type == "review" && references(^._id)]{
  _id,
  reviewerName,
  reviewText,
  rating,
  product->{
    _id,
    title
  }
}
`
export const Tagsquery =groq`*[_type == "products" && "Top Selling" in tags]`;
export const FourTagsquery =groq`*[_type == "products" && "Top Selling" in tags][0...4]`;
export const CasualProductQuery =groq`*[_type == "products" && "Casual" in tags][0...9]`;
export const getProductsByDressStyle = (dressStyle: string) => groq`
  *[_type == "products" && dressStyle == $dressStyle] {
    _id,
    name,
    price,
    description,
    "imageUrl": image.asset->url,
    "slug": slug.current
  }
`;

