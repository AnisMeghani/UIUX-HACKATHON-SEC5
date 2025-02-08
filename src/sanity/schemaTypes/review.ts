import { defineType } from 'sanity';

export const Review = defineType({
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    {
      name: 'reviewerName',
      title: 'Reviewer Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(50),
    },
    {
      name: 'reviewText',
      title: 'Review Text',
      type: 'text',
      validation: (Rule) => Rule.required().max(500),
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Rating must be between 1 and 5'),
    },
    {
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: [{ type: 'products' }], // Use the correct type name here
    },
  ],
});
