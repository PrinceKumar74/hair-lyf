import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FreshArrivals = () => {
  const [products, setProducts] = useState([]);
  const [menProducts, setMenProducts] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://hairlyf-backend-api.onrender.com/api/products");
        const data = await response.json();
        setProducts(data.products || []);

        const men = data.products?.filter((product) => product.category === "men") || [];
        const women = data.products?.filter((product) => product.category === "women") || [];

        const formatProducts = (arr) =>
          arr.slice(0, 4).map((item) => ({
            ...item,
            imageUrls: item.images?.map((img) => {
              const urlChars = Object.values(img).slice(0, -1);
              return urlChars.join("");
            }),
          }));

        setMenProducts(formatProducts(men));
        setWomenProducts(formatProducts(women));
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <div className="relative">
          <div className="animate-spin rounded-full h-20 w-20 border-4 border-t-purple-500 border-r-purple-400 border-b-purple-300 border-l-purple-200"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="h-12 w-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
              <span className="text-purple-500 text-xl font-semibold">HL</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16 px-4">
        <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
          <p className="text-2xl font-semibold text-red-500 mb-6">Something went wrong!</p>
          <p className="text-gray-600 mb-6">We're having trouble loading the products. Please try again.</p>
          <button
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            onClick={() => window.location.reload()}
          >
            Retry Loading
          </button>
        </div>
      </div>
    );
  }

  const renderProducts = (items, bgColor) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-16 lg:px-24">
      {items.map((item, index) => {
        const price = Number(item.price) || 0;
        const offerPrice = price.toFixed(2);
        const originalPrice = (price + 500).toFixed(2);
        const discount = Math.round(((price + 500 - price) / (price + 500)) * 100);

        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={item._id}
            className="group bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-200 hover:border-[#D0764F] transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
          >
            <Link to={`/products/${item._id}`}>
              <div className={`relative ${bgColor} h-72 overflow-hidden`}>
                <img
                  src={item.imageUrls?.[0]}
                  alt={item.name}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-[#D0764F] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {discount}% OFF
                </div>
              </div>
            </Link>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 truncate group-hover:text-[#D0764F] transition-colors duration-300">
                {item.name}
              </h3>
              <div className="mb-5 space-y-1">
                <p className="text-gray-400 text-sm line-through">MRP: ₹{originalPrice}</p>
                <p className="text-[#D0764F] text-xl font-bold">₹{offerPrice}</p>
              </div>
              <Link to={`/products/${item._id}`}>
                <button className="relative overflow-hidden bg-[#D0764F] text-white w-full py-3 cursor-pointer rounded-md font-semibold tracking-wide group-hover:bg-[#c06441] transition-all duration-300">
                  <span className="relative z-10">View Details</span>
                  <div className="absolute inset-0 h-full w-full transform scale-0 group-hover:scale-100 transition-transform duration-300 bg-gradient-to-r from-[#c06441] to-[#D0764F]"></div>
                </button>
              </Link>
            </div>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="absolute inset-0 opacity-50 bg-[url('/pattern.svg')]"></div>
      
      <div className="relative">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1]
            }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-black relative inline-block"
          >
            Our Fresh Arrivals
            <div className="absolute bottom-0 left-0 w-full h-1 bg-black transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
          </motion.h2>
          <p className="mt-4 text-gray-600 text-lg">Handpicked styles just for you.</p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-black rounded-full"></div>
          </div>
        </motion.div>

        {/* Men Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center px-6 md:px-12 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-black">
              For Him
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-black to-transparent ml-4"></div>
          </div>
          {renderProducts(menProducts, "bg-[#F3E8FF]")}
        </motion.div>

        {/* Women Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center px-6 md:px-12 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-black">
              For Her
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-black to-transparent ml-4"></div>
          </div>
          {renderProducts(womenProducts, "bg-[#FCE7F3]")}
        </motion.div>

        {/* View More Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative mt-10 px-12 py-4 bg-transparent overflow-hidden rounded-md"
          >
            <span className="relative z-10 text-lg font-semibold text-black group-hover:text-white transition-colors duration-300">
              View More Collections
            </span>
            <div className="absolute inset-0 border-2 border-black rounded-md"></div>
            <div className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default FreshArrivals;
