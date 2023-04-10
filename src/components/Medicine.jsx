import React from "react";
import image1 from "./assets/Medicine/medicine1.png";
import image2 from "./assets/Medicine/medicine2.png";
import image3 from "./assets/Medicine/medicine3.png";
import image4 from "./assets/Medicine/medicine1.png";
import image5 from "./assets/Medicine/medicine2.png";
import image6 from "./assets/Medicine/medicine3.png";
import image7 from "./assets/Medicine/medicine1.png";
import image8 from "./assets/Medicine/medicine2.png";
import image9 from "./assets/icon/icon1.png";
import image10 from "./assets/icon/icon13.png";

const Medicine = () => {
  const petmedicine = [
    {
      name: "Dog Toy Bone",
      image: image1,
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
      image: image7,
      price: 27.99,
    },
    {
      name: "Dog Toy KONG",
      image: image8,
      price: 21.99,
    },
  ];
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto my-15">
        <div className="flex justify-between items-center mb-5 px-20">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="py-2  sm:px-8 lg:px-96 md:px-56  w-full rounded-md bg-gray-100"
            />
            <span className="absolute top-1/2 right-3 transform -translate-y-1/2">
              <img src={image9} alt="" />
            </span>
          </div>
        </div>
        <h2 className="text-3xl font-semibold mb-5">Pet Toys</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {petmedicine.map((medicine, index) => (
            <div
              key={index}
              className="bg-white border-2 border-black rounded-lg shadow p-5 flex flex-col justify-center items-center"
            >
              <img
                src={medicine.image}
                alt={medicine.name}
                // rounded-full if you want you cant chnage into circle
                className="w-48 h-48 object-cover mb-5"
              />
              <h3 className="text-lg font-medium">{medicine.name}</h3>
              <p className="text-gray-500 mt-2">${medicine.price}</p>
              <div className="flex justify-center items-center">
                <button className="bg-indigo-500 text-white rounded-lg px-4 py-2 mt-5 hover:bg-indigo-600 transition-colors">
                  Add to Cart
                </button>
                <span className="px-4 py-2 mt-5">
                  <img src={image10} alt="wishlist" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Medicine;
