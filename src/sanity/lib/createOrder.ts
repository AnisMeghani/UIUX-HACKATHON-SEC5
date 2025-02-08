// src/sanity/lib/createOrder.ts

import { client } from './client'; // Sanity client import
import { Product } from '../../../types/products';

interface Order {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  cartItems: Array<{ _ref: Product }>; // product references
  total: number;
  status: string;
}

// Create order function
export const createOrder = async (orderData: Order) => {
  try {
    const response = await client.create({
      _type: 'order',
      firstName: orderData.firstName,
      lastName: orderData.lastName,
      email: orderData.email,
      phone: orderData.phone,
      address: orderData.address,
      city: orderData.city,
      zipCode: orderData.zipCode,
      cartItems: orderData.cartItems, // Product references
      total: orderData.total,
      status: orderData.status,
    });
    console.log('Order placed successfully:', response);
    return response; // Return the response if the order is placed successfully
  } catch (error) {
    console.error('Error placing order:', error);
    throw error; // Throw error if order creation fails
  }
};
