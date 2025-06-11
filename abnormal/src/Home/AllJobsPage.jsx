import React, { useState } from "react";

const dummyJobs = Array.from({ length: 50 }, (_, i) => ({
  title: `Job Position ${i + 1}`,
  type: "Full Time",
  posted: `${Math.floor(Math.random() * 24)} hours ago`,
}));

const AllJobsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [jobs, setJobs] = useState(dummyJobs);

  const handleSort = () => {
    const sorted = [...jobs].sort((a, b) =>
      parseInt(a.posted) - parseInt(b.posted)
    );
    setJobs(sorted);
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

      <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
        <input
          type="text"
          placeholder="Job title, NOC, ..."
          className="border rounded-md p-2 w-full sm:w-1/2"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border rounded-md p-2 w-full sm:w-1/4"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Category</option>
          <option value="admin">Admin</option>
          <option value="driver">Driver</option>
          <option value="retail">Retail</option>
        </select>
        <button
          onClick={handleSort}
          className="bg-gray-500 text-white px-4 py-2 rounded-md shadow"
        >
          Sort by Date
        </button>
      </div>

      <div className="space-y-4">
        {filteredJobs.map((job, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow p-4 flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold text-lg">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.type}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400 mb-2">{job.posted}</p>
              <button className="bg-gray-700 text-white px-4 py-1 rounded-md">
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllJobsPage;
