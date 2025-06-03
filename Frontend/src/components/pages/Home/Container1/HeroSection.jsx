import React from "react";
import { motion } from "framer-motion";
import bigImg from '../../../../../public/assets/heroSection/bigImg.png';
import bottomRightImg from '../../../../../public/assets/heroSection/bottomRightImg.png';
import topLeftImg from '../../../../../public/assets/heroSection/topLeftImg.png';

// export default function WigPromo() {
//   return (
//     <div className="bg-red-100">
//     <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl px-10 md:px-20 sm:px-6 lg:px-8 py-12 lg:py-24  mx-auto w-full">
//       {/* Left Section */}
//       <div className="text-center lg:text-left max-w-xl space-y-6 mb-10 lg:mb-0 md:mr-5">
//         <div className="inline-block bg-[#F72C5B] text-white px-6 py-4 md:py-5 rounded-md tracking-widest">
//           <p className=" text-3xl sm:text-4xl xl:text-5xl" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 500 }}>
//           PREMIUM HAIR WIGS
//           </p>
//         </div>
//         <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-snug" style={{ fontFamily: '"Cormorant Garamond", serif'}}>
//           Unlock Your True Beauty With Our Exquisite Wigs
//         </h1>
//         <button className="mt-4 border-2 border-[#F72C5B] text-[#ec5b7d] px-10 py-3 rounded-md hover:bg-[#F72C5B] hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#F72C5B] focus:ring-opacity-50 text-lg">
//           Shop Now
//         </button>
//       </div>

//       {/* Right Section */}
//       <div className="relative w-full max-w-md lg:max-w-lg">
//         {/* Main Image */}
//         <img
//           src={bigImg}
//           alt="Main Wig Model"
//           className="rounded-lg w-full h-auto object-cover"
//         />

//         {/* Top Left Wig Image */}
//         <img
//           src={topLeftImg}
//           alt="Straight Wig"
//           className="absolute -top-6 -left-6 w-32 h-32 sm:w-40 sm:h-40 rounded-xl "
//         />

//         {/* Bottom Right Wig Image */}
//         <img
//           src={bottomRightImg}
//           alt="Comb with Wig"
//           className="absolute -bottom-6 -right-6 w-32 h-32 sm:w-40 sm:h-40 rounded-xl "
//         />

//         {/* Decorative corners */}
//         <div className="absolute top-0 right-0 w-10 h-1 bg-[#9C5C46] rounded-full"></div>
//         <div className="absolute bottom-0 right-0 w-1 h-10 bg-[#9C5C46] rounded-full"></div>
//       </div>
//     </div>
//     </div>
//   );
// }

// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen font-['Inter'] overflow-hidden">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-woman-posing-with-a-long-black-wig-44237-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
          Please update your browser or use a different one.
        </video>
        {/* semi-transparent overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Unlock your True Beauty
            <br />
            with our <span className="text-amber-400">Exquisite Wigs</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
            Discover our premium collection of hair extensions and wigs for every style and occasion.
          </p>
          <div className="mt-10">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-10 sm:py-4 sm:px-12 rounded-lg text-lg sm:text-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-75">
              Shop Now
            </button>
          </div>
        </div>

        {/* Decorative elements (optional) - ensure they are visible on the video */}
        <div className="hidden lg:block">
          <div
            className="absolute -bottom-10 -left-16 w-32 h-32 bg-pink-500/30 rounded-full blur-xl animate-blob"
            style={{ animationDelay: '0s' }}
          >
          </div>
          <div
            className="absolute -top-12 -right-16 w-36 h-36 bg-amber-500/30 rounded-xl blur-xl transform rotate-12 animate-blob"
            style={{ animationDelay: '2s' }}
          >
          </div>
          <div
            className="absolute bottom-[-4rem] right-[20%] w-24 h-24 bg-rose-500/40 rounded-full blur-lg animate-blob"
            style={{ animationDelay: '4s' }}
          >
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;