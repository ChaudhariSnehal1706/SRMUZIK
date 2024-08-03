import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/image/White-SR-Logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <Link to="/">
        <div className="flex items-center flex-shrink-0 text-white mr-6 hover:cursor-pointer">
          <img src={Logo} alt="SR MUZIK" className="h-12" />
          <span class="font-semibold text-xl tracking-tight mt-5">MUZIK</span>
        </div>
      </Link>
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={`w-full ${
          menuOpen ? "block" : "hidden"
        } mr-24 lg:flex lg:items-center lg:w-auto`}>
        <div className="text-sm lg:flex-grow">
          <b>
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-900 hover:cursor-pointer mr-8">
              Home
            </Link>
          </b>
          <b>
            <Link
              to="/playlist"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-900 hover:cursor-pointer mr-8">
              PlayList
            </Link>
          </b>
          <b>
            <Link
              to="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-900 hover:cursor-pointer mr-8">
              About
            </Link>
          </b>
          <b>
            <Link
              to="/contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-900 hover:cursor-pointer mr-8">
              Contact
            </Link>
          </b>
        </div>
      </div>
    </nav>
  );
}

export default Header;
