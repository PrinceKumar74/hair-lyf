import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const TryOur3DVirtualHair = () => {
  const bgColor = '#FFEEF0';
  const headingColor = '#FFFFFF';
  const barColor = '#E91E63';

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section style={{ backgroundColor: bgColor }} className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div 
            className="md:col-span-1 text-center md:text-left"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0, x: -50 },
              animate: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              style={{ backgroundColor: barColor, color: headingColor }} 
              className="inline-block px-6 py-3 rounded-xl lg:px-12 lg:py-4 uppercase font-bold text-xl lg:text-3xl tracking-wider shadow-lg transform hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              FIND YOUR PERFECT MATCH
            </motion.div>
    <section style={{ backgroundColor: '#FFFFFF' }} className="w-full py-10 md:py-16 font-sans"> {/* Default to sans-serif, serif for specific heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#BF5B38] text-center mb-8 md:mb-12 px-4">
        2D Try-On
      </h1>
      {/* Increased max-width from max-w-5xl to max-w-7xl for a wider layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column: Image */}
          <div className="flex justify-center md:justify-end md:pr-6"> {/* Changed to md:justify-end to push image a bit to the right if needed */}
            {/* Container for the image with its specific background */}
            {/* Increased max-width for the image container to allow it to be larger if the original image is large enough */}
            <div className="bg-[#506676] p-0 rounded-xl shadow-xl overflow-hidden max-w-md lg:max-w-lg w-full"> {/* Adjusted max-width from max-w-sm */}
              <img
                src={modelImageUrl}
                alt="Model trying on a wig virtually"
                className="w-full h-auto object-cover display-block" // ensure image displays correctly
              />
            </div>
          </div>

            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-serif mt-8 text-gray-800 leading-tight font-bold"
              variants={fadeInUp}
            >
              Try Our 3D Virtual Hair
            </motion.h2>

            <motion.p 
              className="text-lg md:text-xl lg:text-2xl font-serif mt-4 text-gray-700 italic"
              variants={fadeInUp}
            >
              See Your New Look Instantly!
            </motion.p>

            <motion.div 
              className="flex items-center justify-center md:justify-start mt-10 space-x-6"
              variants={fadeInUp}
            >
              <motion.img 
                src="/camera.png" 
                alt="Camera icon" 
                className="w-16 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
              <Link to='/tryOn' className="relative">
                <button className="group relative overflow-hidden rounded-xl bg-transparent border-2 border-[#E91E63] text-[#E91E63] px-10 py-3 text-lg lg:text-2xl font-bold transition-all duration-300 hover:text-white">
                  <span className="absolute inset-0 bg-[#E91E63] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Try Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="md:col-span-1 relative mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img 
                src="/hair/woman.png" 
                alt="Woman using virtual hair try-on app" 
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-pink-100/20 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
          {/* Right Column: Text and Button */}
          <div className="text-center md:text-left pt-6 md:pt-0 md:pl-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900"> {/* Slightly increased text size for larger screens */}
              Try on Wigs Virtually
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mt-3 mb-6 leading-relaxed"> {/* Slightly increased text size */}
              Experience our virtual try-on feature and see how different wigs look on you before you buy.
            </p>
            <Link to='/tryOn' className="inline-block">
              <button
                className="bg-[#B95C40] text-white px-8 sm:px-10 lg:px-12 py-3 lg:py-4 rounded-lg text-lg lg:text-xl font-semibold hover:bg-opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B95C40] focus:ring-opacity-50 shadow-md hover:shadow-lg" // Adjusted padding and text size
              >
                Try Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryOur3DVirtualHair;