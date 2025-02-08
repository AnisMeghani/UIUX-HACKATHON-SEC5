import { defineType } from "sanity"

export const SchemaProducts = defineType({
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'slug',
        type: 'slug',
        options: {
          source: 'name',
        }
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'inventory',  // Current stock available
        title: 'Stock',
        type: 'number',
      },
      {
          name: "quantity",
          title: "Quantity",
          type: "number",
          validation: (Rule) => Rule.required().min(0), // Make it required
        },
        
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
      {
        name: "category",
        title: "Category",
        type: 'string',
        options: {
          list: [
            { title: 'T-Shirt', value: 'tshirt' },
            { title: 'Short', value: 'short' },
            { title: 'Jeans', value: 'jeans' },
            { title: 'Hoddie', value: 'hoodie' },
            { title: 'Shirt', value: 'shirt' },
          ]
        }
      },
      {
        name: "dressStyle",
        title: "Dress Style",
        type: "string",
        options: {
          list: [
            { title: "Casual", value: "casual" },
            { title: "Formal", value: "formal" },
            { title: "Party", value: "party" },
            { title: "Gym", value: "gym" },
          ],
        },
      },    
      {
        name: "discountPercent",
        title: "Discount Percent",
        type: 'number',
      },
      {
        name: "new",
        type: 'boolean',
        title: "New",
      },
      {
        name: "colors",
        title: "Colors",
        type: 'array',
        of: [{ type: 'string' }]
      },
      {
        name: "sizes",
        title: "Sizes",
        type: 'array',
        of: [{ type: 'string' }]
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
        validation: (Rule) =>
          Rule.required().min(1).max(5).precision(1).error('Rating must be between 1 and 5 (with half star option)'),
      },
      {
        name: 'reviews',
        title: 'Reviews',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'review' }] }],
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
      },
    ],
  })
  