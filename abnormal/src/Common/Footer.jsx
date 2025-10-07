import React from 'react';
import logo from '../assets/logo2.png'; 
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-zinc-900 text-gray-800 dark:text-gray-300 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Aboriginal Career" className="h-10" />
        </div>

        {/* Right: Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="/about" className="hover:text-blue-600 transition duration-300">About Us</a>
          <a href="/contact" className="hover:text-blue-600 transition duration-300">Contact Us</a>
        </div>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 text-center text-sm py-4 px-4">
        <p className="mb-2">
          ©2025 Career Club.  All Rights Reserved
        </p>
       
      </div>
    </footer>
  );
};

export default Footer;

