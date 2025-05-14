import React, { useState } from 'react';
import { ShieldCheck, Cloud, BarChart3, Settings, PieChart, X } from 'lucide-react';
import { FaUserTie, FaCogs, FaRegLightbulb, FaCheckCircle } from 'react-icons/fa';
import Button from '@mui/material/Button';

const dotNetServices = [
  {
    icon: <PieChart className="w-20 h-20 md:w-6 md:h-6 text-indigo-600 group-hover:text-indigo-900" />,
    title: 'Custom .NET Application Development',
    description:
      'From enterprise solutions to web and mobile apps, we build tailored .NET applications that align with your business objectives.',
  },
  {
    icon: <BarChart3 className="w-20 h-20 md:w-6 md:h-6 text-indigo-600 group-hover:text-indigo-900" />,
    title: 'Legacy System Modernization',
    description:
      'We help upgrade and migrate outdated systems to modern, scalable .NET architectures—enhancing performance and maintainability.',
  },
  {
    icon: <ShieldCheck className="w-20 h-20 md:w-6 md:h-6 text-indigo-600 group-hover:text-indigo-900" />,
    title: 'API & System Integration',
    description:
      'Seamlessly connect your .NET apps with third-party services, internal tools, and databases for smooth operations and real-time data flow.',
  },
  {
    icon: <Cloud className="w-20 h-20 md:w-6 md:h-6 text-indigo-600 group-hover:text-indigo-900" />,
    title: '.NET Maintenance & Support',
    description:
      'Reliable post-deployment support, optimization, and troubleshooting to ensure your applications run efficiently.',
  },
];

const dotNetReasons = [
  {
    title: 'Deep .NET Expertise',
    description: 'Years of experience delivering high-quality .NET applications across industries.',
    icon: <FaUserTie className="w-36 h-36 m-auto text-gray-700 mx-auto" />,
  },
  {
    title: 'Flexible Engagement Models',
    description: 'Outsourcing, staff augmentation, or direct placement—we do it all.',
    icon: <FaCogs className="w-36 h-36 m-auto text-[#4a63d1] mx-auto" />,
  },
  {
    title: 'Certified & Experienced Developers',
    description: 'Our team brings proven skills, agile mindset, and real-world knowledge.',
    icon: <FaRegLightbulb className="w-36 h-36 m-auto text-[#f59e0b] mx-auto" />,
  },
  {
    title: 'Cost-Effective & Scalable',
    description: 'Get the right skills at the right time—without long-term overhead.',
    icon: <FaCheckCircle className="w-36 h-36 m-auto text-[#059669] mx-auto" />,
  },
];

const DotNetServices = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="font-sans mt-18 flex flex-col">
        <div className="w-full bg-white shadow-2xl rounded-xl p-8 md:p-12 animate-fadeIn">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-2xl font-extrabold text-gray-900 mb-2 leading-tight">
              .NET Development & Resource Staffing Services
            </h1>
            <p className="text-lg text-gray-600 font-semibold tracking-wide">
              Scalable Solutions. Skilled Talent. Seamless Delivery.
            </p>
          </header>

          {/* Content */}
          <section className="mb-14">
            <h2 className="text-lg font-semibold text-gray-700 mb-6">
              At Intelli Tek IT Solutions, we specialize in providing top-tier .NET development services and
              resource staffing solutions to help businesses build robust, scalable, and secure applications.
              Whether you're looking to outsource a full .NET project or hire skilled professionals to augment
              your in-house team, we deliver the right talent and technology expertise to drive success.
              As a trusted IT consulting partner, we offer flexibility, speed, and quality—ensuring your
              business stays agile and ahead in a rapidly evolving digital landscape.
            </h2>
          </section>

          {/* Our .NET Services Include */}
          <section className="mb-14">
            <h2 className="text-xl font-bold text-black mb-8 border-b border-indigo-300 pb-3 tracking-wide">
              Our .NET Services Include:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dotNetServices.map(({ icon, title, description }, idx) => (
                <div
                  key={idx}
                  className="group flex space-x-5 p-6 border border-gray-200 rounded-2xl shadow-sm bg-gray-50 hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1"
                >
                  <div className="flex-shrink-0 flex items-center justify-center md:bg-indigo-100 rounded-full p-3 md:shadow-lg transition-colors duration-300 group-hover:bg-indigo-200">
                    {icon}
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-semibold text-indigo-900 mb-1">{title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* .NET Resource Staffing & Outsourcing Solutions */}
          <section className="mb-14">
            <h2 className="text-xl font-bold text-black mb-8 border-b border-indigo-300 pb-3 tracking-wide">
              .NET Resource Staffing & Outsourcing Solutions
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
              <li>Contract, Contract-to-Hire & Full-Time Staffing</li>
              <li>Flexible hiring models to suit your project timeline and budget</li>
              <li>Onshore, Offshore & Hybrid Models</li>
              <li>Access a global talent pool while maintaining control and collaboration</li>
              <li>Pre-Vetted .NET Experts</li>
              <li>All our candidates go through a rigorous screening process to ensure technical proficiency and cultural fit</li>
              <li>Rapid Deployment</li>
              <li>Quick turnaround time in sourcing and onboarding resources—so your project doesn’t lose momentum</li>
            </ul>
          </section>

          {/* Technologies We Support */}
          <section className="mb-14">
            <h2 className="text-xl font-bold text-black mb-8 border-b border-indigo-300 pb-3 tracking-wide">
              Technologies We Support:
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>ASP.NET Core & MVC</li>
              <li>.NET 6/7/8</li>
              <li>C#, VB.NET</li>
              <li>Entity Framework</li>
              <li>Blazor</li>
              <li>Azure App Services & Functions</li>
              <li>SQL Server & NoSQL Databases</li>
              <li>RESTful API & Microservices Architecture</li>
            </ul>
          </section>

          {/* Why Choose [Your Company Name] */}
          <section className="mb-14">
            <h2 className="text-xl font-bold text-black mb-6 border-b border-indigo-300 pb-3 tracking-wide">
              Why Choose Intelli Tek IT Solutions?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-gray-100 rounded-xl">
              {dotNetReasons.map((reason, index) => (
                <div
                  className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 text-center"
                  key={index}
                >
                  <div className="mt-4 flex justify-center">{reason.icon}</div>
                  <h1 className="text-lg mt-2 font-semibold p-4 mb-2">{reason.title}</h1>
                  <p>{reason.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Footer / CTA */}
          <footer className="text-center">
            <h2 className="text-2xl font-semibold text-black mb-4 drop-shadow-sm">
              Build Better with .NET. Scale Smarter with Intelli Tek IT .
            </h2>
            <p className="text-gray-700 mb-8 px-4 md:px-32 max-w-3xl mx-auto leading-relaxed tracking-wide">
              Contact us today to learn how our .NET development and staffing services can support your next project or team expansion.
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
                boxShadow: '0px 4px 15px rgba(99, 102, 241, 0.6)',
              }}
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
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-indigo-900 mb-4 text-center">Contact Us</h3>
            <p className="mb-6 text-gray-700 text-center">
              Reach out via email at{' '}
              <a href="mailto:contact@intellitek.com" className="text-indigo-600 underline">
                contact@intellitek.com
              </a>{' '}
              or call{' '}
              <a href="tel:+1234567890" className="text-indigo-600 underline">
                +1 (234) 567-890
              </a>
              .
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

export default DotNetServices;
