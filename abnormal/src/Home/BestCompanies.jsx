import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import officeImg1 from "../assets/ab03.jpg"; // taller image
import officeImg2 from "../assets/ab04.jpg"; // smaller image

const companies = [
  { name: "NEO SOFT CANADA INC.", location: "Toronto, Ontario" },
  { name: "0966976 B.C. Ltd DBA The Drake Restaurant", location: "Victoria" },
  { name: "TRILLIUM TRUCK REPAIRS INC.", location: "Mississauga, ON" },
  { name: "NAMCO", location: "Edmonton, AB T6E 6N9" },
  { name: "H1 CONTRACTING INC.", location: "Brampton, ON" },
  { name: "HAKIM OPTICAL LABORATORY LIMITED", location: "Scarborough, ON" },
];

const BestCompanies = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-start">
      {/* Left Side */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Find Best Companies.</h2>
        <p className="text-gray-500 mb-6">
          Search all the open positions on the web. Get your own personalized salary estimate.
          Read reviews on over 300+ companies in Canada.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg text-gray-900">{company.name}</h3>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <FaMapMarkerAlt className="mr-2 text-gray-400" />
                {company.location}
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/companies"
          className="mt-6 inline-block text-gray-600 font-medium hover:underline"
        >
          See More Companies →
        </Link>
      </div>

      {/* Right Side - Overlapping Image Layout */}
      <div className="relative h-[500px] w-full">
        {/* Background (larger image) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl shadow-lg">
          <img
            src={officeImg1}
            alt="Office"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Foreground (smaller image, bottom-left) */}
        <div className="absolute bottom-4 left-4 w-3/5 h-[200px] overflow-hidden rounded-2xl shadow-xl border-4 border-white">
          <img
            src={officeImg2}
            alt="Workspace"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BestCompanies;
