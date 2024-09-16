"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black relative z-[999999999] bg-opacity-80 backdrop-filter backdrop-blur-lg text-gray-300 border-b border-teal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-white text-transparent bg-clip-text">Ai Video</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {['ClipAnything', 'Solutions', 'Resources', 'Pricing'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-teal-400 transition duration-300 ease-in-out transform hover:-translate-y-1"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:flex gap-4">
            <button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              Sign Up
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-teal-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['ClipAnything', 'Solutions', 'Resources', 'Pricing'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-teal-400 transition duration-300 ease-in-out"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-teal-900 flex gap-4 px-4">
            <button className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-teal-500 to-blue-500 text-white transition duration-300 ease-in-out transform hover:scale-105">
              Sign In
            </button>
            <button className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-teal-500 to-blue-500 text-white transition duration-300 ease-in-out transform hover:scale-105">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;