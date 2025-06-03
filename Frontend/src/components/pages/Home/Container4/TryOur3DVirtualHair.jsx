import React from 'react';
import { Link } from "react-router-dom";

const TryOur3DVirtualHair = () => {
  // Placeholder: Replace with the actual path to the model image
  // This is the image of the person that will appear in the left column.
  const modelImageUrl = '/hair/2dWoman.png'; // e.g., '/images/curly-hair-model.jpg'

  return (
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