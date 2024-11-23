import React, { useState } from "react";
import { Navbar } from "../components";
import "./sell.css";

const SellProduct = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);

  const handleImageUpload = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      productName,
      productDescription,
      productPrice,
      productImage,
    });
  };

  return (
    <div className="sell-product container mx-auto p-8">
        <Navbar/>
      <h2 className="text-4xl font-extrabold text-center text-indigo-600 mb-8">
        Sell Your Product
      </h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-50 p-8 rounded-xl shadow-xl border border-gray-300">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-50 p-8 rounded-xl shadow-xl border border-gray-300">
        <div className="mb-6">
          <label htmlFor="productName" className="block text-lg font-medium text-gray-800">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="productDescription" className="block text-lg font-medium text-gray-800">
            Product Description
          </label>
          <textarea
            id="productDescription"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter product description"
            required
          ></textarea>
        </div>

        <div className="mb-6">
          <label htmlFor="productPrice" className="block text-lg font-medium text-gray-800">
            Price (₹)
          </label>
          <input
            type="number"
            id="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter price"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="productImage" className="block text-lg font-medium text-gray-800">
            Product Image
          </label>
          <input
            type="file"
            id="productImage"
            onChange={handleImageUpload}
            className="mt-2 block w-full text-sm text-gray-500 border border-gray-300 rounded-md file:py-3 file:px-6 file:border-none file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Upload Product
        </button>
      </form>
      </form>
    </div>
  );
};

export default SellProduct;
