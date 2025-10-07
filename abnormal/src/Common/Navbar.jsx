import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaMoon, FaSun } from "react-icons/fa";
import logo from "../assets/logo2.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [darkMode]);

  const navLinks = (
    <>
      <Link to="/" className="hover:text-red-500 transition">
        Home
      </Link>
      <Link to="/jobs" className="hover:text-red-500 transition">
        Jobs
      </Link>
      <Link to="/about" className="hover:text-red-500 transition">
        About Us
      </Link>
      <Link to="/contact" className="hover:text-red-500 transition">
        Contact Us
      </Link>
      <Link
        to="/register"
        className="uppercase font-semibold hover:text-red-500 transition"
      >
        Register
      </Link>
      <Link
        to="/signin"
        className="bg-black text-white px-4 py-1.5 rounded-md shadow hover:bg-gray-800 transition dark:bg-white dark:text-black"
      >
        SIGN IN
      </Link>
    </>
  );

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src={logo}
              alt="Aboriginal Career Logo"
              className="h-19 w-auto max-w-[250px]"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-gray-700 font-medium dark:text-white">
          {navLinks}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl hover:text-yellow-500 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile Hamburger + Dark Toggle */}
        <div className="md:hidden flex items-center gap-3 text-gray-800 dark:text-white">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl hover:text-yellow-500 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden px-6 pt-4 pb-6 bg-white dark:bg-gray-900 shadow-md space-y-4 transition-all duration-300 ease-in-out ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-4 text-gray-700 dark:text-white font-medium">
          {navLinks}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
