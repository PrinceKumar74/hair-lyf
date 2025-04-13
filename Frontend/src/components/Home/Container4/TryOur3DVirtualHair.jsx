import React from "react";
import VirtualTryOn from "../../../../public/hair/VirtualTryOn.png";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Link } from "react-router-dom";

const TryOur3DVirtualHair = () => {
  return (
    <div className="bg-[#fdfcf6] py-12 flex items-center justify-center p-6">
      <div className="bg-white max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between rounded-xl shadow-md overflow-hidden">
        {/* Left Content */}
        <div className="px-8 text-center lg:text-left flex-1">
          <div className="bg-[#AA5BAE] text-white inline-block px-6 py-2 rounded-md text-lg md:text-2xl xl:text-4xl  font-semibold mb-6 ">
            FIND YOUR PERFECT MATCH
          </div>
          
          

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-5 text-gray-600">
            Try Our 3D Virtual Hair
          </h2>
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-10">
            – See Your New Look Instantly!
          </p>

          {/* Camera Icon */}
          <div className="flex justify-center items-center lg:justify-start gap-4 mb-4 ">
            {/* camera icon */}
            <div className="flex mr-4">
            <CameraAltIcon
              className=" text-[#AA5BAE]"
              style={{ width: "100px", height: "100px" }}
            />
            </div>
            
            {/* Try Now Button */}
            <Link to='/tryOn' style={{color: "black"}}>
            <button className="mt-4 px-10 py-3 border-2 border-[#AA5BAE] text-lg font-semibold rounded-md hover:bg-purple-50 transition cursor-pointer">
              Try Now
            </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 bg-[#D9D9D9]">
          <img
            src={VirtualTryOn} // Replace with your actual image path
            alt="3D Hair Try On"
            className="w-full h-auto object-cover rounded-t-none rounded-b-xl lg:rounded-l-none lg:rounded-r-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default TryOur3DVirtualHair;
