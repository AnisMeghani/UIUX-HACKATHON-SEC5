export interface Product {
    _id: string;
    name: string;
    _type: "products";
    image?: {
      asset: {
        _ref: string;
        _type: "image";
      };
    };
    price: number;
    description: string;
    discountPercent: number;
    rating: number;
    tags: string[];
    slug: {
      _type: "slug";
      current: string;
    };
    inventory: number;  // Available stock
    quantity?: number;  // Quantity in cart (optional, default 1 when added to cart)
  }
  