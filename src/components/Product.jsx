import React from "react";

const Product = () => {
  return (
    <div className="flex">
      {/* First column */}
      <div className="w-1/3">
        <a href="#" className="text-blue-500 hover:text-blue-700">
          Go Back
        </a>
        <img
          src="https://via.placeholder.com/150"
          alt="Product image"
          className="mt-4"
        />
      </div>
      {/* Second column */}
      <div className="w-1/3 px-4">
        <h1 className="text-2xl font-bold">Product Name</h1>
        <div className="mt-4">
          <span className="text-yellow-500">★★★★☆</span>
          <span className="ml-2 text-gray-500">(123 reviews)</span>
        </div>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      {/* Third column */}
      <div className="w-1/3">
        <div className="text-2xl font-bold mt-4">$9.99</div>
        <div className="mt-4 text-green-500">In Stock</div>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
