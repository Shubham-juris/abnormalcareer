import React, { useState, useEffect } from "react";
import jobsData from "../data/Jobs.json";

const AllJobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // CLEAN DATA
    const clean = (v) =>
      v ? v.toString().toLowerCase().trim().replace(/\s+/g, " ") : "";

    const cleanedJobs = jobsData.map((job) => {
      const bestTitle =
        job.title ||
        job.job_title ||
        job.position ||
        job.role ||
        job.designation ||
        "";

      return {
        ...job,

        // DISPLAY FIELDS
        displayTitle: bestTitle,
        displayCompany: job.company || "",
        displayLocation: job.location || "",
        displayDescription: job.description || "",

        // SEARCHABLE FIELDS
        searchTitle: clean(bestTitle),
      };
    });

    setJobs(cleanedJobs);
  }, []);

  // ONLY SEARCH BY TITLE
  const filteredJobs = jobs.filter((job) => {
    const s = searchTerm.toLowerCase().trim();
    if (s === "") return true; // show all when search empty

    return job.searchTitle.includes(s); // ❗ONLY TITLE MATCH
  });

  return (
    <section className="p-8 max-w-7xl mx-auto">
      <h1 className="text-center text-2xl font-bold mb-6">WE ARE HIRING!</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search job title..."
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
              key={`${job.id || job.displayTitle}_${index}`}
              className="grid md:grid-cols-2 gap-10 border-b pb-10"
            >
              {/* LEFT SIDE */}
              <div>
                <h2 className="text-3xl font-bold text-blue-700 mb-2">
                  {job.displayTitle}
                </h2>

                <p className="text-gray-600 mb-4">{job.displayCompany}</p>

                <h3 className="font-semibold text-lg">Job Details</h3>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                  <li>Location: {job.displayLocation}</li>
                  <li>Job type: {job.type || job.job_type || "Full-time"}</li>
                  <li>Pay: {job.salary || "$37.00 per hour"}</li>
                  <li>Hours: {job.hours || "40 per week"}</li>
                </ul>

                <h3 className="font-semibold text-lg">Full Job Description</h3>
                <p className="mb-4">{job.displayDescription}</p>

                <h3 className="font-semibold text-lg">Qualifications</h3>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                  <li>Bachelor's degree (preferred)</li>
                  <li>3–5 years of experience</li>
                  <li>Strong communication skills</li>
                </ul>

                <h3 className="font-semibold text-lg">Responsibilities</h3>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                  <li>Supervise staff and daily operations</li>
                  <li>Maintain quality standards and ensure compliance</li>
                  <li>Prepare weekly and monthly performance reports</li>
                  <li>Coordinate with team members for task planning</li>
                  <li>Communicate with clients and resolve issues</li>
                  <li>Manage workflow to meet deadlines</li>
                  <li>Provide training and guidance to new employees</li>
                  <li>Ensure workplace safety and procedures are followed</li>
                  <li>Monitor progress and suggest improvements</li>
                  <li>
                    Assist management in planning and execution of projects
                  </li>
                </ul>
              </div>

              {/* RIGHT SIDE FORM */}
              <div className="bg-gray-50 border rounded-xl p-6 shadow">
                <h3 className="text-lg font-semibold mb-4">APPLY NOW</h3>
                <form className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border rounded-lg p-2"
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="border rounded-lg p-2"
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    className="border rounded-lg p-2"
                  />
                  <textarea
                    placeholder="Cover letter"
                    rows="5"
                    className="border rounded-lg p-2"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full text-sm"
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
