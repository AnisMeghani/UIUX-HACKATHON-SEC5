"use client"
import React, { useState, useEffect } from "react";
import { useCart } from "@/app/context/CartContext";
import { Product } from "../../../../types/products";
import { createOrder } from "@/sanity/lib/createOrder";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const CheckoutPage = () => {
  const { cart } = useCart();
  const [total, setTotal] = useState<number>(0);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  // Add the missing state variables
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  useEffect(() => {
    if (cart) {
      const calculatedTotal = cart.reduce(
        (sum: number, item: any) => sum + item.price * (item.quantity || 1),
        0
      );
      setTotal(calculatedTotal);
    }
  }, [cart]);

  const handleSubmit = async () => {
    setIsProcessing(true); // Show processing modal

    const orderData = {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      zipCode,
      cartItems: cart.map((item: Product) => ({ _ref: item._id })),
      total,
      status: "pending",
      paymentMethod
    };

    try {
      await createOrder(orderData);
      setIsProcessing(false); // Close processing modal
      alert("Your order has been successfully placed!"); // Show success alert after placing the order
    } catch (error) {
      setIsProcessing(false); // Close processing modal
      alert(`Error placing the order`)
    }
  };

  const handleProceed = () => {
    handleSubmit(); // Call handleSubmit only when Proceed is clicked
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-semibold text-center text-blue-600 mb-8">Checkout</h1>

        {/* Order Summary Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Product Details */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-blue-600 mb-6">Order Summary</h2>
            <div className="space-y-6">
              {cart?.map((product: any) => (
                <div
                  key={product._id}
                  className="flex items-center justify-between border-b border-gray-200 py-4"
                >
                  <div className="flex items-center space-x-4">
                    {product.image && (
                      <Image
                        src={urlFor(product.image).url()}
                        alt={product.name}
                        width={100}
                        height={100}
                        className="object-cover rounded-lg"
                      />
                    )}
                    <span className="text-lg font-medium text-gray-700">{product.name}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm text-gray-500">x{product.quantity || 1}</span>
                    <span className="text-lg font-medium text-gray-700">${product.price}</span>
                  </div>
                </div>
              ))}
              <div className="flex justify-between font-semibold text-lg text-blue-700 mt-6">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Shipping and Payment Info */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-blue-600 mb-6">Shipping Information</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <input
                type="email"
                className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel"
                className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  type="text"
                  className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Zip Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </div>
              <input
                type="text"
                className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            {/* Payment Method Section */}
            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">Payment Method</h2>
            <select
              className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="">Select a payment method</option>
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cash-on-delivery">Cash on Delivery</option> {/* New option */}
            </select>

            {/* Credit Card Form */}
            {paymentMethod === "credit-card" && (
              <div className="mt-6 space-y-4">
                <input
                  type="text"
                  className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Card Number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Expiry Date (MM/YY)"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                  />
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </div>
              </div>
            )}

            <button
              onClick={() => setIsProcessing(true)} // Show processing modal on button click
              className="w-full bg-blue-600 text-white py-4 rounded-lg mt-8 hover:bg-blue-700 transition duration-300"
            >
              Complete Checkout
            </button>
          </div>
        </div>

        {/* Processing Modal */}
        {isProcessing && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-xl shadow-lg w-96">
              <h2 className="text-2xl font-semibold text-center text-blue-600">Processing Your Order</h2>
              <p className="text-center text-gray-700 mt-4">Please wait a moment...</p>
              <div className="flex justify-around mt-8">
                <button
                  className="bg-green-500 text-white py-2 px-6 rounded-lg"
                  onClick={handleProceed} // Proceed with order after button click
                >
                  Proceed
                </button>
                <button
                  className="bg-red-500 text-white py-2 px-6 rounded-lg"
                  onClick={() => setIsProcessing(false)} // Cancel the process
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
