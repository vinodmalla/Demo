import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HubIcon from '@mui/icons-material/Hub';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import StarRateIcon from '@mui/icons-material/StarRate';

function Home() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  
  const sentence =
    "Global Experts in Talent Search & Acquisition – Customized Hiring Solutions That Fit Your Business Perfectly";
  const words = sentence.split(" ");

  const About = [
    {
      title: 'Your Strategic Partner in Global IT Staffing',
      description:
        "At Intelli Tek IT Solutions, we understand that having the right talent is crucial to implementing innovative technical solutions and unlocking sustainable business growth. Founded with a mission to bridge the gap between opportunity and skilled professionals, we are proud to be a game changer in the IT staffing industry. With our rapid expansion strategy, we are poised to grow our presence across new geographies and industries",
      icon: <BusinessCenterIcon sx={{ fontSize: 140 }} />,
    },
    {
      title: 'A Reliable Partner in IT Staffing',
      description:
        "Intelli Tek IT Solutions offers tailored IT staffing solutions designed to meet the specific needs of your organization. We take a client-first approach, focusing on understanding your unique requirements and delivering qualified candidates who align with your business goals. Our comprehensive screening process ensures that we present only the most suitable and skilled candidates. We prioritize both quality and speed—because we know that in today's fast-paced world, your time is valuable. With Techgene, you receive efficient, reliable, and responsive staffing suppo",
      icon: <HubIcon sx={{ fontSize: 140 }} />,
    },
    {
      title: 'Building a Strong Network of Talent',
      description:
        "Over the years, we have built a dynamic network of talented IT professionals—from fresh graduates to experienced experts. Whether you're looking for short-term contract staff or long-term permanent hires, Techgene delivers staffing solutions that are timely, flexible, and legally compliant with local labor laws. For employers, we provide consistent, strategic staffing services to help maintain business momentum. For job seekers, we offer access to top opportunities that match your skills and aspirations. Our data-driven recruitment process respects both client expectations and candidate ambitions, ensuring a win-win for everyone.",
      icon: <PeopleAltIcon sx={{ fontSize: 140 }} />,
    },
    {
      title: 'Your Trusted Partner in Strategic Staffing',
      description:
        "At Intelli Tek IT Solutions, our team of seasoned recruiters and HR professionals brings years of hands-on experience in the staffing industry. We leverage this deep expertise to deliver high-quality talent swiftly and efficiently—tailored to meet the unique needs of your organization. Whether you're looking for offshore, nearshore, or temporary staffing solutions, we provide flexible, scalable services designed to support your business goals and workforce strategies",
      icon: <GroupWorkIcon sx={{ fontSize: 140 }} />,
    },
    {
      title: 'A Commitment to Excellence in Service',
      description:
        "What sets Intelli Tek IT Solutions apart is our unwavering dedication to exceptional service—for both clients and candidates. We believe that successful staffing goes beyond just filling positions; it's about building strong, lasting partnerships. We take pride in our transparent, consultative approach, offering ongoing support and guidance throughout the hiring process. From initial consultation to final onboarding, our team is here to ensure a smooth, efficient experience every step of the way.",
      icon: <StarRateIcon sx={{ fontSize: 140 }} />,
    },
  ];

  return (
    <div className="bg-gray-100 w-full">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img
          src="/Homeimg.jpg"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 z-10 bg-black/50">
          <h1 className="text-white sm:mt-20 text-2xl mt-100 md:text-4xl font-extrabold text-center flex flex-wrap justify-center leading-relaxed">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="mr-2"
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>
      </div>

      {/* About Section */}
      <section className="py-12 px-6 text-center bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Is a Talent Shortage Holding Your Business Back? Intelli Tek IT Solutions delivers impactful staffing solutions to empower organizations globally with skilled IT professionals.
        </p>
      </section>

      {/* Values Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 md:p-20 bg-gray-50">
        {About.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:bg-[#1976d2] hover:opacity-90 text-center"
          >
            <div className="text-[#1976d2] group-hover:text-white transition-colors duration-300 mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-700 group-hover:text-black mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 group-hover:text-black text-base">
              {expandedIndex === index
                ? item.description
                : item.description.slice(0, 120) + '...'}
            </p>
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="mt-4 text-blue-600 group-hover:text-white hover:underline text-sm font-medium"
            >
              {expandedIndex === index ? "Read less" : "Read more"}
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
