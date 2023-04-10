// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useState, useEffect } from "react";
import image from "./assets/dog1.jpg";
import image2 from "./assets/cat1.jpg";
import image3 from "./assets/dog2.jpg";
import image4 from "./assets/cats_group.jpg";

// pets food
import image5 from "./assets/Food/product_01.jpg";
import image6 from "./assets/Food/product_02.jpg";
import image7 from "./assets/Food/product_03.jpg";
import image8 from "./assets/Food/product_04.jpg";

// pets toys
import image9 from "./assets/Toy/toy1.png";
import image10 from "./assets/Toy/toy2.png";
import image11 from "./assets/Toy/toy3.png";
import image12 from "./assets/Toy/toy4.png";

//pet medicine
import image13 from "./assets/Medicine/medicine1.png";
import image14 from "./assets/Medicine/medicine2.png";
import image15 from "./assets/Medicine/medicine3.png";
import image16 from "./assets/Medicine/medicine1.png";

// carousel
import image17 from "./assets/car/car1.png";
import image18 from "./assets/car/car2.png";
import image19 from "./assets/car/car3.png";
import image20 from "./assets/car/car4.png";
import image21 from "./assets/car/car5.png";
import image22 from "./assets/car/car6.png";

// lady
import image23 from "./assets/lady/lady.png";

// wishlist
import image24 from "./assets/icon/icon13.png";

const Home = () => {
  // carousel
  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    centerPadding: "50px",
  };
  // pets medicine
  const petmedicine = [
    {
      name: "Dog Toy Bone",
      image: image13,
      price: 25.99,
    },
    {
      name: "Toy giraffe",
      image: image14,
      price: 19.99,
    },
    {
      name: " Dog Toy KONG ",
      image: image15,
      price: 27.99,
    },
    {
      name: "Turkey & Pea Stew",
      image: image16,
      price: 21.99,
    },
  ];
  //pets toys
  const pettoys = [
    {
      name: "Dog Toy Bone",
      image: image9,
      price: 25.99,
    },
    {
      name: "Toy giraffe",
      image: image10,
      price: 19.99,
    },
    {
      name: " Dog Toy KONG ",
      image: image11,
      price: 27.99,
    },
    {
      name: "Turkey & Pea Stew",
      image: image12,
      price: 21.99,
    },
  ];
  // pets food
  const petFoods = [
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
      image: image7,
      price: 27.99,
    },
    {
      name: "Turkey & Pea Stew",
      image: image8,
      price: 21.99,
    },
  ];

  // randomly changing image
  const [heroImage, setHeroImage] = useState("");

  useEffect(() => {
    const images = [image, image2, image3, image4];

    const randomIndex = Math.floor(Math.random() * images.length);
    setHeroImage(images[randomIndex]);
  }, []);
  return (
    // hero section
    <div class="bg-white">
      <div class="container mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between">
        <div class="md:w-1/2 lg:w-2/5 mb-8 md:mb-0">
          <h1 class="text-black font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            Nourish with Peak Nutrition
          </h1>
          <p class="text-gray-900 text-xl md:text-2xl mb-6">
            OriGen Has the protein your pets need to thrive{" "}
          </p>
          <a
            href="#"
            class=" bg-orange-500 text-gray-900 py-3 px-8 rounded-full font-bold hover:bg-gray-300 transition duration-300"
          >
            Shop Now
          </a>
        </div>
        <div class="md:w-1/2 lg:w-3/5">
          <img src={heroImage} alt="Shopping" class="rounded-lg shadow-lg" />
        </div>
      </div>
      <div class="bg-white py-10">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-semibold mb-20 text-center ">
            Our Products
          </h2>
          <h2 className="text-3xl font-semibold mb-3">Foods</h2>
          <hr class="border-1 border-black "></hr>

          {/* pets Food */}
          <div className="container mx-auto my-24 bg-white">
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
                      <img src={image24} alt="wishlist" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* pets food end */}

          {/* pets toys */}
          <h2 className="text-3xl font-semibold mb-3">Toys</h2>
          <hr class="border-1 border-black "></hr>
          <div className="bg-white py-20">
            <div className="container mx-auto my-15">
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
                    <div className="flex justify-center items-center">
                      <button className="bg-indigo-500 text-white rounded-lg px-4 py-2 mt-5 hover:bg-indigo-600 transition-colors">
                        Add to Cart
                      </button>
                      <span className="px-4 py-2 mt-5">
                        <img src={image24} alt="wishlist" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* pets toys end */}

          {/* pets medicine */}
          <h2 className="text-3xl font-semibold mb-3">Medicine</h2>
          <hr class="border-1 border-black "></hr>
          <div className="bg-white py-20">
            <div className="container mx-auto my-15">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {petmedicine.map((medicine, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-black rounded-lg shadow p-5 flex flex-col justify-center items-center"
                  >
                    <img
                      src={medicine.image}
                      alt={medicine.name}
                      className="w-48 h-48 object-cover  mb-5"
                    />
                    <h3 className="text-lg font-medium">{medicine.name}</h3>
                    <p className="text-gray-500 mt-2">${medicine.price}</p>
                    <div className="flex justify-center items-center">
                      <button className="bg-indigo-500 text-white rounded-lg px-4 py-2 mt-5 hover:bg-indigo-600 transition-colors">
                        Add to Cart
                      </button>
                      <span className="px-4 py-2 mt-5">
                        <img src={image24} alt="wishlist" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* pets medicine */}

          {/* carousel */}
          <h2 className="text-3xl font-semibold mb-20 text-center">
            Featured brand
          </h2>
          <Slider {...settings}>
            <div>
              <img src={image17} alt="image1" style={{ margin: "0 auto" }} />
            </div>
            <div>
              <img src={image18} alt="image2" style={{ margin: "0 auto" }} />
            </div>
            <div>
              <img src={image19} alt="image3" style={{ margin: "0 auto" }} />
            </div>
            <div>
              <img src={image20} alt="image3" style={{ margin: "0 auto" }} />
            </div>
            <div>
              <img src={image21} alt="image3" style={{ margin: "0 auto" }} />
            </div>
            <div>
              <img src={image22} alt="image3" style={{ margin: "0 auto" }} />
            </div>
          </Slider>

          {/* image and contact us form */}
          <div class="flex flex-col md:flex-row bg-white py-12  mt-28">
            <div class="md:w-1/2">
              <img src={image23} alt="Random" />
            </div>
            <div class="md:w-1/2 bg-white p-6">
              <h2 class="text-3xl font-semibold mb-5 text-center md:text-left">
                Contact Us
              </h2>
              <form class="space-y-6">
                <div>
                  <label
                    class="block bg text-gray-700 font-bold mb-2"
                    for="name"
                  >
                    Name
                  </label>
                  <input
                    class="w-full bg-gray-100 p-2 rounded-lg focus:outline-none focus:border-blue-400"
                    id="name"
                    type="text"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label class="block text-gray-700 font-bold mb-2" for="email">
                    Email
                  </label>
                  <input
                    class="w-full bg-gray-100 p-2 rounded-lg focus:outline-none focus:border-blue-400"
                    id="email"
                    type="email"
                    placeholder="johndoe@example.com"
                  />
                </div>
                <div>
                  <label
                    class="block text-gray-700 font-bold mb-2"
                    for="question"
                  >
                    Ask a question
                  </label>
                  <textarea
                    class="w-full p-2 bg-gray-100 rounded-lg focus:outline-none focus:border-blue-400"
                    id="question"
                    rows="4"
                    placeholder="Enter your question here..."
                  ></textarea>
                </div>
                <div>
                  <button
                    class="bg-blue-500 text-white py-2 lg:px-56 sm:px-4 md:px-24 rounded-full font-bold hover:bg-blue-700 transition duration-300"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* image and contact us form end */}
        </div>
      </div>
    </div>
  );
};

export default Home;
