// src/components/Aboutcomp2.jsx
import React from 'react';

// Placeholder images - replace with your actual image paths or URLs
const placeholderImage1 = 'https://placehold.co/400x300/E0C9A6/704214?text=Sustainable+Sourcing';
const placeholderImage2 = 'https://placehold.co/400x300/D6BFA8/704214?text=Premium+Quality+Hair';
const placeholderImage3 = 'https://placehold.co/400x300/F0E0D0/704214?text=Happy+Customer';

// This component will render each item (image, title, text)
const AboutItem = ({ imgSrc, title, text, altText }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={imgSrc}
        alt={altText}
        className="w-full max-w-xs h-48 sm:h-56 md:h-64 object-cover rounded-lg mb-5 shadow-md"
        onError={(e) => {
          e.target.onerror = null; // prevent infinite loop if placeholder also fails
          e.target.src = `https://placehold.co/400x300/CCCCCC/A0A0A0?text=Image+Not+Found`;
          e.target.alt = "Image not found";
        }}
      />
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-md">{text}</p>
    </div>
  );
};

const Aboutcomp2 = () => {
  const itemsData = [
    {
      imgSrc: placeholderImage1,
      title: 'Sustainable Sourcing',
      text: 'My vision for HairOriginals is simple: make natural and extremely high-quality, ethically sourced hair available for all while making a positive impact on the world.',
      altText: 'Hand holding ethically sourced hair extensions with yellow flowers',
    },
    {
      imgSrc: placeholderImage2,
      title: 'Premium Quality',
      text: 'My vision for HairOriginals is simple: make natural and extremely high-quality, ethically sourced hair available for all while making a positive impact on the world.',
      altText: 'Close-up of premium quality hair extensions',
    },
    {
      imgSrc: placeholderImage3,
      title: 'Premium Quality', // The image shows "Premium Quality" for the third card as well.
      text: 'My vision for HairOriginals is simple: make natural and extremely high-quality, ethically sourced hair available for all while making a positive impact on the world.',
      altText: 'Woman smiling and holding a hair wig',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-amber-700 mb-12 md:mb-16">
          Why We Do What We Do
        </h2>
        {/* Grid layout for the items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-10">
          {itemsData.map((item, index) => (
            <AboutItem
              key={index}
              imgSrc={item.imgSrc}
              title={item.title}
              text={item.text}
              altText={item.altText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aboutcomp2;