import React from "react";
import { useParams } from "react-router-dom";

const jobDetails = {
  cashier: {
    title: "Cashier",
    company: "Chauncey Ridge Food Mart",
    location: "British Columbia",
    salary: "20.00 hourly / 35 to 40 hours per week",
    education: "Secondary (high) school graduation certificate or equivalent experience",
    experience: "Experience an asset",
    languages: "English",
    type: "Full Time",
    category: "Accounting / Finance",
    vacancy: 1,
    responsibilities: [
      "Operate cash register",
      "Process payments and give receipts",
      "Handle customer transactions efficiently",
      "Maintain cleanliness of checkout area",
    ],
    benefits: ["Dental plan", "Health care plan", "Paid time off"],
    startDate: "As soon as possible",
    setting: "Retail store",
  },

  "warehouse-supervisor": {
    title: "Warehouse Supervisor (12013)",
    company: "ABC Logistics Ltd.",
    location: "Surrey, BC",
    salary: "26.50 hourly / 40 hours per week",
    education: "College or technical diploma",
    experience: "2 years or more",
    languages: "English",
    type: "Full Time",
    category: "Logistics / Warehouse",
    vacancy: 2,
    responsibilities: [
      "Supervise warehouse staff and activities",
      "Ensure efficient storage and distribution",
      "Maintain inventory records",
      "Train and evaluate employees",
    ],
    benefits: ["Dental care", "Bonus incentives", "Vacation pay"],
    startDate: "Immediately",
    setting: "Warehouse",
  },

  "office-admin": {
    title: "Office Administrative Assistant (13110)",
    company: "Maple Leaf Office Services",
    location: "Calgary, AB",
    salary: "23.00 hourly / 40 hours per week",
    education: "Secondary school or equivalent",
    experience: "1 year or more",
    languages: "English",
    type: "Full Time",
    category: "Administration",
    vacancy: 1,
    responsibilities: [
      "Answer phone calls and emails",
      "Schedule appointments and manage documents",
      "Support other staff with administrative tasks",
    ],
    benefits: ["Work from home options", "Health benefits"],
    startDate: "Next available",
    setting: "Office environment",
  },

  "delivery-driver": {
    title: "Delivery Truck Driver (NOC 75201)",
    company: "Speedy Deliveries Inc.",
    location: "Regina, SK",
    salary: "25.00 hourly / 40 hours per week",
    education: "No formal education required",
    experience: "Experience an asset",
    languages: "English",
    type: "Full Time",
    category: "Transportation",
    vacancy: 3,
    responsibilities: [
      "Deliver goods to customers",
      "Load and unload trucks",
      "Perform vehicle inspections",
      "Keep delivery records up to date",
    ],
    benefits: ["Fuel allowance", "Flexible hours"],
    startDate: "Immediately",
    setting: "On the road",
  },

  "sales-supervisor": {
    title: "Sales Supervisor - Retail (NOC 62010)",
    company: "Retail Hub Canada",
    location: "Toronto, ON",
    salary: "24.75 hourly / 40 hours per week",
    education: "College/CEGEP",
    experience: "2 years or more",
    languages: "English",
    type: "Full Time",
    category: "Retail / Sales",
    vacancy: 1,
    responsibilities: [
      "Manage sales team and goals",
      "Provide customer support",
      "Handle inventory and reports",
    ],
    benefits: ["Sales bonuses", "Company discounts"],
    startDate: "2 weeks from offer",
    setting: "Retail store",
  },

  "construction-labourer": {
    title: "Construction Labourer - CLP Services Ltd.",
    company: "CLP Services Ltd.",
    location: "Vancouver, BC",
    salary: "21.00 hourly / 40 hours per week",
    education: "No formal education required",
    experience: "Will train",
    languages: "Basic English",
    type: "Full Time",
    category: "Construction",
    vacancy: 4,
    responsibilities: [
      "Load/unload materials",
      "Assist skilled workers",
      "Clean construction site",
    ],
    benefits: ["Overtime pay", "On-the-job training"],
    startDate: "As soon as possible",
    setting: "Outdoor construction site",
  },
};

const JobDetailPage = () => {
  const { jobId } = useParams();
  const job = jobDetails[jobId];

  if (!job) return <div className="p-8">Job not found.</div>;

  return (
    <section className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-1">{job.title}</h1>
      <p className="text-gray-600 mb-6">{job.company} – {job.location}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT COLUMN: JOB DESCRIPTION */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Job Description</h2>
          <p><strong>Languages:</strong> {job.languages}</p>
          <p><strong>Education:</strong> {job.education}</p>
          <p><strong>Experience:</strong> {job.experience}</p>
          <p><strong>Work Setting:</strong> {job.setting}</p>
          <p><strong>Start Date:</strong> {job.startDate}</p>

          <div className="mt-4">
            <h3 className="font-semibold">Responsibilities:</h3>
            <ul className="list-disc ml-5">
              {job.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold">Benefits:</h3>
            <ul className="list-disc ml-5">
              {job.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN: JOB INFO */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Job Information</h2>
          <p><strong>Type:</strong> {job.type}</p>
          <p><strong>Category:</strong> {job.category}</p>
          <p><strong>Vacancy:</strong> {job.vacancy}</p>
          <p><strong>Salary:</strong> {job.salary}</p>
          <p><strong>Location:</strong> {job.location}</p>
        </div>
      </div>
    </section>
  );
};

export default JobDetailPage;
