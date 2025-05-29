import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

// Icons for a more visual representation
import { FiUsers, FiStar, FiPackage, FiAward } from 'react-icons/fi';

// A reusable, animated component for each individual statistic
const StatCard = ({ icon, label, value, unit, duration = 2 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1,  // Trigger when 10% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="bg-white p-6 rounded-2xl shadow-subtle hover:shadow-strong transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="flex items-center gap-4">
        <div className="bg-rose-50 text-[#c5a781] p-3 rounded-full">
          {icon}
        </div>
        <div>
          <p className="text-gray-500 text-sm font-medium">{label}</p>
          <div className="text-3xl font-bold text-gray-800 flex items-baseline">
            <AnimatedNumber from={0} to={value} duration={duration} />
            <span className="text-2xl font-semibold text-gray-700">{unit}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Component for the animated number counter
const AnimatedNumber = ({ from, to, duration }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        number: to,
        transition: { duration: duration, ease: "circOut" }
      });
    }
  }, [inView, controls, to, duration]);

  // We need to use a motion component that can render text
  const MotionSpan = motion.span;

  return <MotionSpan ref={ref} initial={{ number: from }} animate={controls}>
    {Math.round(from)}
  </MotionSpan>;
};


// The main section component that lays out all the cards
const StatsSection = () => {
  const stats = [
    {
      icon: <FiUsers size={24} />,
      label: 'Happy Clients',
      value: 10,
      unit: 'K+',
    },
    {
      icon: <FiStar size={24} />,
      label: 'Positive Reviews',
      value: 5,
      unit: 'K+',
    },
    {
      icon: <FiPackage size={24} />,
      label: 'Products Sold',
      value: 20,
      unit: 'K+',
    },
    {
      icon: <FiAward size={24} />,
      label: 'Years in Business',
      value: 5,
      unit: '+',
      duration: 1.5 // A shorter duration for a smaller number
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // This will make each card animate in sequence
      },
    },
  };

  return (
    <section className="bg-gray-50 py-20 px-4">
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
            unit={stat.unit}
            duration={stat.duration}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default StatsSection;