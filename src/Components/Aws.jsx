import React, { useState } from 'react';
import { AiOutlineApi } from 'react-icons/ai';
import { MdUpdate, MdSettings } from 'react-icons/md';
import { FaUsers, FaHandshake, FaCheckCircle } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import { Button } from '@mui/material';
import { X } from 'react-feather';

const awsServices = [
  {
    icon: <AiOutlineApi className="w-20 h-20 md:w-6 md:h-6 text-blue-600" />,
    title: 'AWS Cloud Architecture & Strategy',
    description: 'Design scalable, secure, and high-performance cloud environments aligned with your business goals.',
  },
  {
    icon: <MdUpdate className="w-20 h-20 md:w-6 md:h-6 text-blue-600" />,
    title: 'Cloud Migration Services',
    description: 'Seamlessly migrate on-premises applications, workloads, and databases to AWS with minimal disruption.',
  },
  {
    icon: <MdSettings className="w-20 h-20 md:w-6 md:h-6 text-blue-600" />,
    title: 'Security & Compliance Solutions',
    description: 'Implement robust cloud security frameworks and ensure compliance with industry standards like GDPR, HIPAA, and SOC2.',
  },
  {
    icon: <FaUsers className="w-20 h-20 md:w-6 md:h-6 text-blue-600" />,
    title: 'DevOps & Automation on AWS',
    description: 'Streamline development pipelines with CI/CD, infrastructure as code (IaC), and automated deployments on AWS.',
  },
  {
    icon: <FaHandshake className="w-20 h-20 md:w-6 md:h-6 text-blue-600" />,
    title: 'AWS Cost Optimization & Monitoring',
    description: 'Analyze and optimize cloud spending with custom dashboards, billing insights, and resource recommendations.',
  },
  {
    icon: <FaCheckCircle className="w-20 h-20 md:w-6 md:h-6 text-blue-600" />,
    title: 'Managed AWS Support',
    description: 'Ongoing maintenance, monitoring, and support for your AWS infrastructure to ensure performance and uptime.',
  },
];

const awsRoles = [
  'AWS Cloud Engineers',
  'DevOps Engineers (AWS CI/CD, Terraform, Ansible)',
  'AWS Solution Architects',
  'Cloud Security Engineers',
  'AWS Data Engineers & Analysts',
  'Site Reliability Engineers (SREs)',
  'Cloud Project Managers',
];

const awsHiringModels = [
  'Contract Staffing – Flexible, short-term engagements',
  'Contract-to-Hire – Evaluate before committing',
  'Full-Time Hiring – Access top AWS professionals for long-term roles',
  'Dedicated Offshore Teams – Cost-effective and scalable remote talent',
  'Hybrid Staffing Models – Combine onsite and remote support',
];

const awsReasons = [
  {
    title: 'Certified AWS Talent Pool',
    description: 'Access pre-vetted AWS-certified professionals.',
    icon: <FaUsers className="w-36 h-36 m-auto text-gray-600" />,
  },
  {
    title: 'Faster Onboarding',
    description: 'Rapid deployment of resources to meet your project deadlines.',
    icon: <FaHandshake className="w-36 h-36 m-auto text-[#645cd8]" />,
  },
  {
    title: 'Cloud-First Expertise',
    description: 'Deep experience in delivering cloud-native solutions across industries.',
    icon: <BsFillPeopleFill className="w-36 h-36 m-auto text-[#136599]" />,
  },
  {
    title: 'Customized Staffing',
    description: 'We align skills, availability, and cultural fit to your business needs.',
    icon: <FaCheckCircle className="w-36 h-36 m-auto text-[#0d211ce2]" />,
  },
];

const Aws = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex mt-18 flex-col font-sans">
      <div className="w-full bg-white shadow-2xl rounded-xl p-8 md:p-12 animate-fadeIn">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-2 leading-tight drop-shadow-sm">
            AWS Consulting & Resource Staffing Services
          </h1>
          <p className="text-lg text-gray-600 font-semibold tracking-wide">
            Cloud-Ready Talent. Scalable Solutions. Real Results.
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            At Intelli Tek IT Solutions, we help businesses harness the full potential of Amazon Web Services (AWS) through expert consulting and resource staffing. Whether you're migrating to the cloud, optimizing infrastructure, or expanding your AWS project team—we deliver certified AWS professionals through flexible outsourcing and hiring models tailored to your needs. As a trusted IT consulting partner, we enable enterprises to innovate faster, reduce costs, and stay competitive in the cloud era.
          </p>
        </section>

        {/* AWS Services Section */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-black mb-8 border-b border-blue-300 pb-3 tracking-wide">
            Our AWS Services Include:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awsServices.map(({ icon, title, description }, idx) => (
              <div
                key={idx}
                className="group flex space-x-5 p-6 border border-gray-200 rounded-2xl shadow-sm bg-gray-50 hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1"
                aria-label={title}
                tabIndex={0}
              >
                <div className="flex-shrink-0 flex items-center justify-center bg-none md:bg-blue-100 rounded-full p-3 shadow-none md:shadow-lg transition-colors duration-300 group-hover:bg-blue-200">
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

        {/* Staffing Roles Section */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-black mb-8 border-b border-blue-300 pb-3 tracking-wide">
            AWS Resource Staffing & Outsourcing Solutions
          </h2>
          <ul className="space-y-4 text-lg text-gray-700">
            {awsRoles.map((role, idx) => (
              <li key={idx} className="flex items-center"> ✅
               
              <p className='ml-6'>{role}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="text-xl font-bold text-black mb-8 border-b border-blue-300 pb-3 tracking-wide">
            Engagement Models:
          </h2>
          <ul className="space-y-4 text-lg text-gray-700">
            {awsHiringModels.map((model, idx) => (
              <li key={idx} className="flex items-center">
               ✅
                <p className='ml-6'>{model}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="text-xl font-bold text-black mb-8 border-b border-blue-300 pb-3 tracking-wide">
            Why Choose Intelli Tek IT Solutions?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-gray-100 rounded-xl">
           {
                    awsReasons.map((reason,index)=>(
                        <div className='bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 text-center' key={index}>
                            <div className='mt-4 flex justify-center'>{reason.icon}</div>
                            <h1 className='text-lg mt-2 font-semibold p-4 mb-2'>{reason.title}</h1>
                            <p>{reason.description}</p>
                        </div>
                    ))
                }
          </div>
        </section>

        {/* Footer / Contact */}
        <footer className="text-center ">
          <h2 className="text-xl font-semibold text-black mb-4 drop-shadow-sm">
            Build, Scale & Succeed on AWS with the Right Talent
          </h2>
          <p className="text-gray-700 mb-8 px-4 md:px-32 max-w-3xl mx-auto leading-relaxed tracking-wide">
            Whether you're starting your cloud journey or expanding a mature AWS ecosystem, Intelli Tek IT Solutions provides the expertise and people to power your success.
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
            📞 Contact us today to explore our AWS staffing and consulting services
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
            onClick={e => e.stopPropagation()}
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
              Reach out via email at <a href="mailto:contact@intellitekits.com" className="text-indigo-600 underline">contact@intellitekits.com</a> or call <a href="tel:+1727641-3777" className="text-indigo-600 underline">+1 (727) 641-3777</a>.
            </p>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={closeModal}
              sx={{ fontWeight: 'bold', textTransform: 'none' }}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Aws;
