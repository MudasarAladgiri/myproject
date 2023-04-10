import React from "react";
import { NavLink } from "react-router-dom";

// icon
import image1 from "./assets/icon/icon9.png";
import image2 from "./assets/icon/icon10.png";
import image3 from "./assets/icon/icon11.png";
import image4 from "./assets/icon/icon12.png";

const Footer = () => {
  return (
    <footer class="bg-gray-100 py-24">
      <div class="container mx-auto flex flex-wrap pt-4 pb-6">
        <div class="w-full md:w-1/3 px-4">
          <h3 class="font-bold text-3xl text-black mb-3">
            Pets<span class="text-blue-400">Prism</span>
          </h3>
          <p class="text-gray-900 leading-loose">
            If you have any Question,Please Contact us At support@gmail.com
          </p>
          <div class="mt-4 flex space-x-4">
            <a
              href="https://www.facebook.com/"
              class=" text-gray-900 hover:text-orange-400 transition duration-300"
            >
              <img src={image1} alt="" />
            </a>
            <a
              href="https://twitter.com/login?lang=en"
              class=" text-gray-900 hover:text-orange-400 transition duration-300"
            >
              <img src={image2} alt="" />
            </a>
            <a
              href="https://www.instagram.com/"
              class=" text-gray-900 hover:text-orange-400 transition duration-300"
            >
              <img src={image3} alt="" />
            </a>
            <a
              href="https://www.google.com"
              class=" text-gray-900 hover:text-orange-400 transition duration-300"
            >
              <img src={image4} alt="" />
            </a>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-4">
          <h3 class="font-bold text-gray-500 mb-3">Services</h3>
          <ul class="list-none">
            <li class="mb-2">
              <a
                href="#"
                class="text-gray-900 hover:text-orange-400 transition duration-300"
              >
                Help & information
              </a>
            </li>
            <li class="mb-2">
              <NavLink to="About">
                {" "}
                <a
                  href="#"
                  class="text-gray-900 hover:text-orange-400 transition duration-300"
                >
                  About us
                </a>
              </NavLink>
            </li>
            <li class="mb-2">
              <a
                href="#"
                class="text-gray-900 hover:text-orange-400 transition duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li class="mb-2">
              <a
                href="#"
                class="text-gray-900 hover:text-orange-400 transition duration-300"
              >
                Terms & Condition
              </a>
            </li>
            <li class="mb-2">
              <a
                href="#"
                class="text-gray-900 hover:text-orange-400 transition duration-300"
              >
                Product Return
              </a>
            </li>
            <li class="mb-2">
              <a
                href="#"
                class="text-gray-900 hover:text-orange-400 transition duration-300"
              >
                Wholesale policy
              </a>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/3 px-4">
          <h3 class="font-bold text-gray-500 mb-3">Stay Connected</h3>
          <p class="text-gray-900 leading-loose">
            Get the latest news and updates from our store by subscribing to our
            newsletter.
          </p>
          <div class="mt-4">
            <form>
              <div class="flex flex-wrap mb-2">
                <div class="w-full md:w-2/3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    class="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-400 focus:outline-none focus:bg-gray-700 focus:text-gray-100"
                  />
                </div>
                <div class="w-full md:w-1/3 mt-2 md:mt-0">
                  <button
                    type="submit"
                    class="w-full px-4 py-2 rounded-md bg-orange-500 text-gray-100 hover:bg-orange-600 transition duration-300 focus:outline-none focus:shadow-outline-blue"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
            <p class="text-sm text-gray-700 mt-4">We respect your privacy</p>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-800">
        <div class="container mx-auto px-4">
          <div class="text-center text-gray-500 py-6">
            © 2023 Pets E-commerce. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
