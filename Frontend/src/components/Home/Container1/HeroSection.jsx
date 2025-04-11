
import React from "react";
import girl from "../../../../public/hair/heroSectionImage.png";
// import boy from "../../../../public/hair/boy.png";

const HeroSection = () => {
  return (
    <div className="bg-[#FFF8F8] px-12 pt-16 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Text Section */}
      <div className="max-w-xl text-center lg:text-left md:ml-12 lg:ml-20">
        <div className="bg-[#AA5BAE] text-white font-bold inline-block px-7 py-4 rounded-md text-base md:text-3xl lg:text-4xl xl:text-5xl mb-6">
          PREMIUM HAIR WIGS
        </div>
        <h1 className="text-5xl lg:text-6xl font-serif text-gray-900 mb-10 leading-snug">
          Unlock Your True <br /> Beauty With Our <br /> Exquisite Wigs
        </h1>
        <button className="mt-4 px-7 py-3 border-2 border-[#AA5BAE] text-lg font-semibold rounded-md hover:bg-purple-50 transition">
          Shop Now
        </button>
      </div>

      {/* Right Girl Image Only */}
      <div className="mt-12 lg:mt-0 relative flex justify-center">
      
          
        <img
          src={girl}
          alt="Girl"
          className="w-[300px] lg:w-[400px] -ml-8 lg:-ml-16 z-20 relative"
        />
      </div>
    </div>
  );
};

export default HeroSection;
