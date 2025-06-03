import React from 'react';

// Placeholder image URLs - replace with your actual image paths or import them
const placeholderDesktopImage = "https://placehold.co/600x400/e2e8f0/cbd5e0?text=Desktop+Image";
const placeholderMobileImage = "https://placehold.co/400x300/e2e8f0/cbd5e0?text=Mobile+Image";

const AboutComp = () => {
  return (
    <div className="font-['Inter',_sans-serif] bg-white p-6 md:p-12 lg:p-16">
      <div className="container mx-auto max-w-6xl">
        {/* Flex container for layout - reverses on mobile */}
        <div className="flex flex-col md:flex-row items-center md:space-x-12">

          {/* Text Content Area */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <p className="text-sm text-orange-500 mb-2">[About Us]</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              A love for <span className="text-orange-500">beauty</span>, <span className="text-orange-500">quality</span> and <span className="text-orange-500">strength</span>.
            </h1>
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              We believe that to truly love a piece of hair extension means to utilize every inch of it, to empower those who spend on it and to honour those who craft it.
            </p>
            <button
              className="px-8 py-3 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
            >
              Explore
            </button>
          </div>

          {/* Image Area - Conditional rendering for different images or use CSS to hide/show */}
          <div className="w-full md:w-1/2">
            {/* Desktop Image - Hidden on small screens */}
            <img
              src={placeholderDesktopImage}
              alt="About us - Desktop"
              className="hidden md:block w-full h-auto rounded-lg shadow-lg object-cover"
              style={{ maxHeight: '500px' }} // Optional: constrain height
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/e2e8f0/FF0000?text=Error+Loading+Image"; }}
            />
            {/* Mobile Image - Hidden on medium and larger screens */}
            <img
              src={placeholderMobileImage}
              alt="About us - Mobile"
              className="block md:hidden w-full h-auto rounded-lg shadow-lg object-cover mt-8 md:mt-0"
              style={{ maxHeight: '400px' }} // Optional: constrain height
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/e2e8f0/FF0000?text=Error+Loading+Image"; }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;