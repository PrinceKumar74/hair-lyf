// src/components/AboutComp3.jsx
import React, { useState, useRef, useEffect } from 'react';

// Placeholder images - replace with your actual image paths or URLs
const clientImage1 = 'https://placehold.co/200x200/E0C9A6/704214?text=Client+1';
const clientImage2 = 'https://placehold.co/200x200/D6BFA8/704214?text=Client+2';
const clientImage3 = 'https://placehold.co/200x200/F0E0D0/704214?text=Client+3';
const clientImage4 = 'https://placehold.co/200x200/C8B09A/704214?text=Client+4';
const clientImage5 = 'https://placehold.co/200x200/B09882/704214?text=Client+5';


// Star Icon Component
const StarIcon = ({ filled }) => (
  <svg
    className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// Arrow Icon Component
const ArrowIcon = ({ direction = 'right' }) => (
  <svg
    className="w-5 h-5 text-gray-700" // Slightly smaller and consistent color
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5" // Consistent stroke width
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {direction === 'left' ? (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    ) : (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    )}
  </svg>
);


const TestimonialCard = ({ imgSrc, name, quote, rating = 5, altText }) => {
  return (
    // Ensure this width calculation matches your desired layout and gap
    <div className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <img
        src={imgSrc}
        alt={altText || `Testimonial from ${name}`}
        className="w-full h-48 object-cover rounded-md mb-4"
        onError={(e) => {
          e.target.onerror = null; // prevent infinite loop
          e.target.src = `https://placehold.co/200x200/CCCCCC/A0A0A0?text=Image+Error`;
          e.target.alt = "Image not found";
        }}
      />
      <div className="flex justify-center mb-3">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} filled={i < rating} />
        ))}
      </div>
      <p className="text-gray-600 text-sm mb-3 leading-relaxed text-center h-20 overflow-y-auto scrollbar-hide">"{quote}"</p> {/* Added fixed height and scroll for long quotes */}
      <p className="text-gray-800 font-semibold text-center text-sm mt-2">{name}</p>
    </div>
  );
};

const AboutComp3 = () => {
  const testimonialsData = [
    {
      imgSrc: clientImage1,
      name: 'Neha Sharma',
      quote: 'This is amazing. I just loooooved it. Color is perfect, fitting is good. Quality of product is beautiful. Natural human hair. This product has changed my life and I will recommend it to everyone I know! Absolutely stunning and easy to use.',
      rating: 5,
      altText: "Client with short dark hair, back view",
    },
    {
      imgSrc: clientImage2,
      name: 'Priya Singh',
      quote: 'Absolutely fantastic! The quality exceeded my expectations. Will definitely recommend to friends and family. The customer service was also top-notch.',
      rating: 5,
      altText: "Happy client smiling",
    },
    {
      imgSrc: clientImage3,
      name: 'Anjali Mehta',
      quote: 'Wonderful product and great service. The hair feels so natural and blends perfectly. Five stars! I am very happy with my purchase.',
      rating: 5,
      altText: "Client showcasing hair product",
    },
    {
      imgSrc: clientImage4,
      name: 'Riya Gupta',
      quote: 'I am so impressed with the quality and the look. It has completely transformed my style. Highly recommended! Best investment I made this year.',
      rating: 5,
      altText: "Client with styled hair",
    },
    {
      imgSrc: clientImage5,
      name: 'Sana Khan',
      quote: 'The best hair product I have ever used. The texture is soft and it looks incredibly natural. Worth every penny! I feel so confident now.',
      rating: 5,
      altText: "Client looking confident",
    },
  ];

  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth -1); // -1 for precision
    } else {
      setCanScrollLeft(false);
      setCanScrollRight(false);
    }
  };

  useEffect(() => {
    // Initial check
    checkScrollability();

    const currentSliderRef = sliderRef.current;
    if (currentSliderRef) {
      currentSliderRef.addEventListener('scroll', checkScrollability);
    }
    window.addEventListener('resize', checkScrollability);

    // Cleanup
    return () => {
      if (currentSliderRef) {
        currentSliderRef.removeEventListener('scroll', checkScrollability);
      }
      window.removeEventListener('resize', checkScrollability);
    };
  }, [testimonialsData]); // Re-check if data changes


  const scroll = (direction) => {
    if (sliderRef.current) {
      // Calculate scroll amount based on the width of one card approximately
      // This assumes all cards have roughly the same width.
      // For more precision, you could get the first child's offsetWidth.
      const cardWidth = sliderRef.current.querySelector(':scope > div > div')?.offsetWidth || 300; // Approx card width + gap
      const scrollAmount = cardWidth + 16; // 16px is 1rem (gap-4)

      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      // Re-check scrollability after a short delay to allow scroll to complete
      setTimeout(checkScrollability, 350); // Adjust delay as needed for smooth behavior
    }
  };

  return (
    <section className="py-12 md:py-20 bg-slate-50 font-sans"> {/* Changed background for better contrast */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-12">
          <div className="md:w-3/5 lg:w-1/2 mb-6 md:mb-0"> {/* Adjusted width */}
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
              What our clients say
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Hear directly from our valued customers about their experience with our products and services.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto">
            <button className="flex items-center justify-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-300 text-sm whitespace-nowrap">
              Best Seller <ArrowIcon direction="right" />
            </button>
            <button className="px-6 py-3 border-2 border-amber-600 text-amber-600 hover:bg-amber-50 hover:text-amber-700 font-semibold rounded-lg transition-colors duration-300 text-sm whitespace-nowrap">
              Book an Appointment
            </button>
          </div>
        </div>

        <div className="relative group"> {/* Added group for potential future group-hover states on buttons */}
          {canScrollLeft && (
             <button
                onClick={() => scroll('left')}
                aria-label="Scroll left"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-xl -ml-4 md:-ml-5 transition-all duration-300 opacity-80 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <ArrowIcon direction="left" />
              </button>
          )}
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {testimonialsData.map((testimonial, index) => (
              // Each child of the flex container that you want to snap to needs scroll-snap-align
              <div key={index} className="snap-start flex-shrink-0">
                 <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
           {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-xl -mr-4 md:-mr-5 transition-all duration-300 opacity-80 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <ArrowIcon direction="right" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutComp3;
