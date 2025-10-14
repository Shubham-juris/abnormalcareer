import React, { useState, useEffect } from "react";
import jobsData from "../data/Jobs.json";

const AllJobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // ✅ Ensure posted date is formatted properly
    const formattedJobs = jobsData.map((job) => ({
      ...job,
      posted: job.posted ? new Date(job.posted) : new Date(),
    }));
    setJobs(formattedJobs);
  }, []);

  // ✅ Safe filter using optional chaining
  const filteredJobs = jobs.filter((job) => {
    const title = job.title || job.job_title || job.position || "";
    const company = job.company || "";
    const location = job.location || "";
    const search = searchTerm.toLowerCase();

    return (
      title.toLowerCase().includes(search) ||
      company.toLowerCase().includes(search) ||
      location.toLowerCase().includes(search)
    );
  });

  return (
    <section className="p-8 max-w-7xl mx-auto">
      <h1 className="text-center text-2xl font-bold mb-6">WE ARE HIRING!</h1>

      {/* 🔍 Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search job title, company or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 border rounded-full px-4 py-2 shadow focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Job List */}
      <div className="flex flex-col gap-16">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div
              key={`${job.id || job.title || job.position}_${index}`}
              className="grid md:grid-cols-2 gap-10 border-b pb-10"
            >
              {/* LEFT SIDE */}
              <div>
                <h2 className="text-3xl font-bold text-blue-700 mb-2">
                  {job.title || job.job_title || job.position}
                </h2>
                <p className="text-gray-600 mb-4">{job.company}</p>

                <h3 className="font-semibold text-lg">Job Details</h3>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                  <li>Job type: {job.type || job.job_type}</li>
                  <li>Location: {job.location}</li>
                  <li>Pay: {job.salary || "$37.00 per hour"}</li>
                  <li>Hours: {job.hours || "40 per week"}</li>
                </ul>

                <h3 className="font-semibold text-lg">Full Job Description</h3>
                <p className="mb-4">{job.description}</p>

                <h3 className="font-semibold text-lg">Qualifications</h3>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                  <li>Bachelor's degree (preferred)</li>
                  <li>3–5 years of experience</li>
                  <li>Strong communication and leadership skills</li>
                </ul>

                <h3 className="font-semibold text-lg">Responsibilities</h3>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                  <li>Supervise staff and coordinate operations</li>
                  <li>Ensure quality and safety standards</li>
                  <li>Prepare reports and documentation</li>
                </ul>
              </div>

              {/* RIGHT SIDE - APPLY FORM */}
              <div className="bg-gray-50 border rounded-xl p-6 shadow">
                <h3 className="text-lg font-semibold mb-4">APPLY NOW</h3>
                <form className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <textarea
                    placeholder="Cover letter"
                    rows="5"
                    className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-full text-sm"
                  >
                    SUBMIT APPLICATION
                  </button>
                </form>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10">
            No jobs found for “{searchTerm}”
          </p>
        )}
      </div>
    </section>
  );
};

export default AllJobsPage;
