import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-500 border-opacity-50"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-2xl font-semibold text-red-500 mb-6">Something went wrong!</p>
        <button
          className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  const renderProducts = (items, bgColor) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 px-6 md:px-16 lg:px-24">
      {items.map((item) => {
        const offerPrice = (item.price).toFixed(2);
        const originalPrice = (item.price + 500).toFixed(2);

        return (
          <div
            key={item._id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-200 hover:border-[#D0764F] transition duration-300 overflow-hidden"
          >
            <Link to={`/product/${item._id}`}>
              <div className={`relative ${bgColor} h-72 flex items-center justify-center`}>
                <img
                  src={item.imageUrls?.[0]}
                  alt={item.name}
                  className="object-cover w-full h-full"
                />
              </div>
            </Link>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 truncate">{item.name}</h3>
              <div className="mb-5">
                <p className="text-gray-400 text-sm line-through">MRP: ₹{originalPrice}</p>
                <p className="text-[#D0764F] text-lg font-bold mt-1">₹{offerPrice}</p>
              </div>
              <Link to={`/product/${item._id}`}>
                <button
                  className="bg-[#D0764F] text-black w-full py-3 cursor-pointer rounded-md font-semibold tracking-wide hover:bg-[#c06441] transition"
                >
                  View
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Our Fresh Arrivals
        </h2>
        <p className="mt-4 text-gray-500">Handpicked styles just for you.</p>
        <hr className="border-t border-purple-300 w-1/4 mx-auto mt-6" />
      </div>

      {/* Men Section */}
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-left px-6 md:px-12 mb-8">
          For Him
        </h3>
        {renderProducts(menProducts, "bg-[#F3E8FF]")}
      </div>

      {/* Women Section */}
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-left px-6 md:px-12 mb-8">
          For Her
        </h3>
        {renderProducts(womenProducts, "bg-[#FCE7F3]")}
      </div>

      {/* View More Button */}
      <div className="flex justify-center">
        <button className="mt-10 px-8 py-4 border-2 border-[#D0764F] text-black text-lg font-semibold rounded-md hover:bg-[#d0764f1a] transition">
          View More
        </button>

      </div>
    </div>
  );
};

export default FreshArrivals;
