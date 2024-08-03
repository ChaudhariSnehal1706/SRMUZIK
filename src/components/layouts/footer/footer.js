import React from "react";
import Logo from "../../../assets/image/White-SR-Logo.png";
import { Link } from "react-router-dom";

function footer() {
  return (
    <footer class="bg-gray-800 text-white py-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between">
          <div class="mb-4 md:mb-0 hover:cursor-pointer">
            <Link to="/">
              <img src={Logo} alt="SR MUZIK" className="h-12" />
              <span class="font-semibold text-xl tracking-tight ml-1">
                MUZIK
              </span>
            </Link>
          </div>
          <div class="flex">
            <ul class="flex space-x-4">
              <li>
                <Link to="/">
                  <b href="#" class="hover:text-gray-400 hover:cursor-pointer">
                    Home
                  </b>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <b href="#" class="hover:text-gray-400 hover:cursor-pointer">
                    About
                  </b>
                </Link>
              </li>
              <li>
                <Link to="/playlist">
                  <b href="#" class="hover:text-gray-400 hover:cursor-pointer">
                    Services
                  </b>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <b href="#" class="hover:text-gray-400 hover:cursor-pointer">
                    Contact
                  </b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr class="my-4 border-gray-700" />
        <p class="text-sm text-center">
          &copy; 2023 SR MUZIK. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default footer;
