import React, { useState } from 'react';
import { ChartBar, Settings, PieChart, BarChart3, ShieldCheck, Cloud, X } from 'lucide-react';
import { FaUserTie, FaCogs, FaRegLightbulb, FaCheckCircle } from 'react-icons/fa';
import Button from '@mui/material/Button';

const biServices = [
  {
    icon: <ChartBar className="w-6 h-6 text-indigo-600 group-hover:text-indigo-900" />,
    title: 'BI Strategy & Roadmap Development',
    description: 'We collaborate with your team to define a BI vision aligned with business goals and build a clear implementation roadmap.',
  },
  {
    icon: <Settings className="w-6 h-6 text-indigo-600 group-hover:text-indigo-900" />,
    title: 'Data Integration & Warehousing',
    description: 'We unify data from various sources into a scalable, reliable data warehouse to support analytics and reporting.',
  },
  {
    icon: <PieChart className="w-6 h-6 text-indigo-600 group-hover:text-indigo-900" />,
    title: 'Dashboard & Reporting Solutions',
    description: 'Interactive dashboards and visual reports using Power BI, Tableau, and Looker to provide real-time business insights.',
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-indigo-600 group-hover:text-indigo-900" />,
    title: 'Advanced Analytics & Predictive Modeling',
    description: 'Forecast trends and uncover patterns using AI, ML, and predictive algorithms for smarter decisions.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-indigo-600 group-hover:text-indigo-900" />,
    title: 'Data Governance & Quality Management',
    description: 'Implement governance frameworks to ensure accuracy, consistency, and compliance across BI systems.',
  },
  {
    icon: <Cloud className="w-6 h-6 text-indigo-600 group-hover:text-indigo-900" />,
    title: 'Cloud BI & Modernization',
    description: 'Migrate legacy systems to modern, cloud-based BI platforms to boost performance and scalability.',
  },
];

const biReasons = [
  {
    title: 'Domain Expertise',
    description: 'Deep experience across finance, healthcare, retail, and manufacturing sectors.',
    icon: <FaUserTie className="w-46 h-46 text-gray-700 mx-auto" />,
  },
  {
    title: 'Tool-Agnostic Approach',
    description: 'Skilled in Power BI, Tableau, Qlik, Looker, Google Data Studio, and more.',
    icon: <FaCogs className="w-46 h-46 text-[#4a63d1] mx-auto" />,
  },
  {
    title: 'Customized Solutions',
    description: 'BI solutions aligned with your unique business goals and data infrastructure.',
    icon: <FaRegLightbulb className="w-46 h-46 text-[#f59e0b] mx-auto" />,
  },
  {
    title: 'Certified Consultants',
    description: 'Professionals with hands-on experience and top industry certifications.',
    icon: <FaCheckCircle className="w-46 h-46 text-[#059669] mx-auto" />,
  },
];

const BIConsulting = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="font-sans mt-18 flex flex-col">
        <div className="w-full bg-white shadow-2xl rounded-xl p-8 md:p-12 animate-fadeIn">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
              Business Intelligence (BI) Consulting Services
            </h1>
            <p className="text-lg text-gray-600 font-semibold tracking-wide">
              Transform Data into Business Value
            </p>
          </header>

          {/* Services */}
          <section className="mb-14">
            <h2 className="text-3xl font-bold text-black mb-8 border-b border-indigo-300 pb-3 tracking-wide">
              Our BI Consulting Services Include:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {biServices.map(({ icon, title, description }, idx) => (
                <div
                  key={idx}
                  className="group flex space-x-5 p-6 border border-gray-200 rounded-2xl shadow-sm bg-gray-50 hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1"
                >
                  <div className="flex-shrink-0 flex items-center justify-center md:bg-indigo-100 rounded-full p-3 md:shadow-lg transition-colors duration-300 group-hover:bg-indigo-200">
                    {icon}
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold text-indigo-900 mb-1">{title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose */}
          <section className="mb-14">
            <h2 className="text-3xl font-bold text-black mb-6 border-b border-indigo-300 pb-3 tracking-wide">
              Why Choose Intelli Tek IT Solutions for BI Consulting?
            </h2>
            <div className="grid grid-cols-1 sm:flex sm:flex-row gap-10 p-6 md:p-10 bg-gray-100">
              {
                    biReasons.map((reason,index)=>(
                        <div className='bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 text-center' key={index}>
                            <div className='mt-4 flex justify-center'>{reason.icon}</div>
                            <h1 className='text-lg mt-2 font-semibold p-4 mb-2'>{reason.title}</h1>
                            <p>{reason.description}</p>
                        </div>
                    ))
                }
            </div>
          </section>

          {/* Footer / CTA */}
          <footer className="text-center">
            <h2 className="text-2xl font-semibold text-black mb-4 drop-shadow-sm">
              Turn Your Data Into a Strategic Asset
            </h2>
            <p className="text-gray-700 mb-8 px-4 md:px-32 max-w-3xl mx-auto leading-relaxed tracking-wide">
              At Intelli Tek IT Solutions, we don’t just deliver dashboards—we deliver clarity, confidence, and control. Whether you're starting your BI journey or enhancing existing capabilities, our consulting services help you unlock the full potential of your data.
            </p>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ fontWeight: 'bold', px: 6, py: 1.5, textTransform: 'none', boxShadow: '0px 4px 15px rgba(99, 102, 241, 0.6)' }}
              onClick={openModal}
            >
              📞 Contact us today to schedule a free consultation
            </Button>
          </footer>
        </div>
      </div>

      {/* Modal */}
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

      {/* Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {opacity: 0; transform: translateY(10px);}
            to {opacity: 1; transform: translateY(0);}
          }
          .animate-fadeIn {
            animation: fadeIn 0.7s ease forwards;
          }
        `}
      </style>
    </>
  );
};

export default BIConsulting;
