
// import React from "react";
// import girl from "../../../../public/hair/heroSectionImage.png";
// // import boy from "../../../../public/hair/boy.png";

// const HeroSection = () => {
//   return (
//     <div className="bg-[#FFF8F8] px-12 pt-16 flex flex-col lg:flex-row items-center justify-between">
//       {/* Left Text Section */}
//       <div className="max-w-xl text-center lg:text-left md:ml-12 lg:ml-20">
//         <div className="bg-[#AA5BAE] text-white font-bold inline-block px-7 py-4 rounded-md text-base md:text-3xl lg:text-4xl xl:text-5xl mb-6">
//           PREMIUM HAIR WIGS
//         </div>
//         <h1 className="text-5xl lg:text-6xl font-serif text-gray-900 mb-10 leading-snug">
//           Unlock Your True <br /> Beauty With Our <br /> Exquisite Wigs
//         </h1>
//         <button className="mt-4 px-7 py-3 border-2 border-[#AA5BAE] text-lg font-semibold rounded-md hover:bg-purple-50 transition">
//           Shop Now
//         </button>
//       </div>

//       {/* Right Girl Image Only */}
//       <div className="mt-12 lg:mt-0 relative flex justify-center">
      
          
//         <img
//           src={girl}
//           alt="Girl"
//           className="w-[300px] lg:w-[400px] -ml-8 lg:-ml-16 z-20 relative"
//         />
//       </div>
//     </div>
//   );
// };

// export default HeroSection;































// import React from "react";
// import bigImg from '../../../../../public/assets/heroSection/bigImg.png';
// import bottomRightImg from '../../../../../public/assets/heroSection/bottomRightImg.png';
// import topLeftImg from '../../../../../public/assets/heroSection/topLeftImg.png';

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
    <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 py-16 md:py-24 lg:py-32 font-['Inter'] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Text Content */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Unlock your True Beauty
            <br />
            with our <span className="text-amber-600">Exquisite Wigs</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our premium collection of hair extensions and wigs for every style and occasion.
          </p>
          <div className="mt-10">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-10 sm:py-4 sm:px-12 rounded-lg text-lg sm:text-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-75">
              Shop Now
            </button>
          </div>
        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto relative"> {/* Controls the max width of the video container */}
          <div className="aspect-w-16 aspect-h-9 rounded-xl shadow-2xl overflow-hidden border-4 border-white bg-gray-800">
            {/*
              IMPORTANT: Replace with your video source.
              The video should ideally be in a 16:9 aspect ratio for best fit.
            */}
            <video
              className="w-full h-full object-cover"
              // src="YOUR_VIDEO_URL.mp4" // <<<< REPLACE THIS WITH YOUR VIDEO FILE PATH OR URL
              // poster="YOUR_POSTER_IMAGE_URL.jpg" // Optional: poster image before video loads
              autoPlay
              loop
              muted  // Muted is often required for autoplay to work in browsers
              playsInline // Important for iOS autoplay and to play inline without going fullscreen
              // controls // Uncomment to show default video controls
            >
              {/* Provide a source URL for your video. You can have multiple source tags for different formats. */}
              {/* Example video - REPLACE THIS with your actual video */}
              <source src="https://assets.mixkit.co/videos/preview/mixkit-woman-posing-with-a-long-black-wig-44237-large.mp4" type="video/mp4" />
              Your browser does not support the video tag.
              Please update your browser or use a different one.
            </video>
            {/*
              If you don't have a video source yet, or if the video fails to load,
              you can use a placeholder div like this (remove or comment out the <video> tag above):
            */}
            {/*
            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200">
              <svg className="w-16 h-16 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.55a1 1 0 01.45.83V15a1 1 0 01-1.45.83L15 14.17V10zM4 6h11M4 10h11M4 14h5m0 0l-3.5-3.5M10 18h1m-7-4h7m4 0h1M4 6h11M4 10h11M4 14h5m0 0l-3.5-3.5M10 18h1"></path></svg>
              <p className="text-gray-500 text-xl">Your Awesome Video Here</p>
              <p className="text-gray-400 text-sm">Video loading or not available.</p>
            </div>
            */}
          </div>

          {/* Decorative elements (optional, inspired by the small overlays in the original image) */}
          {/* These are positioned relative to the 'max-w-4xl mx-auto' div */}
          <div className="hidden lg:block"> {/* Hide on smaller screens to prevent clutter */}
            <div 
                className="absolute -bottom-10 -left-16 w-32 h-32 bg-pink-200/50 rounded-full -z-10 blur-xl animate-blob">
            </div>
            <div 
                className="absolute -top-12 -right-16 w-36 h-36 bg-amber-200/50 rounded-xl -z-10 blur-xl transform rotate-12 animate-blob animation-delay-2000">
            </div>
             <div 
                className="absolute bottom-[-4rem] right-[20%] w-24 h-24 bg-rose-200/60 rounded-full -z-10 blur-lg animate-blob animation-delay-4000">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// To use this component in your App.js or another page:
// import HeroSection from './components/HeroSection'; // Adjust path as needed
//
// function App() {
//   return (
//     <div>
//       <HeroSection />
//       {/* Other sections of your app */}
//     </div>
//   );
// }
// export default App;














