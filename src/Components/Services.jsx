import React, { useState } from 'react'
import { TbBulb } from "react-icons/tb";
import { FaHandshake } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaCog } from "react-icons/fa"; 
import { ShieldCheck } from 'lucide-react';
import { BrainCircuit } from 'lucide-react';
import { Cloudy } from 'lucide-react';
import { FaCodepen } from "react-icons/fa";
import { FaSalesforce } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { Bot } from 'lucide-react';
import { HiMiniCpuChip } from "react-icons/hi2";
import { Link } from 'react-router';
export default function Services() {
  const sets = [
    {
      title: "Cutting-Edge Innovation",
      icon: <TbBulb className="w-36 h-36 text-yellow-300" />,
      description: "We embrace the latest technologies and methodologies to deliver forward-thinking solutions that drive real business value"
    },
    {
      title: "Skilled & Diverse Talent Pool",
      icon: <FaUserFriends className="w-36 h-36 text-violet-400" />,
      description: "Our team is composed of passionate professionals with expertise across a wide range of domains, creating a collaborative environment where ideas thrive"
    },
    {
      title: "Global Opportunities",
      icon: <FaGlobeAmericas className="w-36 h-36 text-sky-400" />,
      description: "With projects and partners across the globe, our consultants work on impactful assignments that span industries and borders."
    },
    {
      title: "Client-Centric Approach",
      icon: <FaHandshake className="w-36 h-36 text-green-400" />,
      description: "Our consultancy is built on a deep understanding of our clients’ unique needs, enabling us to offer tailored strategies that produce measurable results."
    },
    {
      title: "Culture of Learning & Growth",
      icon: <FaBookOpenReader className="w-36 h-36 text-gray-700" />,
      description: "We invest in our people through training, mentorship, and leadership development—ensuring continuous upskilling and career advancement."
    },
    {
      title: "Agile and Adaptive",
      icon: <FaCog className="w-36 h-36 text-[#259f97]" />,
      description: "We respond quickly to evolving technology trends and business landscapes, offering flexible and scalable consulting solutions."
    },
  ];

  const Services = [
    {
      title: "Cybersecurity Services",
      discription: "Cybersecurity Services by Intelli Tek IT Solutions Technologies Protecting What Matters Most – Your Data",
      icon: <ShieldCheck className='w-46 h-46 m-auto text-[#0078d1] opacity-95' />,
      link: "/cyber"
    },
    {
      title: "Business Intelligence (BI) Consulting Services",
      discription: "Unlock the Power of Data-Driven Decision Making",
      icon: <BrainCircuit className='w-46 h-46 m-auto text-[#834696]' />,
      link: "/bussiness"
    },
    {
      title: ".NET Development & Resource Staffing Services",
      discription: "Scalable Solutions. Skilled Talent. Seamless Delivery",
      icon: <FaCodepen className='w-46 h-46 m-auto text-lime-400' />,
      link: "/.net"
    },
    {
      title: "Salesforce Consulting & Resource Staffing Services",
      discription: "Empowering Your Business with Certified Salesforce Talent",
      icon: <FaSalesforce className='w-46 h-46 m-auto text-sky-500' />,
      link: "/salesforce"
    },
    {
      title: "Java Development & Resource Staffing Services",
      discription: "Robust Java Solutions Backed by Skilled Talent",
      icon: <FaJava className='w-46 h-46 m-auto text-yellow-300' />,
      link: "/java"
    },
    {
      title: "AWS Consulting & Resource Staffing Services",
      discription: "Cloud-Ready Talent. Scalable Solutions. Real Results.",
      icon: <FaAws className='w-46 h-46 m-auto text-slate-900' />,
      link: "/aws"
    },
    {
      title: "AI Consulting & Resource Staffing Services",
      discription: "Smart Solutions. Skilled Talent. Scalable Success.",
      icon: <Bot className='w-46 h-46 m-auto text-blue-600' />,
      link: "/ai"
    }
  ];

  return (
    <div>
      <div className="py-12 mt-14 px-6 text-center bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Join Our Team – Where Innovation Meets Impact in IT Consulting</h1>
        <h3 className="text-lg text-gray-600 max-w-4xl mx-auto">
          At the forefront of technological transformation, we invite you to be part of a dynamic team that’s shaping the future of IT consultancy. When you join us, you're not just taking a job—you’re stepping into a culture of innovation, collaboration, and continuous growth.
        </h3>
      </div>

      {/* What Sets Us Apart */}
      <div className="py-12 px-6 text-center bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">What Sets Us Apart</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-6 md:p-10 bg-gray-100">
          {sets.map((set, index) => (
            <div
              className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 text-center"
              key={index}
            >
              <div className="mt-4 flex justify-center">{set.icon}</div>
              <h1 className="text-lg mt-2 font-semibold p-4 mb-2">{set.title}</h1>
              <p>{set.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 px-6 text-center bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Detailed Service Section</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-gray-100 rounded-xl">
        {Services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 text-center"
          >
            <div>{service.icon}</div>
            <h2 className="mt-4 text-xl font-semibold">{service.title}</h2>
            <p className="text-sm text-gray-700">{service.discription}</p>
            <button className="text-blue-500 text-xl pt-2 font-bold hover:underline">
              <Link to={service.link}>Explore &#10503;</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

