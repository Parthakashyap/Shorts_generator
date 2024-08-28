"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between flex-wrap bg-opacity-50 backdrop-blur-md p-6 shadow-lg border border-transparent font-roboto">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-bold text-2xl tracking-tight">Ai Video</span>
      </div>
      <div className="block md:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded-full text-white border-transparent hover:border-teal-400 hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="fill-current h-5 w-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? `block` : `hidden`
        } w-full block flex-grow md:flex md:items-center md:w-auto`}
      >
        <div className="text-md md:flex-grow flex items-center justify-center gap-4">
          <a
            href="#solutions"
            className="block mt-4 md:inline-block font-semibold md:mt-0 text-white hover:text-teal-400 mx-2 transition-transform duration-300 transform hover:scale-105"
          >
            ClipAnything
          </a>
          <a
            href="#solutions"
            className="block mt-4 md:inline-block font-semibold md:mt-0 text-white hover:text-teal-400 mx-2 transition-transform duration-300 transform hover:scale-105"
          >
            Solutions
          </a>
          <a
            href="#resources"
            className="block mt-4 md:inline-block font-semibold md:mt-0 text-white hover:text-teal-400 mx-2 transition-transform duration-300 transform hover:scale-105"
          >
            Resources
          </a>
          <a
            href="#pricing"
            className="block mt-4 md:inline-block font-semibold md:mt-0 text-white hover:text-teal-400 mx-2 transition-transform duration-300 transform hover:scale-105"
          >
            Pricing
          </a>
        </div>
        <div className="flex flex-col md:flex-row md:ml-auto">
          <a
            href="#signin"
            className="inline-block text-sm px-4 py-2 leading-none border rounded-full text-white border-transparent hover:border-teal-400 hover:text-teal-500 hover:bg-white mt-4 md:mt-0 md:mr-4 transition-transform duration-300 transform hover:scale-105"
          >
            Sign In
          </a>
          <a
            href="#login"
            className="inline-block text-sm px-4 py-2 leading-none border rounded-full text-white border-transparent hover:border-teal-400 hover:text-teal-500 hover:bg-white mt-4 md:mt-0 transition-transform duration-300 transform hover:scale-105"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
