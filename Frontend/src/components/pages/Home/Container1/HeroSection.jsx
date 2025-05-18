import React from "react";
import { motion } from "framer-motion";
import bigImg from '../../../../../public/assets/heroSection/bigImg.png';
import bottomRightImg from '../../../../../public/assets/heroSection/bottomRightImg.png';
import topLeftImg from '../../../../../public/assets/heroSection/topLeftImg.png';

export default function WigPromo() {
  return (
    <div className="bg-gradient-to-br from-neutral-50 to-stone-100">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl px-6 md:px-12 lg:px-8 py-16 lg:py-28 mx-auto w-full relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-stone-100 rounded-full filter blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neutral-200 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

        {/* Left Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left max-w-xl space-y-8 mb-12 lg:mb-0 md:mr-8 relative z-10"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="inline-block bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white px-8 py-5 rounded-xl shadow-lg transform hover:shadow-2xl transition-all duration-300"
          >
            <p className="text-3xl sm:text-4xl xl:text-5xl font-medium tracking-wider" style={{ fontFamily: '"Poppins", sans-serif' }}>
              PREMIUM HAIR WIGS
            </p>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight bg-gradient-to-r from-[#5C3D2E] to-[#8B4513] bg-clip-text text-transparent" style={{ fontFamily: '"Cormorant Garamond", serif'}}>
            Unlock Your True Beauty With Our Exquisite Wigs
          </h1>
          
          <p className="text-stone-700 text-lg leading-relaxed">
            Discover our collection of premium wigs crafted with the finest materials for a natural look and comfortable feel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white px-10 py-4 rounded-xl shadow-lg hover:from-[#A0522D] hover:to-[#8B4513] transition-all duration-300 text-lg font-medium"
            >
              Shop Now
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#8B4513] text-[#8B4513] px-10 py-4 rounded-xl hover:bg-[#8B4513] hover:text-white transition-all duration-300 text-lg font-medium"
            >
              View Collection
            </motion.button>
          </div>

          {/* Feature Points */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#8B4513]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span className="text-stone-700">Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#8B4513]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span className="text-stone-700">Natural Look</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#8B4513]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span className="text-stone-700">Custom Fitting</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#8B4513]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span className="text-stone-700">Expert Styling</span>
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-md lg:max-w-lg"
        >
          {/* Main Image */}
          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            src={bigImg}
            alt="Main Wig Model"
            className="rounded-2xl w-full h-auto object-cover shadow-2xl"
          />

          {/* Top Left Wig Image */}
          <motion.img
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            src={topLeftImg}
            alt="Straight Wig"
            className="absolute -top-8 -left-8 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
          />

          {/* Bottom Right Wig Image */}
          <motion.img
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            src={bottomRightImg}
            alt="Comb with Wig"
            className="absolute -bottom-8 -right-8 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
          />

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-12 h-2 bg-gradient-to-r from-[#8B4513] to-[#A0522D] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-2 h-12 bg-gradient-to-b from-[#8B4513] to-[#A0522D] rounded-full"></div>
        </motion.div>
      </div>
    </div>
  );
}













