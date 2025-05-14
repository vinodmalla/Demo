import React, { useState } from 'react';
import { Cloud, Settings, BarChart3, Repeat, Users, X } from 'lucide-react';
import { FaUserShield, FaRegClock, FaGlobe, FaDollarSign, FaUserTie, FaTools, FaCode, FaChartLine } from 'react-icons/fa';
import Button from '@mui/material/Button';

const salesforceServices = [
  {
    icon: <Cloud className="w-20 h-20 md:w-6 md:h-6 text-blue-600 group-hover:text-blue-900" />,
    title: 'Salesforce Implementation & Customization',
    description: 'We design, configure, and deploy Salesforce solutions tailored to your business workflows—ensuring maximum ROI.',
  },
  {
    icon: <Settings className="w-20 h-20 md:w-6 md:h-6 text-blue-600 group-hover:text-blue-900" />,
    title: 'Salesforce Integration & Automation',
    description: 'Streamline your operations by integrating Salesforce with third-party apps, ERP systems, and internal tools.',
  },
  {
    icon: <BarChart3 className="w-20 h-20 md:w-6 md:h-6 text-blue-600 group-hover:text-blue-900" />,
    title: 'Salesforce Analytics & Reporting',
    description: 'Enable smarter decisions with custom dashboards, reports, and Salesforce Einstein Analytics.',
  },
  {
    icon: <Repeat className="w-20 h-20 md:w-6 md:h-6 text-blue-600 group-hover:text-blue-900" />,
    title: 'Ongoing Support & Optimization',
    description: 'We provide continuous monitoring, maintenance, and optimization of your Salesforce environment to keep it running smoothly.',
  },
];

const staffingPoints = [
  {
    title: 'Certified Salesforce Professionals',
    description: 'Pre-screened and technically vetted for your project needs',
    icon: <FaUserShield className="w-36 h-36 text-blue-700 mx-auto" />,
  },
  {
    title: 'Quick Turnaround Time',
    description: 'Fast sourcing and onboarding to avoid project delays',
    icon: <FaRegClock className="w-36 h-36 text-green-600 mx-auto" />,
  },
  {
    title: 'Domain Expertise',
    description: 'Experience across industries like finance, healthcare, retail, and more',
    icon: <FaGlobe className="w-36 h-36 text-yellow-600 mx-auto" />,
  },
  {
    title: 'End-to-End Support',
    description: 'From talent sourcing and onboarding to post-placement care',
    icon: <FaUserTie className="w-36 h-36 text-indigo-700 mx-auto" />,
  },
  {
    title: 'Cost-Effective Solutions',
    description: 'Get premium talent without high overhead',
    icon: <FaDollarSign className="w-36 h-36 text-red-600 mx-auto" />,
  },
];

const roleIcons = [
  { title: 'Salesforce Administrators', icon: <FaTools className="text-blue-600" /> },
  { title: 'Salesforce Developers (Apex, LWC, Visualforce)', icon: <FaCode className="text-green-600" /> },
  { title: 'Salesforce Architects', icon: <FaUserTie className="text-purple-600" /> },
  { title: 'Business Analysts (CRM-focused)', icon: <FaChartLine className="text-orange-600" /> },
  { title: 'Salesforce QA Engineers', icon: <FaUserShield className="text-indigo-600" /> },
  { title: 'Pardot & Marketing Cloud Experts', icon: <FaGlobe className="text-pink-600" /> },
  { title: 'Salesforce Consultants (Sales/Service/Experience Cloud)', icon: <Users className="text-gray-700 w-5 h-5" /> },
];

const SalesforceServices = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="font-sans mt-18 flex flex-col">
        <div className="w-full bg-white shadow-2xl rounded-xl p-8 md:p-12 animate-fadeIn">
          <header className="text-center mb-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Salesforce Consulting & Resource Staffing Services</h1>
            <p className="text-lg text-gray-600 font-semibold">Empowering Your Business with Certified Salesforce Talent</p>
          </header>

          <section className="text-lg font-semibold text-gray-700 mb-6">
            <p>At Intelli Tek IT Solutions, we offer end-to-end Salesforce consulting and staffing solutions to help businesses harness the full power of the Salesforce platform. Whether you're looking to implement Salesforce, customize your CRM, or expand your team with certified professionals—we deliver the right people and expertise at the right time.</p>
            <p>As a trusted IT consulting partner, we specialize in providing Salesforce-certified talent through flexible models including outsourcing, staff augmentation, and direct hiring.</p>
          </section>

          <section className="mb-14">
            <h2 className="text-xl font-bold text-black mb-8 border-b border-blue-300 pb-3">Our Salesforce Services Include:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {salesforceServices.map(({ icon, title, description }, idx) => (
                <div key={idx} className="group flex space-x-5 p-6 border border-gray-200 rounded-2xl shadow-sm bg-gray-50 hover:shadow-xl transition-transform hover:-translate-y-1">
                  <div className="flex-shrink-0 flex items-center justify-center md:bg-blue-100 rounded-full p-3 md:shadow-lg group-hover:bg-blue-200">
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-1">{title}</h3>
                    <p className="text-gray-700">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-xl font-bold text-black mb-6 border-b border-blue-300 pb-3">Salesforce Resource Staffing & Outsourcing Solutions</h2>
            <div className="bg-gray-100 p-6 rounded-xl shadow-inner space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Roles We Staff:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {roleIcons.map((role, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-gray-800">
                    <span>{role.icon}</span>
                    <span>{role.title}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6">Flexible Engagement Models:</h3>
              <ul className="list-disc pl-6 text-gray-800 space-y-2">
                <li>Contract Staffing – Hire for specific projects or timelines</li>
                <li>Contract-to-Hire – Evaluate before making a long-term decision</li>
                <li>Full-Time Placements – We help you find and hire top Salesforce talent</li>
                <li>Offshore/Onshore/Hybrid Teams – Scale your team efficiently with our global talent network</li>
              </ul>
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-bold text-black mb-6 border-b border-blue-300 pb-3">Why Choose Intelli Tek IT Solutions?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-gray-100 rounded-xl">
              {staffingPoints.map((reason, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow hover:shadow-md transition-transform hover:scale-105">
                  <div className="mb-4">{reason.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              ))}
            </div>
          </section>

          <footer className="text-center">
            <h2 className="text-2xl font-semibold text-black mb-4">Let’s Build Your Salesforce Success Together</h2>
            <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
              Whether you're scaling up your CRM, launching a new implementation, or simply need expert hands on deck—Intelli Tek IT Solutions delivers reliable, skilled, and flexible Salesforce talent.
            </p>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ fontWeight: 'bold', px: 6, py: 1.5, textTransform: 'none', boxShadow: '0px 4px 15px rgba(59, 130, 246, 0.5)' }}
              onClick={openModal}
            >
              📞 Contact us today to discuss your Salesforce resource needs
            </Button>
          </footer>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4" onClick={closeModal}>
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Contact Us</h3>
            <p className="mb-6 text-gray-700 text-center">
              Reach out via email at <a href="mailto:contact@intellitek.com" className="text-blue-600 underline">contact@intellitek.com</a> or call <a href="tel:+1234567890" className="text-blue-600 underline">+1 (234) 567-890</a>.
            </p>
            <Button fullWidth variant="contained" color="primary" onClick={closeModal} sx={{ fontWeight: 'bold', textTransform: 'none' }}>
              Close
            </Button>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.7s ease forwards;
          }
        `}
      </style>
    </>
  );
};

export default SalesforceServices;
