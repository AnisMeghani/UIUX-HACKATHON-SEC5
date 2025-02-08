import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Check, Star, StarHalf } from "lucide-react"; 
import AddToCartButton from "@/app/Components/AddToCartButton"; // Import client component

interface ProductPageProps {
  params?: { slug?: string }; // Ensure params are optional
}

// Fetch product from Sanity
async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == "products" && slug.current == $slug][0]{
      _id,
      name,
      _type,
      image,
      price,
      description,
      discountPercent,
      rating,
      inventory,
    }`,
    { slug }
  );
}

// Product Page Component
export default async function ProductPage({ params }: ProductPageProps) {
  // Ensure params exist before using
  if (!params || !params.slug) {
    return <p className="text-red-500 text-center mt-10">Error: Product slug is missing.</p>;
  }

  const slug = params.slug; // Extract slug properly
  const product = await getProduct(slug);

  // Handle missing product
  if (!product) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold text-gray-700">Product not found</h1>
        <p className="text-gray-500">The product with the provided slug does not exist.</p>
      </div>
    );
  }

  // Render stars for rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex items-center">
        {Array(fullStars).fill(null).map((_, i) => (
          <Star key={`full-${i}`} className="fill-yellow-500 text-yellow-500" />
        ))}
        {hasHalfStar && <StarHalf className="fill-yellow-500 text-yellow-500" />}
        <span className="ml-2 text-sm font-medium">{rating.toFixed(1)}/5</span>
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row justify-center sm:justify-evenly sm:mt-10 p-5 sm:p-0">
      {/* Left Image Area */}
      <div className="flex sm:flex-col justify-between items-center w-full sm:w-[152px] order-2 sm:order-1 mt-0">
        {product.image && (
          <>
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={295}
              height={298}
              className="w-[100px] h-[100px] sm:w-full sm:h-[150px]"
            />
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={295}
              height={298}
              className="w-[100px] h-[100px] sm:w-full sm:h-[150px] mt-4"
            />
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={295}
              height={298}
              className="w-[100px] h-[100px] sm:w-full sm:h-[150px] mt-4"
            />
          </>
        )}
      </div>

      {/* Middle Image Area */}
      <div className="w-full h-[260px] sm:w-[444px] sm:h-[500px] mt-5 sm:mt-0 order-1 sm:order-2">
        {product.image && (
          <Image
            src={urlFor(product.image).url()}
            alt={product.name}
            width={295}
            height={298}
            className="w-full h-[100%]"
          />
        )}
      </div>

      {/* Right Side Area */}
      <div className="w-full sm:w-[600px] h-[500px] mt-3 order-3">
        <h1 className="text-2xl md:text-3xl font-black">{product.name}</h1>

        {/* Rating Section */}
        <div className="mt-2">{product.rating && renderStars(product.rating)}</div>

        <ul>
          <li className="flex items-center font-bold mt-4">
            <div className="font-bold text-2xl">${product.price}</div>
            {product.discountPercent > 0 && (
              <div className="flex justify-center bg-red-100 text-[#FF3333] border rounded-3xl w-[52px] h-[20px] ml-3 px-[14px] py-[12px] items-center text-sm">
                {product.discountPercent}%
              </div>
            )}
          </li>
          <li className="text-sm mt-4">{product.description}</li>
        </ul>

        {/* Border Line */}
        <hr className="border border-gray-200 my-4" />

        {/* Select Colour */}
        <div className="mt-5">
          <p className="text-gray-500">Select colours</p>
          <div className="flex space-x-3 mt-2">
            {["#4F4631", "#314F4A", "#31344F"].map((color, index) => (
              <div key={index} className="w-[37px] h-[37px] rounded-full flex justify-center items-center" style={{ backgroundColor: color }}>
                <Check className="opacity-0 hover:opacity-100 cursor-pointer text-white" />
              </div>
            ))}
          </div>
        </div>

        {/* Border Line */}
        <hr className="border border-gray-200 my-4" />

        {/* Choose Size */}
        <div className="mt-4">
          <p className="text-gray-500">Choose size</p>
          <div className="flex space-x-4 mt-2">
            {["Small", "Medium", "Large", "X-Large"].map((size, index) => (
              <div key={index} className="w-[80px] h-[40px] bg-[#f0f0f0] text-gray-400 flex justify-center items-center rounded-[62px]">
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Add To Cart Button */}
        <div className="mt-10 mb-10">
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
