import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

// Added actual timestamps to enable sorting
const jobsData = [
  {
    title: "Kitchen Helper",
    location: "4 Hochelaga St W, Moose Jaw, SK, S6H 2G1",
    type: "Full Time",
    posted: "2024-06-10T09:00:00",
  },
  {
    title: "Warehouse Supervisor (12013)",
    location: "",
    type: "Full Time",
    posted: "2024-06-17T15:00:00",
  },
  {
    title: "Office Administrative Assistant (13110)",
    location: "",
    type: "Full Time",
    posted: "2024-06-12T12:00:00",
  },
  {
    title: "Delivery Truck Driver (NOC 75201)",
    location: "",
    type: "Full Time",
    posted: "2024-06-14T14:00:00",
  },
  {
    title: "Sales Supervisor - Retail (NOC 62010)",
    location: "",
    type: "Full Time",
    posted: "2024-06-18T10:30:00",
  },
  {
    title: "Construction Labourer - CLP Services Ltd.",
    location: "",
    type: "Full Time",
    posted: "2024-06-13T08:00:00",
  },
];

const PopularJobs = () => {
  const [jobs, setJobs] = useState(jobsData);

  const handleSortByDate = () => {
    const sortedJobs = [...jobs].sort(
      (a, b) => new Date(b.posted) - new Date(a.posted)
    );
    setJobs(sortedJobs);
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">Popular Jobs</h2>
      <p className="text-center text-gray-500 mb-6">
        Search all the open positions on the web. Get your own personalized salary estimate. <br />
        Read reviews on over 30000+ companies worldwide.
      </p>

      <div className="text-right mb-6">
        <button
          onClick={handleSortByDate}
          className="bg-gray-800 text-white px-4 py-2 rounded-md"
        >
          Sort by Date
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-5">
            <div className="text-sm text-gray-400 mb-1">
              Posted on {formatDate(job.posted)}
            </div>
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
