import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

const jobs = [
  {
    title: "Kitchen Helper",
    location: "4 Hochelaga St W, Moose Jaw, SK, S6H 2G1",
    type: "Full Time",
    posted: "a year ago",
  },
  {
    title: "Warehouse Supervisor (12013)",
    location: "",
    type: "Full Time",
    posted: "a year ago",
  },
  {
    title: "Office Administrative Assistant (13110)",
    location: "",
    type: "Full Time",
    posted: "a year ago",
  },
  {
    title: "Delivery Truck Driver (NOC 75201)",
    location: "",
    type: "Full Time",
    posted: "a year ago",
  },
  {
    title: "Sales Supervisor - Retail (NOC 62010)",
    location: "",
    type: "Full Time",
    posted: "a year ago",
  },
  {
    title: "Construction Labourer - CLP Services Ltd.",
    location: "",
    type: "Full Time",
    posted: "a year ago",
  },
];

const PopularJobs = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">Popular Jobs</h2>
      <p className="text-center text-gray-500 mb-10">
        Search all the open positions on the web. Get your own personalized salary estimate. <br />
        Read reviews on over 30000+ companies worldwide.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-5">
            <div className="text-sm text-gray-400 mb-1">{job.posted}</div>
            <div className="inline-block px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full mb-2">
              {job.type}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{job.title}</h3>
            {job.location && (
              <div className="text-sm text-gray-600 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-gray-400" />
                {job.location}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/jobs"
          className="text-gray-600 font-medium hover:underline"
        >
          See More Jobs →
        </Link>
      </div>
    </section>
  );
};

export default PopularJobs;
