









// /* React-webcam/imageUploading/photo-retaking/try-again/sending to the backend */
// import  { useRef, useState } from "react";
// import Webcam from "react-webcam";
// import { Camera, Image as ImageIcon } from "lucide-react";
// import TryOnButton from "../ReusableComponents/TryOnButton";

// const imageUrl =
//   "https://hips.hearstapps.com/hmg-prod/images/absolute-collagen-hair-loss-growth-6765ac2e1fc15.jpg?crop=0.8328940432261466xw:1xh;center,top&resize=640:*";

// const TryOn = () => {
//   const webcamRef = useRef(null);
//   const [cameraOn, setCameraOn] = useState(false);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false); // State for modal visibility
//   const [selectedImage, setSelectedImage] = useState(null); // State for selected image

//   // Function to capture the image
//   const handleCapture = () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setCapturedImage(imageSrc);
//     setCameraOn(false); // Turn off webcam after capture
//   };

//   // Function to open modal and display the selected image
//   const openModal = (imageSrc) => {
//     setSelectedImage(imageSrc); // Set the selected image
//     setModalOpen(true); // Open the modal
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setSelectedImage(null); // Reset the selected image
//     setModalOpen(false); // Close the modal
//   };

//   // Function to download the image locally
//   const downloadImage = (imageSrc) => {
//     const link = document.createElement("a");
//     link.href = imageSrc;
//     link.download = "downloaded-image.jpg"; // File name for the downloaded image
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

    // // Function to send the captured image to the backend
    // const handleSubmit = async () => {
    //   if (!capturedImage) {
    //     alert("Please capture or upload an image first.");
    //     return;
    //   }
  
    //   try {
    //     const response = await fetch("https://your-backend-api-endpoint.com/upload", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ image: capturedImage }),
    //     });
  
    //     if (response.ok) {
    //       const result = await response.json();
    //       console.log("Backend Response:", result);
    //       alert("Image successfully sent to the backend!");
    //     } else {
    //       console.error("Failed to send image to backend.");
    //       alert("Failed to send image to backend.");
    //     }
    //   } catch (error) {
    //     console.error("Error sending image to backend:", error);
    //     alert("An error occurred while sending the image.");
    //   }
    // };
  

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-200 to-purple-400 flex flex-col items-center py-10 px-4">
//       {/* Header */}
//       <div className="text-center mb-10">
//         <h1 className="text-3xl font-semibold italic text-gray-800">
//           Virtual Hair <TryOnButton/><span> </span>Experience
//         </h1>
//         <p className="text-sm text-gray-600 mt-2">
//           Experience our advanced 3D hair visualization technology
//         </p>
        
//       </div>

//       {/* Main Section */}
//       <div className="flex flex-wrap justify-center items-center gap-10 w-full max-w-6xl">
//         {/* Left Side */}
//         <div className="flex flex-col items-center gap-6">
//           <img
//             src={imageUrl}
//             alt="Model"
//             className="w-60 h-60 object-cover rounded-xl shadow-md cursor-pointer"
//             onClick={() => openModal(imageUrl)} // Open modal on click
//           />
//           {/* suggestion was here */}
//           <div className="flex flex-col items-center">
//             {/* arrow was here */}
//             <img
//               src={imageUrl}
//               alt="Hair Suggestion"
//               className="w-60 h-60 object-cover rounded-xl shadow-md cursor-pointer"
//               onClick={() => openModal(imageUrl)} // Open modal on click
//             />
//           </div>
//         </div>

//         {/* 3D Image Center */}
//         <div className="flex flex-col items-center gap-4">
//           <div className="w-82 h-96 bg-gray-200 rounded-full border border-blue-300 flex items-center justify-center overflow-hidden shadow-inner">
//             {cameraOn ? (
//               <Webcam
//                 ref={webcamRef}
//                 screenshotFormat="image/jpeg"
//                 className="w-full h-full object-cover rounded-full"
//               />
//             ) : capturedImage ? (
//               <img
//                 src={capturedImage}
//                 alt="Captured"
//                 className="w-full h-full object-cover rounded-full cursor-pointer"
//                 onClick={() => openModal(capturedImage)} // Open modal on click
//               />
//             ) : (
//               <span className="text-xl text-gray-600">3D Image</span>
//             )}
//           </div>

//           {!cameraOn && (
//             <button
//               className="bg-gradient-to-br from-blue-400 via-blue-200 to-purple-400 hover:from-purple-400 hover:via-blue-200 hover:to-blue-400 transition-tranform duration-1000 cursor-pointer text-white px-4 py-1 rounded-full  shadow h-12"
//               onClick={() => {
//                 setCameraOn(true);
//                 setCapturedImage(null);
//               }}
//             >
//               Camera On
//             </button>
//           )}

//           {cameraOn && (
//             <button
//               className="bg-gradient-to-br from-blue-300 via-blue-200 to-purple-400 text-white px-4 py-1 rounded-full  shadow h-12 cursor-pointer"
//               onClick={handleCapture}
//             >
//               Capture Photo
//             </button>
//           )}
//         </div>

//         {/* Right Side */}
//         <div className="flex flex-col items-center gap-6">
//           <img
//             src={imageUrl}
//             alt="Model"
//             className="w-60 h-60 object-cover rounded-xl shadow-md cursor-pointer"
//             onClick={() => openModal(imageUrl)} // Open modal on click
//           />
//          {/* suggestion was here */}
//           <div className="flex flex-col items-center">
            
              
//             <img
//               src={imageUrl}
//               alt="Hair Suggestion"
//               className="w-60 h-60 object-cover rounded-xl shadow-md cursor-pointer"
//               onClick={() => openModal(imageUrl)} // Open modal on click
//             />
//           </div>
//         </div>
//       </div>

//       {/* Action Buttons */}
//       <div className="mt-10 flex items-center gap-10">
//         {/* Camera Icon */}
//         <Camera
//           className="w-10 h-10 text-gray-800 cursor-pointer hover:text-sky-400"
//           onClick={() => {
//             setCameraOn(true);
//             setCapturedImage(null);
//           }}
//         />
//         {/* Try Again */}
//         <button
//           className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-full shadow text-sm italic"
//           onClick={() => {
//             setCapturedImage(null);
//             setCameraOn(false);
//           }}
//         >
//           Try Again
//         </button>
//         {/* Submit */}
//         <button
//           className="bg-sky-400 hover:bg-sky-500 text-white px-6 py-2 rounded-full shadow text-sm"
//           onClick={handleSubmit}
//         >
//           Submit
//         </button>

//         {/* Image Upload Icon */}
//         <ImageIcon
//           className="w-10 h-10 text-gray-800 cursor-pointer hover:text-sky-400"
//           onClick={() => {
//             document.getElementById("fileInput").click();
//           }}
//         />
//         <input
//           type="file"
//           accept="image/*"
//           id="fileInput"
//           className="hidden"
//           onChange={(e) => {
//             const file = e.target.files[0];
//             if (file) {
//               const reader = new FileReader();
//               reader.onloadend = () => {
//                 setCapturedImage(reader.result);
//                 setCameraOn(false);
//               };
//               reader.readAsDataURL(file);
//             }
//           }}
//         />
//       </div>

//       {/* Modal for Large Image View */}
//       {modalOpen && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
//           onClick={closeModal} // Close modal on outside click
//         >
//           <div
//             className="relative bg-white p-6 rounded-lg shadow-lg max-w-3xl"
//             onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
//           >
//             <button
//               className="absolute top-2 right-2 text-white bg-red-300 hover:bg-red-400 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full"
//               onClick={closeModal}
//             >
//               &times;
//             </button>
//             <img
//               src={selectedImage}
//               alt="Large View"
//               className="w-full h-auto max-h-[80vh] object-contain"
//             />
//             <button
//               className="mt-4 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-full shadow"
//               onClick={() => downloadImage(selectedImage)}
//             >
//               Download Image
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TryOn;














import { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Camera, Image as ImageIcon } from "lucide-react";
import TryOnButton from "../ReusableComponents/TryOnButton";

const products = [
  { 
    id: 1,
    name: "Curly Wave",
    image: "https://hips.hearstapps.com/hmg-prod/images/absolute-collagen-hair-loss-growth-6765ac2e1fc15.jpg",
    link: "/products/curly-wave"
  },
  { 
    id: 2,
    name: "Straight Cut",
    image: "https://hips.hearstapps.com/hmg-prod/images/absolute-collagen-hair-loss-growth-6765ac2e1fc15.jpg",
    link: "/products/straight-cut"
  },
  { 
    id: 3,
    name: "Bob Style",
    image: "https://hips.hearstapps.com/hmg-prod/images/absolute-collagen-hair-loss-growth-6765ac2e1fc15.jpg",
    link: "/products/bob-style"
  },
  { 
    id: 4,
    name: "Layered Cut",
    image: "https://hips.hearstapps.com/hmg-prod/images/absolute-collagen-hair-loss-growth-6765ac2e1fc15.jpg",
    link: "/products/layered-cut"
  },
];

const TryOn = () => {
  const webcamRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  // Responsive view detection
  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Load saved image from local storage
  useEffect(() => {
    const savedImage = localStorage.getItem('virtualHairPhoto');
    if (savedImage) setCapturedImage(savedImage);
  }, []);

  const capturePhoto = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setCapturedImage(imageSrc);
      setIsCameraOn(false);
      localStorage.setItem('virtualHairPhoto', imageSrc);
    }
  };

  const handleTryAgain = () => {
    setCapturedImage(null);
    setIsCameraOn(false);
    localStorage.removeItem('virtualHairPhoto');
  };

    // Function to send the captured image to the backend
    const handleSubmit = async () => {
      if (!capturedImage) {
        alert("Please capture or upload an image first.");
        return;
      }
  
      try {
        const response = await fetch("https://your-backend-api-endpoint.com/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image: capturedImage }),
        });
  
        if (response.ok) {
          const result = await response.json();
          console.log("Backend Response:", result);
          alert("Image successfully sent to the backend!");
        } else {
          console.error("Failed to send image to backend.");
          alert("Failed to send image to backend.");
        }
      } catch (error) {
        console.error("Error sending image to backend:", error);
        alert("An error occurred while sending the image.");
      }
    };
  

  const WebcamSection = () => (
    <div className="flex flex-col items-center gap-4">
      <div className="lg:w-82 lg:h-96 w-96 h-96 bg-gray-200 rounded-full border border-blue-300 flex items-center justify-center overflow-hidden shadow-inner">
        {isCameraOn ? (
          <Webcam
            ref={webcamRef}
            mirrored
            screenshotFormat="image/jpeg"
            videoConstraints={{ facingMode: 'user' }}
            className="w-full h-full object-cover"
          />
        ) : capturedImage ? (
          <img
            src={capturedImage}
            alt="Captured"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-xl text-gray-600">3D Image</span>
        )}
      </div>

      {!isCameraOn ? (
        <button
          className="bg-gradient-to-br from-blue-400 via-blue-200 to-purple-400 hover:from-purple-400 hover:via-blue-200 hover:to-blue-400 transition-all duration-300 cursor-pointer text-white px-4 py-1 rounded-full shadow h-12"
          onClick={() => {
            setIsCameraOn(true);
            setCapturedImage(null);
          }}
        >
          Camera On
        </button>
      ) : (
        <button
          className="bg-gradient-to-br from-blue-300 via-blue-200 to-purple-400 text-white px-4 py-1 rounded-full shadow h-12 cursor-pointer transition-all duration-300"
          onClick={capturePhoto}
        >
          Capture Photo
        </button>
      )}
    </div>
  );

  const ProductCard = ({ product }) => (
    <div className="relative group">
      <img
        src={product.image}
        alt={product.name}
        className="w-62 h-56  object-cover rounded-xl shadow-md"
      />
      <button
        onClick={() => (window.location.href = product.link)}
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-sky-400 hover:bg-sky-500 text-white px-4 py-2 rounded-full shadow-md text-sm opacity-90 hover:opacity-100 transition-opacity duration-300"
      >
        Buy {product.name}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-200 to-purple-400 flex flex-col items-center py-10 px-4">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold italic text-gray-800">
          Virtual Hair <TryOnButton /> Experience
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          Experience our advanced 3D hair visualization technology
        </p>
      </div>

      {/* Desktop Layout */}
      {!isMobileView && (
        <div className="hidden md:flex flex-wrap justify-center items-center gap-10 w-full max-w-7xl">
          <div className="flex flex-col items-center gap-6 mr-10">
            {products.slice(0, 2).map((product) => (
              <div key={product.id} className="lg:w-60 lg:h-60 w-40 h-40">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <WebcamSection />

          <div className="flex flex-col items-center gap-6 ml-10">
            {products.slice(2, 4).map((product) => (
              <div key={product.id} className="lg:w-60 lg:h-60 w-40 h-40">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Layout */}
      {isMobileView && (
        <div className="md:hidden flex flex-col items-center gap-8 w-full">
          <WebcamSection />
          
          <div className="w-full max-w-lg">
            <Carousel 
              showArrows={true} 
              showThumbs={false} 
              showStatus={false}
              onChange={(index) => setActiveProductIndex(index)}
            >
              {products.map((product) => (
                <div key={product.id} className="p-2 h-96">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              ))}
            </Carousel>
            <button
              onClick={() => (window.location.href = products[activeProductIndex]?.link)}
              className="mt-4 bg-sky-400 hover:bg-sky-500 text-white px-6 py-2 rounded-full shadow-md text-sm w-full transition-all duration-300"
            >
              Buy {products[activeProductIndex]?.name}
            </button>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-10 flex items-center gap-10">
        <Camera
          className="w-10 h-10 text-gray-800 cursor-pointer hover:text-sky-400 transition-colors"
          onClick={() => {
            setIsCameraOn(true);
            setCapturedImage(null);
          }}
        />
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-full shadow text-sm italic transition-colors"
          onClick={handleTryAgain}
        >
          Try Again
        </button>
        <button
          className="bg-sky-400 hover:bg-sky-500 text-white px-6 py-2 rounded-full shadow text-sm transition-colors"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <ImageIcon
          className="w-10 h-10 text-gray-800 cursor-pointer hover:text-sky-400 transition-colors"
          onClick={() => document.getElementById("fileInput").click()}
        />
        <input
          type="file"
          accept="image/*"
          id="fileInput"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setCapturedImage(reader.result);
                setIsCameraOn(false);
                localStorage.setItem('virtualHairPhoto', reader.result);
              };
              reader.readAsDataURL(file);
            }
          }}
        />
      </div>
    </div>
  );
};

export default TryOn;