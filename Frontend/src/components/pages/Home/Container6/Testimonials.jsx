import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Star is no longer needed
import { motion, AnimatePresence } from "framer-motion";

// Updated data structure for image comparisons
const imageComparisons = [
  {
    id: 1,
    name: "Alexandria R.",
    beforeImage: "https://placehold.co/300x400/E6E6FA/333333?text=Before+Style+A",
    afterImage: "https://placehold.co/300x400/D8BFD8/333333?text=After+Style+A",
    story: "My hair has never felt so healthy and vibrant! This transformation is unbelievable."
  },
  {
    id: 2,
    name: "Benjamin K.",
    beforeImage: "https://placehold.co/300x400/FFDAB9/333333?text=Before+Look+B",
    afterImage: "https://placehold.co/300x400/FFA07A/333333?text=After+Look+B",
    story: "I was skeptical at first, but the results speak for themselves. Highly recommend!"
  },
  {
    id: 3,
    name: "Chloe M.",
    beforeImage: "https://placehold.co/300x400/ADD8E6/333333?text=Before+Cut+C",
    afterImage: "https://placehold.co/300x400/87CEEB/333333?text=After+Cut+C",
    story: "A complete makeover! I feel like a new person. The process was amazing."
  },
  {
    id: 4,
    name: "Daniel S.",
    beforeImage: "https://placehold.co/300x400/F0E68C/333333?text=Before+Color+D",
    afterImage: "https://placehold.co/300x400/EEDD82/333333?text=After+Color+D",
    story: "The color correction is perfect. Exactly what I wanted for a fresh look."
  },
  {
    id: 5,
    name: "Eleanor P.",
    beforeImage: "https://placehold.co/300x400/98FB98/333333?text=Before+Treatment+E",
    afterImage: "https://placehold.co/300x400/90EE90/333333?text=After+Treatment+E",
    story: "My damaged hair is finally restored. So grateful for this incredible change."
  }
];

// Main component renamed and updated
const BeforeAfterCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  // Auto-rotate every 3 seconds (increased from 2 for better viewing of images)
  useEffect(() => {
    if (isHovered) return; // Pause on hover
    
    const interval = setInterval(() => {
      setDirection(1); // Always move to next in auto-rotate
      setCurrentIndex(prev => (prev + 1) % imageComparisons.length);
    }, 3000); // Auto-play interval
    
    return () => clearInterval(interval); // Cleanup interval on component unmount or when isHovered changes
  }, [isHovered]); // Rerun effect if isHovered changes

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex(prev => 
      prev === 0 ? imageComparisons.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex(prev => 
      prev === imageComparisons.length - 1 ? 0 : prev + 1
    );
  };

  // Determines which items are visible (previous, current, next) for the 3-card layout effect
  const getVisibleItems = () => {
    const count = imageComparisons.length;
    if (count === 0) return [];
    if (count === 1) return [0,0,0]; // Special case for single item: show it in active, prev, next slots

    const prevIndex = (currentIndex - 1 + count) % count;
    const nextIndex = (currentIndex + 1) % count;
    return [prevIndex, currentIndex, nextIndex];
  };
  
  // Animation variants for the cards
  const cardVariants = {
    // Position for the card that is off-screen to the left (becomes active on 'prev')
    enterPrev: { 
        x: "-100%", 
        scale: 0.8, 
        opacity: 0, 
        zIndex: 1 
    },
    // Position for the card that is off-screen to the right (becomes active on 'next')
    enterNext: { 
        x: "100%", 
        scale: 0.8, 
        opacity: 0, 
        zIndex: 1 
    },
    // Previous card style (visible to the left of active card)
    prev: {
      x: "-50%", // Positioned to the left
      scale: 0.8,
      opacity: 0.6,
      filter: "blur(3px)",
      zIndex: 1,
      transition: { duration: 0.5 }
    },
    // Active card style (center)
    active: {
      x: "0%", // Centered
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      zIndex: 2, // Higher zIndex to be on top
      transition: { duration: 0.5 }
    },
    // Next card style (visible to the right of active card)
    next: {
      x: "50%", // Positioned to the right
      scale: 0.8,
      opacity: 0.6,
      filter: "blur(3px)",
      zIndex: 1,
      transition: { duration: 0.5 }
    },
    // Exit animation for card moving to the left (when 'next' is clicked)
    exitPrev: { 
        x: "-100%", 
        scale: 0.8, 
        opacity: 0, 
        zIndex: 1, 
        transition: { duration: 0.5 } 
    },
    // Exit animation for card moving to the right (when 'prev' is clicked)
    exitNext: { 
        x: "100%", 
        scale: 0.8, 
        opacity: 0, 
        zIndex: 1, 
        transition: { duration: 0.5 } 
    },
  };


  const visibleItemIndices = getVisibleItems();

  return (
    <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-16 sm:py-20 px-4 text-white overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 tracking-tight">
          Client Transformations
        </h2>

        <div 
          className="relative h-[34rem] sm:h-[38rem]" // Adjusted height for taller cards
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 sm:p-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous transformation"
          >
            <ChevronLeft size={28} strokeWidth={2.5} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 sm:p-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next transformation"
          >
            <ChevronRight size={28} strokeWidth={2.5} />
          </button>

          {/* Image comparisons container */}
          <div className="relative h-full w-full flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              {imageComparisons.length > 0 && visibleItemIndices.map((itemIndex, positionInVisibleArray) => {
                const item = imageComparisons[itemIndex];
                if (!item) return null; // Should not happen if logic is correct

                // Determine the variant based on the item's position relative to currentIndex
                let variantName = "active";
                if (imageComparisons.length > 1) { // Only apply prev/next if more than one item
                    if (positionInVisibleArray === 0) variantName = "prev"; // Left item
                    else if (positionInVisibleArray === 2) variantName = "next"; // Right item
                }


                return (
                  <motion.div
                    key={item.id} // Use item.id for a stable key
                    className="absolute w-[90%] max-w-sm sm:max-w-md md:max-w-lg bg-white text-gray-800 rounded-2xl shadow-2xl p-6 cursor-grab flex flex-col items-center"
                    variants={cardVariants}
                    initial={direction === 1 ? "enterNext" : "enterPrev"} // Animate from off-screen
                    animate={variantName} // 'prev', 'active', or 'next'
                    exit={direction === 1 ? "exitPrev" : "exitNext"} // Animate to off-screen
                    custom={direction} // Pass direction for exit animation
                  >
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full mb-4">
                      <div className="flex flex-col items-center">
                        <img
                          src={item.beforeImage}
                          alt={`${item.name} - Before`}
                          className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl shadow-lg mb-2 border-2 border-gray-200"
                          onError={(e) => { 
                            e.target.onerror = null; 
                            e.target.src="https://placehold.co/300x400/EEEEEE/777777?text=Not+Found"; 
                          }}
                        />
                        <span className="mt-1 text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-0.5 rounded">BEFORE</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src={item.afterImage}
                          alt={`${item.name} - After`}
                          className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl shadow-lg mb-2 border-2 border-gray-200"
                           onError={(e) => { 
                            e.target.onerror = null; 
                            e.target.src="https://placehold.co/300x400/DDDDDD/777777?text=Not+Found"; 
                          }}
                        />
                        <span className="mt-1 text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-0.5 rounded">AFTER</span>
                      </div>
                    </div>
                    <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-indigo-700 text-center">{item.name}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-gray-600 text-center max-w-xs sm:max-w-sm">
                      "{item.story}"
                    </p>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Dots indicator */}
        {imageComparisons.length > 1 && (
            <div className="flex justify-center mt-10 sm:mt-12 gap-2 sm:gap-2.5">
            {imageComparisons.map((_, index) => (
                <button
                key={index} // Using index as key here is fine as the array order doesn't change
                onClick={() => {
                    // Determine direction for animation when dot is clicked
                    if (index > currentIndex) setDirection(1);
                    else if (index < currentIndex) setDirection(-1);
                    setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ease-in-out
                            ${index === currentIndex ? "bg-white scale-125 ring-2 ring-white/50" : "bg-white/40 hover:bg-white/70"}`}
                aria-label={`Go to transformation ${index + 1}`}
                />
            ))}
            </div>
        )}
      </div>
    </section>
  );
};

// It's good practice to export the main component as default
export default BeforeAfterCarousel;

