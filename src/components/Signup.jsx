import React from "react";
import { Link } from "react-router-dom";

import image1 from "./assets/car/car2.png";
const Signup = () => {
  return (
    <div className="bg-white py-10 px-6 md:px-20 lg:px-32">
      <div className="flex justify-between">
        <div className="w-1/3 pr-10">
          {/* <div className="flex items-center  mb-6">
            <img
              src={image1}
              alt="Profile"
              className="w-20 h-20 rounded-full mr-4"
            />
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold mt-4">John Doe</h2>
              <p className="text-gray-500">johndoe@email.com</p>
            </div>
          </div> */}
          <div class="flex flex-col sm:flex-row items-center mb-6">
            <img
              src={image1}
              alt="Profile"
              class="w-20 h-20 rounded-full mr-4"
            />
            <div class="flex flex-col">
              <h2 class="text-xl font-semibold mt-4 sm:mt-0 ml-7">John Doe</h2>
              <p class="text-gray-500 ml-7">johndoe@email.com</p>
            </div>
          </div>
          <nav className="mb-10 ">
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-700 hover:text-indigo-500 transition-colors"
                >
                  Account Settings
                </a>
              </li>
              <li className="mb-3">
                <Link to="/Login">
                  <a
                    href="#"
                    className="text-gray-700 hover:text-indigo-500 transition-colors"
                  >
                    Login
                  </a>
                </Link>
              </li>
              <li className="mb-3">
                <a
                  href="#"
                  className="text-gray-700 hover:text-indigo-500 transition-colors"
                >
                  Order Tracking
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#"
                  className="text-gray-700 hover:text-indigo-500 transition-colors"
                >
                  Place Your Order
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-2/3 ml-24">
          <h2 className="text-2xl font-semibold mb-10">Personal Information</h2>
          <div className="mb-6">
            {/* username */}
            <form action="">
              <div class="mb-6">
                <label for="Username" class="block text-lg font-semibold mb-3">
                  Full Name
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="border rounded-md px-3 py-2 w-full"
                  value="petsprism"
                />
              </div>
            </form>
            {/* gender */}
            <h3 className="text-lg font-semibold mb-3">Gender</h3>
            <label htmlFor="male" className="mr-4">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                className="mr-2"
              />
              Male
            </label>
            <label htmlFor="female" className="mr-4">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className="mr-2"
              />
              Female
            </label>
            <label htmlFor="other">
              <input
                type="radio"
                id="other"
                name="gender"
                value="female"
                className="mr-2"
              />
              Other
            </label>
          </div>

          {/* email */}
          <form action="">
            <div class="mb-6">
              <label for="email" class="block text-lg font-semibold mb-3">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="border rounded-md px-3 py-2 w-full"
                value="petsprism@email.com"
              />
            </div>

            {/* mobile */}

            <div class="mb-6">
              <label for="phone" class="block text-lg font-semibold mb-3">
                Mobile Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                class="border rounded-md px-3 py-2 w-full"
                value="93643488287324"
              />
            </div>

            {/* address */}
            <div class="mb-6">
              <label for="address" class="block text-lg font-semibold mb-3">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                class="border rounded-md px-3 py-2 w-full"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
