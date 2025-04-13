
// export default TestimonialsSection;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import firstImg from "../../../../public/womenSection/1.png";
import secImg from "../../../../public/womenSection/2.png";
import thirdImg from "../../../../public/womenSection/3.png";

const testimonials = [
  {
    id: 1,
    name: "Charlotte",
    rating: 4,
    text: "DuoPod i7 provides an immersive experience with amazing sound effects, and crystal clear music.",
    image: firstImg,
  },
  {
    id: 2,
    name: "Amalia",
    rating: 4,
    text: "DuoPod i7 provides an immersive experience with amazing sound effects, and crystal clear music.",
    image: secImg,
  },
  {
    id: 3,
    name: "Sophia",
    rating: 5,
    text: "The best audio experience I've ever had. Truly revolutionary sound quality.",
    image: thirdImg,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-2xl ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          OUR TESTIMONIALS
        </h2>
        <hr className="border-t border-black w-[90%] mx-auto mt-4" />
        <p className="text-xl text-gray-600 mb-12">
          See What Our Customers Say
        </p>

        <div
          className="relative h-96 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false}>
            {testimonials.map((testimonial, index) => {
              let rawPosition = index - activeIndex;
              let position = rawPosition;

              // Adjust position for circular wrapping
              if (rawPosition > 1) position -= testimonials.length;
              else if (rawPosition < -1) position += testimonials.length;

              const isActive = position === 0;

              return (
                <motion.div
                  key={testimonial.id}
                  className={`absolute inset-0 flex flex-col items-center justify-center gap-4 ${
                    isActive ? "z-10" : "z-0"
                  }`}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    x: position * 100 + "%",
                    filter: "blur(4px)",
                  }}
                  animate={{
                    opacity: isActive ? 1 : 0.6,
                    scale: isActive ? 1 : 0.9,
                    x: position * 100 + "%",
                    filter: isActive ? "blur(0px)" : "blur(4px)",
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <div
                    className={`flex flex-col items-center gap-4 max-w-2xl p-8 bg-white 
                        rounded-xl border-2 transition-all duration-300 ${
                          isActive ? "border-purple-500" : "border-gray-200"
                        }`}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className={`rounded-full object-cover transition-all duration-300 ${
                        isActive ? "w-32 h-32" : "w-24 h-24"
                      }`}
                    />
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                    <h3
                      className={`font-semibold ${
                        isActive
                          ? "text-2xl text-gray-900"
                          : "text-xl text-gray-600"
                      }`}
                    >
                      {testimonial.name}
                    </h3>
                    <p
                      className={`text-center ${
                        isActive ? "text-lg text-gray-700" : "text-gray-500"
                      }`}
                    >
                      {testimonial.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
