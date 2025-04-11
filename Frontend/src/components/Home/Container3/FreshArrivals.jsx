import React from "react";
import firstImg from "../../../../public/menSection/1.png";
import w1 from "../../../../public/womenSection/1.png";
import w2 from "../../../../public/womenSection/2.png";
import w3 from "../../../../public/womenSection/3.png";
import w4 from "../../../../public/womenSection/4.png";

const FreshArrivals = () => {
  const menSection = [
    {
      id: 1,
      name: "Full Head Wig",
      imageUrl: "/Frontend/public/womenSection/4.png",
      mrp: 16900.0,
      price: 11900.0,
    },
    {
      id: 2,
      name: "Full Head Wig",
      imageUrl: "/Frontend/public/womenSection/4.png",
      mrp: 16900.0,
      price: 11900.0,
    },
    {
      id: 3,
      name: "Half Head Wig",
      imageUrl: "/Frontend/public/womenSection/4.png",
      mrp: 16900.0,
      price: 11900.0,
    },
    {
      id: 4,
      name: "Half Front Wig",
      imageUrl: "/Frontend/public/womenSection/4.png",
      mrp: 16900.0,
      price: 11900.0,
    },
  ];

  const womenSection = [
    {
      id: 1,
      name: "Half Front Head Wig",
      imageUrl: w1,
      mrp: 16900.0,
      price: 11900.0,
    },
    {
      id: 2,
      name: "Long Hairstyle Straight",
      imageUrl: w2,
      mrp: 16900.0,
      price: 11900.0,
    },
    {
      id: 3,
      name: "Baby Cut Style Wig",
      imageUrl: w3,
      mrp: 16900.0,
      price: 11900.0,
    },
    {
      id: 4,
      name: "Full Front Head Wig",
      imageUrl: w4,
      mrp: 16900.0,
      price: 11900.0,
    },
  ];

  return (
    <div className="text-center py-10">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
        OUR FRESH ARRIVALS
      </h2>
      <hr className="border-t border-black w-[90%] mx-auto mt-4  mb-12" />

      {/* Men Section */}
      <div className="grid grid-cols-2 gap-6 md:flex md:flex-row justify-center px-12 md:px-16 lg:px-20 mb-5">
        {menSection.map((item) => (
          <div className="flex flex-col md:w-80" key={item.id}>
            {/* Image block */}
            <div className="bg-[#C9AEDE] ">
              <img src={firstImg} alt="" className="w-62" />
            </div>

            {/* Product details */}
            <p className="text-xl md:text-2xl font-semibold mt-2">
              Full Head Wig
            </p>
            <div className="flex justify-center">
              <hr className="border-t border-black w-[90%] mb-4 mt-1" />
            </div>

            {/* Price */}
            <div className="flex flex-col xl:flex-row xl:gap-3 justify-center mb-3">
              <p className="text-purple-700 line-through">MRP: 16900.00</p>
              <p className="text-purple-700">MRP: 11900.00</p>
            </div>

            {/* Button */}
            <div>
              <button className="bg-[#AA5BAE] hover:bg-[#a941ae] text-white px-4 py-2 rounded-lg cursor-pointer xl:w-1/2">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Women Section */}
      <div className="grid grid-cols-2 gap-6 md:flex md:flex-row justify-center px-12 md:px-16 lg:px-20">
        {womenSection.map((item) => (
          <div className="flex flex-col md:w-80" key={item.id}>
            {/* Image block */}
            <div className="bg-[#E2D1CA]">
              <img src={item.imageUrl} alt="" className="w-62" />
            </div>

            {/* Product details */}
            <p className="text-xl md:text-2xl font-semibold mt-2">
              Full Head Wig
            </p>
            <div className="flex justify-center">
              <hr className="border-t border-black w-[90%] mb-4 mt-1" />
            </div>

            {/* Price */}
            <div className="flex flex-col xl:flex-row xl:gap-3 justify-center mb-3">
              <p className="text-purple-700 line-through">MRP: 16900.00</p>
              <p className="text-purple-700">MRP: 11900.00</p>
            </div>

            {/* Button */}
            <div>
              <button className="bg-[#AA5BAE] hover:bg-[#a941ae] text-white px-4 py-2 rounded-lg cursor-pointer xl:w-1/2">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* view more button */}
      <div className="flex justify-center mt-5">
        <button className="mt-4 px-7 py-3 border-2 border-[#AA5BAE] text-lg font-semibold rounded-md hover:bg-purple-50 transition cursor-pointer">
          View More
        </button>
      </div>
    </div>
  );
};

export default FreshArrivals;
