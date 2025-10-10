import React, { useState, useEffect } from "react";
import jobsData from "../data/Jobs.json";

const AllJobsPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const formattedJobs = jobsData.map((job) => ({
      ...job,
      posted: new Date(job.posted),
    }));
    setJobs(formattedJobs);
  }, []);

  if (jobs.length === 0)
    return <p className="text-center mt-10">Loading...</p>;

  return (
    <section className="p-8 max-w-7xl mx-auto">
      <h1 className="text-center text-2xl font-bold mb-6">WE ARE HIRING!</h1>

      <div className="flex flex-col gap-16">
        {jobs.map((job) => (
          <div key={job.id} className="grid md:grid-cols-2 gap-10 border-b pb-10">
            {/* LEFT SIDE - Job Information */}
            <div>
              <h2 className="text-3xl font-bold text-blue-700 mb-2">
                {job.title}
              </h2>
              <p className="text-gray-600 mb-4">{job.company}</p>

              <h3 className="font-semibold text-lg">Job Details</h3>
              <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>Job type: {job.type}</li>
                <li>Location: {job.location}</li>
                {/* <li>Posted: {job.posted.toLocaleDateString()}</li> */}
                <li>Pay: $37.00 per hour</li>
                <li>Hours: 40 per week</li>
              </ul>

              <h3 className="font-semibold text-lg">Full Job Description</h3>
              <p className="mb-4">{job.description}</p>

              <h3 className="font-semibold text-lg">Qualifications</h3>
              <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>Bachelor's degree (Engineering or related field preferred)</li>
                <li>3–5 years of relevant experience</li>
                <li>Strong communication and leadership skills</li>
                <li>Knowledge of QA/QC standards and compliance</li>
              </ul>

              <h3 className="font-semibold text-lg">Responsibilities</h3>
              <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>Supervise staff and coordinate daily operations</li>
                <li>Oversee production and ensure quality standards are met</li>
                <li>Implement company policies and safety protocols</li>
                <li>Manage budgets, inventory, and reporting</li>
                <li>Prepare detailed performance and inspection reports</li>
                <li>Resolve operational and personnel issues efficiently</li>
                <li>Collaborate with engineering and operations teams</li>
                <li>Develop and maintain inspection procedures and documentation</li>
                <li>Ensure compliance with ISO 9001 and regulatory standards</li>
                <li>Conduct internal audits and support external inspections</li>
                <li>Monitor metrics and identify areas for improvement</li>
                <li>Communicate effectively with senior management and clients</li>
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
