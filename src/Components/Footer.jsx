import React from 'react';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-40  md:mt-auto w-full">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Intelli Tek IT Solutions</h2>
          <p className="text-xl text-gray-400">
            Empowering businesses through innovative IT solutions and expert resource staffing across domains.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="flex items-center text-sm text-gray-300 mb-1">
            <Phone className="h-4 w-4 mr-2" />+1 (727) 641-3777

          </p>
          <p className="flex items-center text-sm text-gray-300">
            <Mail className="h-4 w-4 mr-2" />contact@intellitekits.com
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:contact@intellitekits.com" className="hover:text-green-400 transition">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Intelli Tek IT Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
