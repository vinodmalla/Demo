import React, { useState } from 'react';
import { FaRobot, FaBrain, FaChartLine, FaLock } from 'react-icons/fa';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { Button } from '@mui/material';
import { X } from 'react-feather';

const aiServices = [
  {
    icon: <FaRobot className="w-6 h-6 text-green-600" />,
    title: 'AI Strategy & Consulting',
    description: 'We define a clear roadmap to integrate AI into your business operations, aligning with your goals and industry trends.',
  },
  {
    icon: <FaBrain className="w-6 h-6 text-green-600" />,
    title: 'Machine Learning & Deep Learning',
    description: 'Custom ML/DL models for predictions, classification, natural language processing (NLP), computer vision, and more.',
  },
  {
    icon: <FaChartLine className="w-6 h-6 text-green-600" />,
    title: 'Data Engineering & Model Deployment',
    description: 'We manage data pipelines, model training, and scalable deployment on cloud platforms like AWS, Azure, and Google Cloud.',
  },
  {
    icon: <AiOutlineAppstoreAdd className="w-6 h-6 text-green-600" />,
    title: 'AI for Business Automation',
    description: 'Intelligent automation using AI-driven bots, recommendation engines, virtual assistants, and predictive analytics.',
  },
  {
    icon: <FaLock className="w-6 h-6 text-green-600" />,
    title: 'AI Ethics, Compliance & Governance',
    description: 'Implement responsible AI practices to ensure ethical, transparent, and secure use of data and algorithms.',
  },
];

const aiRoles = [
  'AI/ML Engineers',
  'Data Scientists & Data Analysts',
  'NLP Engineers',
  'Computer Vision Experts',
  'AI Architects',
  'MLOps Engineers',
  'AI Product Managers',
];

const aiHiringModels = [
  'Contract & Freelance Staffing',
  'Contract-to-Hire',
  'Permanent Placement',
  'Offshore/Remote Team Deployment',
  'Hybrid Models (Onsite + Remote)',
];

const aiReasons = [
  {
    title: 'Access to Top AI Talent',
    description: 'Pre-screened professionals with expertise in Python, TensorFlow, PyTorch, OpenAI, Hugging Face, and more.',
    icon: <FaRobot className="w-46 h-46 text-gray-600" />,
  },
  {
    title: 'Speed & Scalability',
    description: 'Quickly scale teams based on project demand.',
    icon: <FaBrain className="w-46 h-46 text-[#645cd8]" />,
  },
  {
    title: 'End-to-End Staffing Support',
    description: 'From requirement gathering to onboarding and performance tracking.',
    icon: <AiOutlineAppstoreAdd className="w-46 h-46 text-[#136599]" />,
  },
  {
    title: 'Cost-Effective & Flexible',
    description: 'Get the best-fit resources without the burden of long-term overhead.',
    icon: <FaLock className="w-46 h-46 text-[#0d211ce2]" />,
  },
];

const AI = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex mt-18 flex-col font-sans">
      <div className="w-full bg-white shadow-2xl rounded-xl p-8 md:p-12 animate-fadeIn">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2 leading-tight drop-shadow-sm">
            AI Consulting & Resource Staffing Services
          </h1>
          <p className="text-lg text-gray-600 font-semibold tracking-wide">
            Smart Solutions. Skilled Talent. Scalable Success.
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            At Intelli Tek IT Solutions, we empower organizations to leverage the full potential of Artificial Intelligence (AI) through cutting-edge solutions and flexible resource staffing. Whether you're building AI-powered products, automating workflows, or exploring data-driven innovation, we provide the right talent and expert guidance to accelerate your journey. From startups to enterprises, we help clients stay ahead with intelligent systems—while delivering top-tier AI professionals through outsourcing, staff augmentation, or full-time hiring.
          </p>
        </section>

        {/* AI Services Section */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-black mb-8 border-b border-green-300 pb-3 tracking-wide">
            Our AI Services Include:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiServices.map(({ icon, title, description }, idx) => (
              <div
                key={idx}
                className="group flex space-x-5 p-6 border border-gray-200 rounded-2xl shadow-sm bg-gray-50 hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1"
                aria-label={title}
                tabIndex={0}
              >
                <div className="flex-shrink-0 flex items-center justify-center md:bg-green-100 rounded-full p-3 md:shadow-lg transition-colors duration-300 group-hover:bg-green-200">
                  {icon}
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-green-900 mb-1">{title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Staffing Roles Section */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-black mb-8 border-b border-green-300 pb-3 tracking-wide">
            AI Resource Staffing & Talent Solutions
          </h2>
          <ul className="space-y-4 text-lg text-gray-700">
            {aiRoles.map((role, idx) => (
              <li key={idx} className="flex items-center">
                <FaLock className="text-green-500 w-5 h-5 mr-3" />
                {role}
              </li>
            ))}
          </ul>
        </section>

        {/* Hiring Models Section */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-black mb-8 border-b border-green-300 pb-3 tracking-wide">
            Flexible Engagement Models:
          </h2>
          <ul className="space-y-4 text-lg text-gray-700">
            {aiHiringModels.map((model, idx) => (
              <li key={idx} className="flex items-center">
                <FaLock className="text-green-500 w-5 h-5 mr-3" />
                {model}
              </li>
            ))}
          </ul>
        </section>

        {/* Reasons to Choose AI Expertise Section */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-black mb-8 border-b border-green-300 pb-3 tracking-wide">
            Why Partner with Intelli Tek IT Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {
                    aiReasons.map((reason,index)=>(
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
        <footer className="text-center">
          <h2 className="text-2xl font-semibold text-black mb-4 drop-shadow-sm">
            Turn Intelligence Into Innovation
          </h2>
          <p className="text-gray-700 mb-8 px-4 md:px-32 max-w-3xl mx-auto leading-relaxed tracking-wide">
            AI is transforming the future of business—let Intelli Tek IT Solutions provide the brains behind your breakthroughs. Whether you're experimenting or scaling up, we deliver the people and power to make it happen.
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
            📞 Contact us today to learn more about our AI staffing and consulting solutions
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
              Reach out via email at <a href="mailto:contact@intellitek.com" className="text-indigo-600 underline">contact@intellitek.com</a> or call <a href="tel:+1234567890" className="text-indigo-600 underline">+1 (234) 567-890</a>.
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

export default AI;
