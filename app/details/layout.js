"use client";
import { useState } from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

export default function NavbarDet({children}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
<div>
<nav className="bg-gray-100 opacity-80 p-2  border-b-4 border-foreground" >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/img/logo3.png" alt="Logo" width={150} height={50} />
        
        </div>
       

        {/* Toggler for mobile */}
        <button className="text-black md:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Menu Items (hidden on mobile, shown on desktop) */}
        <div className="hidden md:flex space-x-6 items-center">
          <a
            href="/"
            className="text-white  font-semibold bg-foreground px-3 py-2 inline-flex items-center hover:transition-all ease-out duration-300 hover:text-white"
          >
            Home
          </a>
          
  
          <a
  href="#"
  className="text-white px-3 py-2 inline-flex items-center hover:transition-all ease-out duration-300"
>
  <button
    className="py-4 px-1 relative border-2 border-transparent text-gray-600 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
    aria-label="Cart"
  >
    <svg
      className="h-7 w-7"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
    </svg>
    <span className="absolute inset-0 object-right-top -mr-6">
      <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-foreground text-white">
        6
      </div>
    </span>
  </button>
</a>

<a
            href="#"
            className="text-black text-2xl px-3 py-2 inline-flex items-center hover:text-foreground focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out "
          >
            <FaRegHeart/>

          </a>

        </div>
      </div>

      {/* Mobile Menu (hidden by default, toggled on mobile) */}
      {isMenuOpen && (
        <div className="md:hidden ">
          <a href="/" className="block text-black hover:bg-foreground px-4 py-2  items-center hover:transition-all ease-out duration-300 mt-5 hover:text-white">
            Home
          </a>
         
          
          <a
  href="#"
  className="text-white px-3  inline-flex items-center hover:transition-all ease-out duration-300 "
>
  <button
    className="py-4 px-1 relative border-2 border-transparent text-gray-600 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
    aria-label="Cart"
  >
    <svg
      className="h-7 w-7 "
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
    </svg>
    <span className="absolute inset-0 object-right-top -mr-6">
      <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-foreground text-white">
        6
      </div>
    </span>
  </button>
</a>

<a href="#" className="block text-black hover:bg-foreground px-4 py-2  items-center hover:transition-all ease-out duration-300 hover:text-white">
            <FaRegHeart className="text-2xl"/>
          </a>

        </div>
      )}
    </nav>
        {children}
</div>
  );
}
