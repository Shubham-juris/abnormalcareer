
import React from "react";
import { FaPhoneAlt, FaHourglassHalf } from "react-icons/fa";
import { PiAtomBold } from "react-icons/pi";
import { PiUsersThreeBold } from "react-icons/pi";
import { motion } from "framer-motion";
import BestCompanies from "./BestCompanies";

const features = [
  {
    icon: <FaPhoneAlt size={28} />,
    title: "24/7 Support",
    desc: "Get assistance and answers to your questions anytime, ensuring newcomers have continuous support throughout their job search journey",
  },
  {
    icon: <PiAtomBold size={32} />,
    title: "Tech & Startup Jobs",
    desc: "Easily find job listings specifically tailored to the technology and startup sectors, which are prominent in Canada's job market",
  },
  {
    icon: <PiUsersThreeBold size={32} />,
    title: "Quick & Easy",
    desc: "Streamlined user interface and intuitive design make the job search and application process quick and hassle-free for newcomers",
  },
  {
    icon: <FaHourglassHalf size={28} />,
    title: "Save Time",
    desc: "Efficiently match job seekers with suitable opportunities, saving them valuable time in their job search.",
  },
];

const Services = () => {
  return (

    
    <div>
        <div className="py-20 px-4 md:px-16 text-center bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-[#121a2f] mb-4">
        Here's why you'll love it
      </h2>
      <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-12">
        Search all the open positions on the web. Get your own personalized salary estimate. <br />
        Read reviews on over 300+ companies in Canada.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-[#f9f9fc] rounded-xl shadow-sm p-8 cursor-pointer hover:shadow-md transition"
          >
            <div className="mb-5 text-indigo-900">{item.icon}</div>
            <h3 className="font-semibold text-lg text-[#121a2f] mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
    
    </div>
  );
};

export default Services;

