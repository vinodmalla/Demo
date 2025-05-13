import React, { useState } from 'react';
import { AiOutlineApi } from 'react-icons/ai';
import { MdUpdate, MdSettings } from 'react-icons/md';
import { FaUsers, FaHandshake, FaCheckCircle } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import { Button } from '@mui/material';
import { X } from 'react-feather';

const javaServices = [
  {
    icon: <AiOutlineApi className="w-6 h-6 text-blue-600" />,
    title: 'Custom Java Application Development',
    description:
      'From enterprise applications to web platforms and mobile solutions, we build robust and secure Java-based systems tailored to your needs.',
  },
  {
    icon: <MdUpdate className="w-6 h-6 text-blue-600" />,
    title: 'Legacy System Modernization',
    description:
      'Upgrade legacy applications to modern Java architectures to improve performance, scalability, and security.',
  },
  {
    icon: <MdSettings className="w-6 h-6 text-blue-600" />,
    title: 'API Development & System Integration',
    description:
      'Seamlessly connect Java applications with third-party tools, cloud services, and internal systems for streamlined workflows.',
  },
  {
    icon: <FaUsers className="w-6 h-6 text-blue-600" />,
    title: 'Maintenance & Support',
    description:
      'Keep your Java applications running at peak performance with proactive support, issue resolution, and continuous improvements.',
  },
];

const javaRoles = [
  'Java Developers (Core Java, Spring, Hibernate)',
  'Full Stack Java Engineers (Java + Angular/React)',
  'Java Architects',
  'Java DevOps Engineers',
  'QA & Automation Testers (Java-based frameworks)',
  'Technical Leads & Project Managers',
];

const hiringModels = [
  'Contract Staffing – Flexible, short-term engagements',
  'Contract-to-Hire – Evaluate before committing',
  'Full-Time Hiring – Access top Java professionals for long-term roles',
  'Dedicated Offshore Teams – Cost-effective and scalable remote talent',
  'Hybrid Staffing Models – Combine onsite and remote support',
];

const javaReasons = [
  {
    title: 'Expert Java Talent',
    description: 'Access a pre-vetted network of certified Java professionals.',
    icon: <FaUsers className="w-46 h-46 m-auto text-gray-600" />,
  },
  {
    title: 'Fast & Scalable Staffing',
    description: 'Quick turnaround to onboard talent for urgent projects.',
    icon: <FaHandshake className="w-46 h-46 m-auto text-[#645cd8]" />,
  },
  {
    title: 'Domain Knowledge',
    description: 'Experience across sectors including banking, retail, healthcare, logistics, and more.',
    icon: <BsFillPeopleFill className="w-46 h-46 m-auto text-[#136599]" />,
  },
  {
    title: 'End-to-End Services',
    description: 'From talent sourcing to onboarding and performance monitoring.',
    icon: <FaCheckCircle className="w-46 h-46 m-auto text-[#0d211ce2]" />,
  },
];

const Java = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex mt-18 flex-col font-sans">
      <div className="w-full bg-white shadow-2xl rounded-xl p-8 md:p-12 animate-fadeIn">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2 leading-tight drop-shadow-sm">
            Java Development & Resource Staffing Services
          </h1>
          <p className="text-lg text-gray-600 font-semibold tracking-wide">
            Robust Java Solutions Backed by Skilled Talent
          </p>
        </header>

        {/* Intro */}
        <section className="mb-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            At Intelli Tek IT Solutions, we deliver top-tier Java development services combined with flexible staffing and outsourcing solutions to help businesses innovate, scale, and succeed. With deep expertise in Java technologies and a strong pool of qualified professionals, we enable companies to accelerate development while minimizing hiring delays and overhead.
          </p>
        </section>

        {/* Services */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-black mb-8 border-b border-blue-300 pb-3 tracking-wide">
            Our Java Services Include:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {javaServices.map(({ icon, title, description }, idx) => (
              <div
                key={idx}
                className="group flex space-x-5 p-6 border border-gray-200 rounded-2xl shadow-sm bg-gray-50 hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1"
              >
                <div className="flex-shrink-0 flex items-center justify-center  md:bg-blue-100 rounded-full p-3 md:shadow-md group-hover:bg-blue-200">
                  {icon}
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-1">{title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Java Roles */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-black mb-6 border-b border-blue-300 pb-3">
            Java Staffing & Resource Augmentation
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <ul className="space-y-3 text-lg text-gray-700 flex-1">
              {javaRoles.map((role, idx) => (
                <li key={idx} className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" /> {role}
                </li>
              ))}
            </ul>
           {/* <img
              src="/Java.png"
              alt="Java Developer Roles"
              className="w-full md:w-[400px] h-auto rounded-lg shadow-lg"
            /> */}
          </div>
        </section>

        {/* Hiring Models */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-black mb-6 border-b border-blue-300 pb-3">
            Flexible Hiring Models:
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <ul className="space-y-3 text-lg text-gray-700 flex-1">
              {hiringModels.map((model, idx) => (
                <li key={idx} className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" /> {model}
                </li>
              ))}
            </ul>
           {/* <img
              src="/Java.png"
              alt="Hiring Engagement Models"
              className="w-full md:w-[400px] h-auto rounded-lg shadow-lg"
            />*/}
          </div>
        </section>

        {/* Why Choose */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-black mb-8 border-b border-blue-300 pb-3 tracking-wide">
            Why Choose Intelli Tek IT Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {javaReasons.map(({ icon, title, description }, idx) => (
              <div key={idx} className="text-center">
                <div className="mb-4">{icon}</div>
                <h3 className="text-2xl font-semibold text-black mb-2">{title}</h3>
                <p className="text-gray-700">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center">
          <h2 className="text-2xl font-semibold text-black mb-4 drop-shadow-sm">
            Build, Scale & Succeed with the Right Java Talent
          </h2>
          <p className="text-gray-700 mb-8 px-4 md:px-32 max-w-3xl mx-auto leading-relaxed tracking-wide">
            Whether you're building a complex enterprise application or scaling your development team, Intelli Tek IT Solutions provides the expertise and people to power your success.
          </p>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              fontWeight: 'bold',
              px: 6,
              py: 1.5,
              textTransform: 'none',
              boxShadow: '0px 4px 15px rgba(41, 98, 255, 0.6)',
            }}
            onClick={openModal}
          >
            📞 Contact us today to explore our Java staffing and consulting services
          </Button>
        </footer>
      </div>

      {/* Contact Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl shadow-lg max-w-md w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-indigo-900 mb-4 text-center">
              Contact Us
            </h3>
            <p className="mb-6 text-gray-700 text-center">
              Reach out via email at{' '}
              <a
                href="mailto:contact@intellitek.com"
                className="text-blue-600 font-medium underline"
              >
                contact@intellitek.com
              </a>{' '}
              and our team will get back to you promptly.
            </p>
            <div className="text-center">
              <Button
                variant="contained"
                color="primary"
                onClick={closeModal}
                sx={{
                  fontWeight: 'bold',
                  px: 4,
                  py: 1,
                  textTransform: 'none',
                }}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Java;
