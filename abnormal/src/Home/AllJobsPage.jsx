import React, { useState, useEffect } from "react";
import jobsData from "../data/Jobs.json";

const AllJobsPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const formattedJobs = jobsData.map(job => ({
      ...job,
      posted: new Date(job.posted),
    }));
    setJobs(formattedJobs);
  }, []);

  if (jobs.length === 0) return <p className="text-center mt-10">Loading...</p>;

  return (
    <section className="p-8 max-w-7xl mx-auto">
      <h1 className="text-center text-2xl font-bold mb-6">WE ARE HIRING!</h1>

      <div className="flex flex-col gap-16">
        {jobs.map((job) => (
          <div key={job.id} className="grid md:grid-cols-2 gap-10 border-b pb-10">
            {/* LEFT SIDE - Job Information */}
            <div>
              <h2 className="text-3xl font-bold text-blue-700 mb-2">{job.title}</h2>
              <p className="text-gray-600 mb-4">NextLevel Management</p>

              <h3 className="font-semibold text-lg">Job Details</h3>
              <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>Job type: {job.type}</li>
                <li>Location: Calgary, Alberta</li>
                <li>Posted: {job.posted.toLocaleDateString()}</li>
                <li>Pay: $37.00 per hour</li>
                <li>Hours: 40 per week</li>
              </ul>

              <h3 className="font-semibold text-lg">Full Job Description</h3>
              <p className="mb-4">{job.description}</p>

              <h3 className="font-semibold text-lg">Qualifications</h3>
              <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>Bachelor's degree</li>
                <li>3-5 years experience</li>
              </ul>

              <h3 className="font-semibold text-lg">Responsibilities</h3>
              <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>Supervise staff</li>
                <li>Oversee operations</li>
                <li>Implement company policies</li>
                <li>Manage budgets</li>
                <li>Prepare reports</li>
                <li>Resolve issues</li>
              </ul>
            </div>

            {/* RIGHT SIDE - Apply Form */}
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
        ))}
      </div>
    </section>
  );
};

export default AllJobsPage;
