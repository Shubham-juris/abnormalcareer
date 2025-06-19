import React, { useState } from "react";
import { Link } from "react-router-dom";

// Use real timestamps for sorting
const dummyJobs = [
  {
    id: "cashier",
    title: "Cashier",
    type: "Full Time",
    posted: new Date("2025-06-19T07:00:00Z"), // 2 hours ago
  },
  {
    id: "warehouse-supervisor",
    title: "Warehouse Supervisor (12013)",
    type: "Full Time",
    posted: new Date("2025-06-19T04:00:00Z"), // 5 hours ago
  },
  {
    id: "office-admin",
    title: "Office Administrative Assistant (13110)",
    type: "Full Time",
    posted: new Date("2025-06-18T23:00:00Z"), // 10 hours ago
  },
  {
    id: "delivery-driver",
    title: "Delivery Truck Driver (NOC 75201)",
    type: "Full Time",
    posted: new Date("2025-06-18T21:00:00Z"), // 12 hours ago
  },
  {
    id: "sales-supervisor",
    title: "Sales Supervisor - Retail (NOC 62010)",
    type: "Full Time",
    posted: new Date("2025-06-18T18:00:00Z"), // 15 hours ago
  },
  {
    id: "construction-labourer",
    title: "Construction Labourer - CLP Services Ltd.",
    type: "Full Time",
    posted: new Date("2025-06-18T08:00:00Z"), // 1 day ago
  },
];

const AllJobsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobs, setJobs] = useState(dummyJobs);

  const handleSortByDate = () => {
    const sorted = [...jobs].sort((a, b) => b.posted - a.posted);
    setJobs(sorted);
  };

  const formatTimeAgo = (date) => {
    const now = new Date();
    const diff = Math.floor((now - date) / (1000 * 60)); // difference in minutes

    if (diff < 60) return `${diff} minutes ago`;
    if (diff < 1440) return `${Math.floor(diff / 60)} hours ago`;
    return `${Math.floor(diff / 1440)} days ago`;
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">Popular Jobs</h2>
      <p className="text-center text-gray-500 mb-6">
        Search all the open positions on the web. Get your own personalized salary estimate. <br />
        Read reviews on over 30000+ companies worldwide.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search jobs..."
          className="border rounded-md p-2 w-full sm:w-1/2"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSortByDate}
          className="bg-gray-700 text-white px-4 py-2 rounded-md"
        >
          Sort by Date
        </button>
      </div>

      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg shadow p-4 flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold text-lg">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.type}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400 mb-2">{formatTimeAgo(job.posted)}</p>
              <Link to={`/job/${job.id}`}>
                <button className="bg-gray-700 text-white px-4 py-1 rounded-md">
                  Apply
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllJobsPage;
