import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      {/* LOGO */}
      <NavLink to="/">
        <nav class="bg-white top-0 w-full">
          <div class="flex justify-between h-16">
            <div class="flex justify-between h-16">
              <div class="flex-shrink-0 flex items-center">
                <span class="text-black font-extrabold text-2xl ml-6">
                  <NavLink to="Home">
                    Pets<span class="text-blue-400">Prism</span>
                  </NavLink>
                </span>
              </div>
              <div class="hidden md:block">
                <div class=" ml-96 mt-5 flex items-center space-x-20">
                  <NavLink to="Toys">
                    <a
                      href="#"
                      class="text-black hover:bg-orange-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Toys
                    </a>
                  </NavLink>
                  <NavLink to="Foods">
                    <a
                      href="#"
                      class="text-black hover:bg-orange-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Foods
                    </a>
                  </NavLink>
                  <NavLink to="Medicine">
                    <a
                      href="#"
                      class="text-black hover:bg-orange-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Medicine
                    </a>
                  </NavLink>

                  <NavLink to="About">
                    <a
                      href="#"
                      class="text-black hover:bg-orange-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                    >
                      About
                    </a>
                  </NavLink>
                  <NavLink to="Signup">
                    <a
                      href="#"
                      class="text-black hover:bg-orange-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Signup
                    </a>
                  </NavLink>
                </div>
              </div>

              <div class="-mr-2 flex md:hidden">
                <button
                  type="button"
                  class="bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                ></button>
              </div>
            </div>
          </div>

          <div class="md:hidden" id="mobile-menu">
            <div class="px-2 pt-3 pb-3 space-y-1 sm:px-3">
              <NavLink to="Toys">
                <a
                  href="#"
                  class="text-black hover:bg-orange-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Toys
                </a>
              </NavLink>
              <NavLink to="Foods">
                <a
                  href="#"
                  class="text-black hover:bg-orange-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Food
                </a>
              </NavLink>
              <NavLink to="Medicine">
                <a
                  href="#"
                  class="text-black hover:bg-orange-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Medicine
                </a>
              </NavLink>

              <NavLink to="About">
                <a
                  href="#"
                  class="text-black hover:bg-orange-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>
              </NavLink>
              <NavLink to="Signup">
                <a
                  href="#"
                  class="text-black hover:bg-orange-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  Signup
                </a>
              </NavLink>
            </div>
          </div>
        </nav>
      </NavLink>
    </header>
  );
};

export default Header;
