import React, { useState } from 'react';
import { Button } from '@mui/material';
import { FaLaptopCode, FaUserTie, FaRocket } from 'react-icons/fa';


const jobs = [
  {
    title: 'Java Full Stack Developer',
    location: 'Hyderabad, India',
    type: 'Full-Time',
    description:
      'Looking for experienced developers with hands-on expertise in Java, Spring Boot, and React.js or Angular.',
  },
  {
    title: 'Salesforce Consultant',
    location: 'Remote',
    type: 'Contract',
    description:
      'We are hiring Salesforce experts to work on enterprise-level implementations with strong Apex and LWC skills.',
  },
  {
    title: '.NET Developer',
    location: 'Bangalore, India',
    type: 'Full-Time',
    description:
      'We require skilled .NET Core professionals to join our client-facing team for enterprise solution delivery.',
  },
];

const benefits = [
  {
    icon: <FaRocket className="text-blue-600 w-10 h-10" />,
    title: 'Career Growth',
    description: 'Opportunities to work on cutting-edge technologies and upskill continuously.',
  },
  {
    icon: <FaLaptopCode className="text-green-600 w-10 h-10" />,
    title: 'Exciting Projects',
    description: 'Work with global clients across domains like finance, healthcare, and retail.',
  },
  {
    icon: <FaUserTie className="text-indigo-600 w-10 h-10" />,
    title: 'Supportive Culture',
    description: 'We foster innovation, collaboration, and work-life balance.',
  },
];

const Careers = () => {
  
  const openModal = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setModalOpen(false);
  };

  return (
    <div className="font-sans px-6 md:px-20 mt-18 py-16 bg-white text-gray-800">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-3">Careers at Intelli Tek IT Solutions</h1>
        <p className="text-lg text-gray-600">
          Join a team that’s shaping the future of IT innovation and digital transformation.
        </p>
      </header>

      {/* Job Listings */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Active Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg shadow-md bg-gray-50 hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-sm text-gray-500 mb-1">
                📍 {job.location} &nbsp;&nbsp;|&nbsp;&nbsp; 🕒 {job.type}
              </p>
              <p className="text-gray-700 mb-4">{job.description}</p>
              <Button variant="contained" onClick={() => openModal(job)}>
                Apply Now
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Work With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="text-center p-6 border rounded-lg shadow-sm bg-white">
              <div className="mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/*  
      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Don’t see the right role?
        </h2>
        <p className="text-gray-600 mb-6">
          We’re always on the lookout for passionate talent. Drop us your resume!
        </p>
        <Button
          variant="contained"
          color="primary"
          onClick={() => openModal({ title: 'General Application' })}
        >
          Submit Resume
        </Button>
      </section>

      {/* Apply Modal */}
     
        
    </div>
  );
};

export default Careers;
