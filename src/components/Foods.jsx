import React from "react";
import image from "./assets/Food/product_01.jpg";
import image2 from "./assets/Food/product_02.jpg";
import image3 from "./assets/Food/product_03.jpg";
import image4 from "./assets/Food/product_04.jpg";
import image5 from "./assets/Food/product_05.jpg";
import image6 from "./assets/Food/product_06.jpg";
import image7 from "./assets/icon/icon1.png";
import image8 from "./assets/icon/icon13.png";

const Foods = () => {
  // created an array of pet foods with their names, images, and prices.
  const petFoods = [
    {
      name: "Chicken & Brown Rice Recipe",
      image: image,
      price: 25.99,
    },
    {
      name: "Beef & Vegetable Stew",
      image: image2,
      price: 19.99,
    },
    {
      name: "Salmon & Sweet Potato Formula",
      image: image3,
      price: 27.99,
    },
    {
      name: "Turkey & Pea Stew",
      image: image4,
      price: 21.99,
    },
    {
      name: "Chicken & Brown Rice Recipe",
      image: image5,
      price: 25.99,
    },
    {
      name: "Beef & Vegetable Stew",
      image: image6,
      price: 19.99,
    },
    {
      name: "Salmon & Sweet Potato Formula",
      image: image4,
      price: 27.99,
    },
    {
      name: "Turkey & Pea Stew",
      image: image3,
      price: 21.99,
    },
  ];
  return (
    // we have display each pet food item in a grid with a thumbnail image, name, price, and an "Add to Cart" button.
    <div className="container mx-auto my-24 bg-white">
      <div className="flex justify-between items-center mb-5 px-20">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="py-2  sm:px-8 lg:px-96 md:px-56  w-full rounded-md bg-gray-100"
          />
          <span className="absolute top-1/2 right-3 transform -translate-y-1/2">
            <img src={image7} alt="" />
          </span>
        </div>
      </div>
      <h2 className="text-3xl font-semibold mb-5">Pet Foods</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {petFoods.map((food, index) => (
          <div
            key={index}
            className="bg-white border-2 border-black rounded-lg shadow p-5 flex flex-col justify-center items-center"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-48 h-48 object-cover  mb-5"
            />
            <h3 className="text-lg font-medium">{food.name}</h3>
            <p className="text-gray-500 mt-2">${food.price}</p>
            <div className="flex justify-center items-center">
              <button className="bg-indigo-500 text-white rounded-lg px-4 py-2 mt-5 hover:bg-indigo-600 transition-colors">
                Add to Cart
              </button>
              <span className="px-4 py-2 mt-5">
                <img src={image8} alt="wishlist" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
