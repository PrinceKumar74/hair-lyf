import React from "react";
import VirtualTryOn from "../../../../../public/hair/VirtualTryOn.png";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Link } from "react-router-dom";

const TryOur3DVirtualHair = () => {
  return (
    <div className="bg-[#fdfcf6] py-12 flex items-center justify-center px-6">
      <div className="bg-red-100 max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between rounded-xl shadow-md overflow-hidden">
        {/* Left Content */}
        {/* <div className="px-8 text-center lg:text-left flex-1">
          <div className="bg-[#F72C5B] text-white inline-block px-6 py-2 rounded-md text-lg md:text-2xl xl:text-4xl  font-semibold mb-6 ">
            FIND YOUR PERFECT MATCH
          </div> */}
          <div className="px-8 text-center lg:text-left flex-1">
          <div className="inline-block bg-[#F72C5B] text-white px-6 py-4 md:py-5 rounded-md tracking-widest">
          <p className=" text-2xl sm:text-3xl xl:text-4xl" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 500 }}>
          FIND YOUR PERFECT MATCH
          </p>
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
















// import React from 'react';

// // Replace these with your actual image imports
// import cameraImg from '../../../../public/assets/virtualHair/camera.png';
// import starImg from '../../../../public/assets/virtualHair/star.png';
// import modelImg from '../../../../public/assets/virtualHair/model.png';

// export default function VirtualHairSection() {
//   return (
//     <div className="bg-pink-50 py-10 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
//       {/* Left Side */}
//       <div className="flex-1 space-y-6 text-center md:text-left">
//         <div className="inline-block bg-pink-600 text-white text-sm font-semibold px-4 py-2 rounded">
//           FIND YOUR PERFECT MATCH
//         </div>

//         <div>
//           <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
//             Try Our <span className="text-3xl md:text-4xl">3D Virtual Hair</span>
//           </h2>
//           <p className="text-gray-600 mt-2">– See Your New Look Instantly!</p>
//         </div>

//         <div className="flex items-center justify-center md:justify-start gap-4">
//           <div className="relative">
//             <img src={cameraImg} alt="Camera" className="w-16 h-16 object-contain" />
//             <img
//               src={starImg}
//               alt="Star"
//               className="w-4 h-4 absolute top-0 right-0"
//             />
//           </div>
//           <button className="border border-gray-600 px-6 py-2 rounded hover:bg-gray-100 transition">
//             Try Now
//           </button>
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="flex-1 mt-10 md:mt-0">
//         <img
//           src={modelImg}
//           alt="Virtual Try On Model"
//           className="w-full max-w-md mx-auto rounded-md"
//         />
//       </div>
//     </div>
//   );
// }

