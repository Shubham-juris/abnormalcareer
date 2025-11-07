import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaMoon, FaSun } from "react-icons/fa";
import logo from "../assets/logo2.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `transition hover:text-blue-500 ${
            isActive ? "text-blue-600 font-semibold" : "text-gray-700 dark:text-white"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/jobs"
        className={({ isActive }) =>
          `transition hover:text-blue-500 ${
            isActive ? "text-blue-600 font-semibold" : "text-gray-700 dark:text-white"
          }`
        }
      >
        Jobs
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `transition hover:text-blue-500 ${
            isActive ? "text-blue-600 font-semibold" : "text-gray-700 dark:text-white"
          }`
        }
      >
        About Us
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `transition hover:text-blue-500 ${
            isActive ? "text-blue-600 font-semibold" : "text-gray-700 dark:text-white"
          }`
        }
      >
        Contact Us
      </NavLink>

      <NavLink
        to="/register"
        className={({ isActive }) =>
          `uppercase font-semibold transition hover:text-blue-500 ${
            isActive ? "text-blue-600" : "text-gray-700 dark:text-white"
          }`
        }
      >
        Register
      </NavLink>

      <NavLink
        to="/signin"
        className={({ isActive }) =>
          `px-4 py-1.5 rounded-md shadow transition ${
            isActive
              ? "bg-blue-600 text-white"
              : "bg-black text-white hover:bg-blue-700 dark:bg-white dark:text-black"
          }`
        }
      >
        SIGN IN
      </NavLink>
    </>
  );

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <NavLink to="/">
            <img
              src={logo}
              alt="Aboriginal Career Logo"
              className="h-19 w-auto max-w-[250px]"
            />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center font-medium">
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
        <div className="flex flex-col gap-4 font-medium">{navLinks}</div>
      </div>
    </nav>
  );
};

export default Navbar;
