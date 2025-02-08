import { type SchemaTypeDefinition } from 'sanity'
import { SchemaProducts } from './products'
import { Review } from './review'
import { Order } from './order'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [SchemaProducts,Review, Order],
}
