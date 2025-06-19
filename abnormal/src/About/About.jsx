import React, { useEffect } from "react";
import aboutImg from "../assets/about.jpg"; // Make sure the path is correct

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-white dark:bg-zinc-900 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Image */}
        <div>
          <img src={aboutImg} alt="About Us" className="rounded-lg shadow-lg" />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
            Your Path to a <span className="text-indigo-700 dark:text-indigo-400">Better Career</span> Starts Here
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
            We are committed to connecting job seekers with the right opportunities that align with their skills, goals, and ambitions. Our platform serves as a bridge between talented individuals and companies that are actively hiring across various industries.
            <br /><br />
            Whether you're looking for your first job, planning a career change, or aiming for your next leadership role, our goal is to make your job search easier, faster, and more successful.
            <br /><br />
            With a wide range of job listings, resume-building tools, and interview guidance, we’re here to help you every step of the way. We also partner with inclusive employers who value diversity, innovation, and professional growth.
            <br /><br />
            Our mission is to support your journey toward meaningful employment and long-term career success. Take control of your future — discover your potential, explore new opportunities, and build a career you’re proud of.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
