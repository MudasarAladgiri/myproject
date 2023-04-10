import React from "react";
import image from "./assets/Toy/toy1.png";
import image2 from "./assets/Toy/toy2.png";
import image3 from "./assets/Toy/toy3.png";
import image4 from "./assets/Toy/toy4.png";
import image5 from "./assets/Toy/toy1.png";
import image6 from "./assets/Toy/toy2.png";
// search
import image7 from "./assets/icon/icon1.png";
import image8 from "./assets/icon/icon13.png";

// import React, { useEffect, useState } from "react";
const Toys = () => {
  // const [pettoys, setPettoys] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((data) => setPettoys(data))
  //     .catch((error) => console.error(error));
  // }, []);
  const pettoys = [
    {
      name: "Dog Toy Bone",
      image: image,
      price: 25.99,
    },
    {
      name: "Toy giraffe",
      image: image2,
      price: 19.99,
    },
    {
      name: " Dog Toy KONG ",
      image: image3,
      price: 27.99,
    },
    {
      name: "Turkey & Pea Stew",
      image: image4,
      price: 21.99,
    },
    {
      name: "Dog Toy Bone",
      image: image5,
      price: 25.99,
    },
    {
      name: "Toy giraffe",
      image: image6,
      price: 19.99,
    },
    {
      name: "Salmon & Sweet Potato Formula",
      image: image4,
      price: 27.99,
    },
    {
      name: "Dog Toy KONG",
      image: image3,
      price: 21.99,
    },
  ];
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto my-15">
        {/* Search */}
        <div className="flex justify-between items-center mb-5 px-20">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="py-2 sm:px-8 lg:px-96 md:px-56  w-full rounded-md bg-gray-100"
            />
            <span className="absolute top-1/2 right-3 transform -translate-y-1/2">
              <img src={image7} alt="" />
            </span>
          </div>
        </div>
        <h2 className="text-3xl font-semibold mb-5">Pet Toys</h2>

        {/* search ends */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pettoys.map((toy, index) => (
            <div
              key={index}
              className="bg-white border-2 border-black rounded-lg shadow p-5 flex flex-col justify-center items-center"
            >
              <img
                src={toy.image}
                alt={toy.name}
                className="w-48 h-48 object-cover  mb-5"
              />
              <h3 className="text-lg font-medium">{toy.name}</h3>
              <p className="text-gray-500 mt-2">${toy.price}</p>

              {/* <button className=" bg-indigo-500 text-white rounded-lg px-4 py-2 mt-5 hover:bg-indigo-600 transition-colors">
                  Add to Cart{" "}
                </button> */}

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
    </div>
  );
};

export default Toys;
