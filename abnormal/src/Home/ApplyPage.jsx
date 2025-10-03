import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ApplyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send formData to backend here
    alert("Application submitted successfully!");
    navigate("/"); // Redirect back to jobs page
  };

  return (
    <div className="p-8 max-w-lg mx-auto border rounded-lg shadow mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Apply for Job: {id}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="border p-2 rounded"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="border p-2 rounded"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          required
          className="border p-2 rounded"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="resume"
          placeholder="Resume Link / File Name"
          required
          className="border p-2 rounded"
          value={formData.resume}
          onChange={handleChange}
        />
        <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyPage;
