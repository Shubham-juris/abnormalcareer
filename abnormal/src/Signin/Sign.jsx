import React from "react";
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";
import bg from "../assets/bg.jpg"; // adjust path if needed

const Sign = () => {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-start px-4 md:px-16 relative overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        fontFamily: "Roboto, sans-serif",
        color: "rgb(22, 28, 45)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 bg-white p-8 md:p-10 rounded-2xl shadow-2xl max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Sign In</h2>

        <div className="flex justify-center gap-6 mb-8">
          <button className="bg-white p-3 rounded-full shadow-md hover:scale-105 transition">
            <FaGoogle size={20} />
          </button>
          <button className="bg-white p-3 rounded-full shadow-md hover:scale-105 transition">
            <FaApple size={20} />
          </button>
          <button className="bg-white p-3 rounded-full shadow-md hover:scale-105 transition">
            <FaFacebookF size={20} />
          </button>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-800 font-semibold mb-1">
              Email Address:
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-1">
              Password:
            </label>
            <input
              type="password"
              placeholder="Password:"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="flex items-center text-sm">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-gray-500">
              I{" "}
              <span className="text-indigo-600 font-medium cursor-pointer">
                Accept
              </span>{" "}
              Terms And Condition
            </label>
          </div>

          <button className="w-full bg-[#504b71] text-white py-2 rounded-md font-semibold hover:bg-[#3f3b5d] transition shadow-md">
            REGISTER
          </button>
        </form>

       
      </div>
    </div>
  );
};

export default Sign;
