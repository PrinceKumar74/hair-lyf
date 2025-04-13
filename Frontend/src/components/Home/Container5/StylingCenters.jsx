import React from 'react';
import delhi from '../../../../public/cities/delhi.png';
import mumbai from '../../../../public/cities/mumbai.png';
import pune from '../../../../public/cities/pune.png';
import { m } from 'framer-motion';

const centers = [
  {
    name: 'Delhi',
    img: delhi, // Replace with actual SVGs or URLs
  },
  {
    name: 'Mumbai',
    img: mumbai
  },
  {
    name: 'Pune',
    img: pune
  },
];
const StylingCenters = () => {
    return (
      <div className="max-w-7xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b border-black pb-2">OUR STYLING CENTERS</h2>
        <p className="text-gray-600">
          Visit us in person for expert consultations, product trials, and hands-on wig fitting.
          <br className="hidden sm:block" />
          We welcome all genders and hair goals
        </p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-items-center">
          {centers.map((center) => (
            <div key={center.name} className="flex flex-col items-center">
              <img
                src={center.img}
                alt={center.name}
                className="w-72 h-72 sm:w-96 sm:h-96 md:w-fit md:h-fit lg:w-fit lg:h-fit transition-all duration-300"
              />
              <h3 className="text-xl md:text-2xl font-bold">{center.name}</h3>
            </div>
          ))}
  
          <div className="flex flex-col justify-center items-center">
            <p className="text-lg md:text-xl text-gray-600">
              See You Soon in <br /> Another City
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default StylingCenters;