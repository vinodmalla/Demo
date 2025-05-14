import React, { useState } from 'react';
import { Lock, Shield, ChartBar, Eye, Folder, Globe, Book, CheckCircle, X } from 'lucide-react';
import Button from '@mui/material/Button';
import { GrUserExpert } from "react-icons/gr";
import { FaTools } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";


const services = [
  {
    icon: <Lock className="w-6 h-6 text-blue-600 transition-colors duration-300 group-hover:text-blue-900" />,
    title: 'Risk Assessment & Compliance',
    description: 'Identify vulnerabilities in your infrastructure and ensure compliance with industry standards such as ISO 27001, GDPR, HIPAA, and more.',
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-600 transition-colors duration-300 group-hover:text-blue-900" />,
    title: 'Network & Endpoint Security',
    description: 'Implement multi-layered defense mechanisms to secure your network, endpoints, and devices from unauthorized access and malware.',
  },
  {
    icon: <ChartBar className="w-20 h-20 md:w-6 md:h-6 text-blue-600 transition-colors duration-300 group-hover:text-blue-900" />,
    title: 'Security Information & Event Management (SIEM)',
    description: 'Get real-time visibility into potential threats with intelligent monitoring, incident detection, and response systems.',
  },
  {
    icon: <Eye className="w-20 h-20 md:w-6 md:h-6 text-blue-600 transition-colors duration-300 group-hover:text-blue-900" />,
    title: 'Vulnerability Management & Penetration Testing',
    description: 'Simulate attacks to uncover and fix security gaps before they’re exploited by malicious actors.',
  },
  {
    icon: <Folder className="w-20 h-20 md:w-6 md:h-6 text-blue-600 transition-colors duration-300 group-hover:text-blue-900" />,
    title: 'Data Protection & Encryption',
    description: 'Protect sensitive business data with robust encryption techniques and access control policies.',
  },
  {
    icon: <Globe className="w-20 h-20 md:w-6 md:h-6 text-blue-600 transition-colors duration-300 group-hover:text-blue-900" />,
    title: 'Cloud Security',
    description: 'Secure your cloud environments (AWS, Azure, Google Cloud) with identity management, threat detection, and automated policies.',
  },
  {
    icon: <Book className="w-20 h-20 md:w-6 md:h-6 text-blue-600 transition-colors duration-300 group-hover:text-blue-900" />,
    title: 'Security Awareness Training',
    description: 'Empower your workforce with training programs designed to recognize and respond to phishing attacks and social engineering tactics.',
  },
];

const reasons = [
  { title:'Industry Experience ',
    description: "Proven success across diverse sectors including finance, healthcare, retail, and manufacturing",
    icon:<FaUserTie className="w-36 h-36 m-auto text-gray-600" />},

  { title:'Tailored Solutions' ,
    description:'Customized cybersecurity strategies to match your unique business needs',
    icon:<FaTools className="w-36 h-36 m-auto text-[#645cd8]" />},
  {title:'Certified Experts' ,
    description:' A team of professionals with leading certifications (CISSP, CEH, CISA, etc.)',
    icon:<GrUserExpert  className="w-36 h-36 m-auto text-[#136599]"/>},
  {title:'End-to-End Support' ,
    description:' From assessment to implementation and ongoing monitoring', 
    icon:<FaHeadset  className="w-36 h-36 m-auto  text-[#0d211ce2]"/>}
];

const extraCertifiedInfo = "Our certified experts have years of hands-on experience, ensuring your cybersecurity needs are comprehensively met with the highest standards.";

const Cyber = () => {
  const [expandedReason, setExpandedReason] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleReason = (index) => {
    setExpandedReason(expandedReason === index ? null : index);
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className=" flex mt-18  flex-col  font-sans">
        <div className="w-full bg-white shadow-2xl rounded-xl p-8 md:p-12 animate-fadeIn">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-2 leading-tight drop-shadow-sm">
              Cybersecurity Services by Intelli Tek IT Solutions Technologies
            </h1>
            <p className="text-lg text-gray-600 font-semibold tracking-wide">
              Protecting What Matters Most – Your Data
            </p>
          </header>

          {/* Services Section */}
          <section className="mb-14">
            <h2 className="text-xl font-bold text-black mb-8 border-b border-blue-300 pb-3 tracking-wide">
              Our Cybersecurity Offerings Include:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map(({ icon, title, description }, idx) => (
                <div
                  key={idx}
                  className="group flex space-x-5 p-6 border border-gray-200 rounded-2xl shadow-sm bg-gray-50 hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1"
                  aria-label={title}
                  tabIndex={0}
                >
                  <div className="flex-shrink-0 flex items-center justify-center md:bg-blue-100 rounded-full p-3 md:shadow-lg transition-colors duration-300 group-hover:bg-blue-200">
                    {icon}
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-semibold text-blue-900 mb-1">{title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Section */}
          <section className="mb-14">
            <h2 className="text-xl font-bold text-black mb-6 border-b border-blue-300 pb-3 tracking-wide">
              Why Choose Andhus Technologies for Cybersecurity?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-gray-100 rounded-xl">
                {
                    reasons.map((reason,index)=>(
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
              Secure Your Business, Build Customer Trust, and Ensure Compliance.
            </h2>
            <p className="text-gray-700 mb-8 px-4 md:px-32 max-w-3xl mx-auto leading-relaxed tracking-wide">
              Partner with Andhus Technologies—your reliable Cybersecurity Services Provider.
            </p>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              sx={{ fontWeight: 'bold', px: 6, py: 1.5, textTransform: 'none', boxShadow: '0px 4px 15px rgba(41, 98, 255, 0.6)' }}
              onClick={openModal}
            >
              📞 Contact us today to schedule a free consultation
            </Button>
          </footer>
        </div>
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
            <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
              Contact Us
            </h3>
            <p className="mb-6 text-gray-700 text-center">
              Thank you for your interest! Please reach out via email at <a href="mailto:contact@andhustech.com" className="text-blue-600 underline">contact@andhustech.com</a> or call <a href="tel:+1234567890" className="text-blue-600 underline">+1 (234) 567-890</a>.
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

export default Cyber;

