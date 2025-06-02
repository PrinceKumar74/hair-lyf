import React from 'react';

// Placeholder image URLs - replace with your actual image paths or import them
const placeholderImageDesktop = "https://placehold.co/500x650/e2e8f0/cbd5e0?text=Story+Image";
const placeholderImageMobile = "https://placehold.co/350x450/e2e8f0/cbd5e0?text=Story+Image";

const AboutComp1 = () => {
  return (
    <div className="font-['Inter',_sans-serif] bg-[#D28F6F] p-6 md:p-12 lg:p-16 text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Flex container for layout */}
        <div className="flex flex-col md:flex-row items-center md:space-x-12">

          {/* Image Area - Order changes on mobile */}
          {/* Desktop Image - Hidden on small screens, appears first in flex row */}
          <div className="w-full md:w-5/12 order-1 md:order-1 mb-8 md:mb-0">
            <img
              src={placeholderImageDesktop}
              alt="The Story of Hairlife - Desktop"
              className="hidden md:block w-full h-auto rounded-lg object-cover shadow-lg"
              style={{ maxHeight: '650px' }} // Adjust as needed
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/500x650/e2e8f0/FF0000?text=Error+Loading+Image"; }}
            />
          </div>

          {/* Text Content Area */}
          <div className="w-full md:w-7/12 order-2 md:order-2 text-center md:text-left">
            <p className="text-sm uppercase tracking-wider mb-1">THE STORY OF</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">#HAIRLIFE</h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              My vision for HairOriginals is simple: make natural and
              extremely high-quality, ethically sourced hair available for all
              while making a positive impact on the world. When I first
              joined the beauty industry, I saw that the quality of hair was
              often tampered with, sourced through non-ethical means,
              and often misadvertised to consumers.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              Since hair is sourced
              from India, I saw an opportunity to create a homegrown
              company that could provide transparency to the industry
              and job opportunities for the underpriveleged, so I started
              Hair Originals.
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              I will continue to build Hair Originals as a
              brand that is a force for good, contributing positively to
              society through the beauty - one strand at a time.
            </p>
          </div>

           {/* Mobile Image - Hidden on medium and larger screens, appears after text */}
           <div className="w-full md:w-5/12 order-3 md:hidden mt-8 md:mt-0">
            <img
              src={placeholderImageMobile}
              alt="The Story of Hairlife - Mobile"
              className="block md:hidden w-full h-auto rounded-lg object-cover shadow-lg mx-auto"
              style={{ maxWidth: '350px', maxHeight: '450px' }} // Adjust as needed
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/350x450/e2e8f0/FF0000?text=Error+Loading+Image"; }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutComp1;
