import { FaRegClock  } from 'react-icons/fa';
import { LuMapPin } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";

import React from 'react';

// Import your images here as specified
import delhi from '../../../../../public/cities/delhi.png';
import mumbai from '../../../../../public/cities/mumbai.png';
import hyderabad from '../../../../../public/cities/hyderabad.png';
import container from '../../../../../public/cities/container.jpg';

// A reusable card component for better structure and maintainability (No changes here)
const CenterCard = ({ center }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out w-full max-w-sm">
    <div className="w-full h-56">
      <img
        src={center.image}
        alt={`${center.name} location`}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{center.name}</h3>
      
      <div className="flex items-start mb-4 text-gray-600">
        <LuMapPin className="text-[#c5a781] w-5 h-5 mr-3 mt-1 flex-shrink-0" />
        <div>
          <p className="font-semibold text-gray-700">Address</p>
          <p>{center.address}</p>
        </div>
      </div>
      
      <div className="flex items-start text-gray-600 mb-6">
        <FaRegClock className="text-[#c5a781] w-5 h-5 mr-3 mt-1 flex-shrink-0" />
        <div>
          <p className="font-semibold text-gray-700">Operating Hours</p>
          <p>{center.hours.weekdays}</p>
          <p>Sun: {center.hours.sunday}</p>
        </div>
      </div>
      
      <button className="w-full bg-gray-800 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-300 ">
        Book an Appointment
      </button>
    </div>
  </div>
);


const ImprovedOfflineCenters = () => {
  const centers = [
    {
      name: 'Delhi Center',
      image: delhi,
      address: '123 Fashion Street, South Delhi, Delhi',
      hours: {
        weekdays: 'Mon-Sat: 10 AM - 8 PM',
        sunday: 'Closed',
      },
    },
    {
      name: 'Mumbai Center',
      image: mumbai,
      address: '123 Fashion Street, South Mumbai, Mumbai',
      hours: {
        weekdays: 'Mon-Sat: 10 AM - 8 PM',
        sunday: 'Closed',
      },
    },
    {
      name: 'Hyderabad Center',
      image: hyderabad,
      address: '123 Fashion Street, Hitech City, Hyderabad',
      hours: {
        weekdays: 'Mon-Sat: 10 AM - 8 PM',
        sunday: 'Closed',
      },
    },
  ];

  return (
    <div className="bg-gray-50 font-sans">
      {/* Enhanced Hero Section */}
      <div
        className="relative bg-cover bg-center text-white mx-4 md:mx-8 mt-8 rounded-2xl overflow-hidden min-h-[70vh]" // MODIFIED: Added margins, rounded corners, and min-height
        style={{ backgroundImage: `url(${container})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        {/* MODIFIED: Changed flex alignment to push content to the bottom */}
        <div className="relative z-10 h-full flex flex-col justify-end items-center container mx-auto px-6 pb-20 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.6)'}}>
            Visit Our Offline Centers
          </h1>
          <p className="max-w-3xl text-lg md:text-xl text-gray-200 mb-8">
            Experience the luxury of Luxe Locks in person. Our expert stylists provide personalized consultations to find your perfect match.
          </p>
          <button className="flex items-center gap-3 bg-[#c5a781] text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg">
            <SlCalender />
            Book a Consultation
          </button>
        </div>
      </div>

      {/* Centers Information Section (No changes here) */}
      <div className="py-20">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                 <h2 className="text-4xl font-bold text-gray-800">Our Locations</h2>
                 <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Find a serene and luxurious environment near you. Explore our full range of extensions and get expert advice.
                 </p>
            </div>
          
          <div className="flex flex-wrap justify-center items-stretch gap-8 lg:gap-12">
            {centers.map((center, index) => (
              <CenterCard key={index} center={center} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprovedOfflineCenters;