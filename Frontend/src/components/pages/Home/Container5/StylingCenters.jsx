import React from 'react';
import delhi from '../../../../../public/assets/citiesSection/delhi.png';
import mumbai from '../../../../../public/assets/citiesSection/mumbai.png';
import pune from '../../../../../public/assets/citiesSection/pune.png';

const centers = [
  {
    image: delhi,
    label: 'Delhi',
    description: 'Visit our flagship store in the heart of Delhi',
    address: 'Connaught Place, New Delhi'
  },
  {
    image: mumbai,
    label: 'Mumbai',
    description: 'Experience luxury hair care in Mumbai',
    address: 'Bandra West, Mumbai'
  },
  {
    image: pune,
    label: 'Pune',
    description: 'Premium hair extensions in Pune',
    address: 'Koregaon Park, Pune'
  },
];

export default function OfflineCenters() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="relative inline-block">
              Our Offline Centers
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-red-600 rounded-full transform scale-x-75"></div>
            </span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Visit our premium locations to experience our exclusive collection of hair extensions. 
            Book a consultation with our experts today.
          </p>
        </div>

        {/* Centers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-4 md:px-8">
          {centers.map((center, index) => (
            <div
              key={index}
              className="flex flex-col items-center group"
            >
              {/* Circle Container */}
              <div className="relative mb-6 transition-transform duration-500 ease-out transform group-hover:-translate-y-2">
                <div className="w-72 h-72 rounded-full border-2 border-red-600 flex items-center justify-center bg-white shadow-lg transition-all duration-300 group-hover:shadow-2xl overflow-hidden">
                  <div className="w-48 h-48 relative transition-transform duration-300 group-hover:scale-110">
                    <img 
                      src={center.image} 
                      alt={center.label} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -inset-0.5 rounded-full bg-red-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="absolute -inset-2 rounded-full border border-red-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Text Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{center.label}</h3>
                <p className="text-gray-600 mb-3 leading-relaxed">{center.description}</p>
                <p className="text-sm text-red-600 font-medium">{center.address}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg">
            Ready to transform your look? Visit us at your nearest center.
          </p>
        </div>
      </div>
    </section>
  );
}
