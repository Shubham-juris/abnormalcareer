
import React, { useEffect } from "react";
import aboutImg from "../assets/about.webp"; // Add your image here

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-white dark:bg-zinc-900 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Image */}
        <div>
          <img src={aboutImg} alt="About Aboriginal Career" className="rounded-lg shadow-lg" />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
            About us at <span className="text-indigo-700 dark:text-indigo-400">Aboriginal Career</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
            AboriginalCareer.ca is a job portal website designed to connect Aboriginal people in Canada with employment opportunities that match their skills and interests. Our platform offers a wide range of job postings, from entry-level positions to senior management roles, in various industries across Canada.
            <br /><br />
            Our goal is to bridge the gap between employers and job seekers in the Aboriginal community, by providing a platform where employers can find highly skilled and qualified candidates and job seekers can explore job opportunities that align with their career aspirations.
            <br /><br />
            At AboriginalCareer.ca, we understand the unique challenges that Aboriginal people face when entering the workforce. That's why we offer a range of resources and support services to help job seekers navigate the job search process, including career advice, resume writing tips, interview preparation, and job search strategies.
            <br /><br />
            We also work closely with employers to create a diverse and inclusive workplace, where Aboriginal people are valued and provided with equal employment opportunities. Our team of dedicated professionals is committed to ensuring that Aboriginal people have access to meaningful employment opportunities and can achieve their career goals.
            <br /><br />
            Whether you are a recent graduate, an experienced professional, or seeking a career change, AboriginalCareer.ca is the perfect platform to find your dream job. Join our community of Aboriginal job seekers today and take the first step towards a rewarding career.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
