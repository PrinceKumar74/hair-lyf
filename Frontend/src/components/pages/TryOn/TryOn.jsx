
// import { useState, useEffect, useRef } from "react";
// import Webcam from "react-webcam";
// import {Link} from 'react-router-dom';
// import { Camera, Image as ImageIcon, Upload, ChevronLeft } from "lucide-react";

// // products array and ProductCard component are removed as per new UI.
// // Carousel and its CSS import are also removed.

// const TryOn = () => {
//   const webcamRef = useRef(null);
//   const [isCameraOn, setIsCameraOn] = useState(false);
//   const [capturedImage, setCapturedImage] = useState(null);
//   // activeProductIndex is removed as product carousel is removed.
//   const [isMobileView, setIsMobileView] = useState(false);

//   // Responsive view detection
//   useEffect(() => {
//     const handleResize = () => setIsMobileView(window.innerWidth < 768); // Changed to < 768 for a common breakpoint
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Load saved image from local storage
//   useEffect(() => {
//     const savedImage = localStorage.getItem('virtualHairPhoto');
//     if (savedImage) {
//       setCapturedImage(savedImage);
//       setIsCameraOn(false); // Ensure camera is off if loading a saved image
//     }
//   }, []);

//   const capturePhoto = () => {
//     const imageSrc = webcamRef.current?.getScreenshot();
//     if (imageSrc) {
//       setCapturedImage(imageSrc);
//       setIsCameraOn(false);
//       localStorage.setItem('virtualHairPhoto', imageSrc);
//     }
//   };

//   const handleTryAgain = () => {
//     setCapturedImage(null);
//     setIsCameraOn(false);
//     localStorage.removeItem('virtualHairPhoto');
//   };

//   const handleSubmit = async () => {
//     if (!capturedImage) {
//       alert("Please capture or upload an image first.");
//       return;
//     }

//     try {
//       const response = await fetch("https://your-backend-api-endpoint.com/upload", { // Placeholder
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ image: capturedImage }),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log("Backend Response:", result);
//         alert("Image successfully sent to the backend!");
//       }
        
      
//     } catch (error) {
//       console.error("Error submitting image:", error);
      
//     }
//   };

//   const handleCaptureButtonClick = () => {
//     if (isCameraOn) {
//       capturePhoto();
//     } else {
//       setCapturedImage(null); // Clear previous image
//       localStorage.removeItem('virtualHairPhoto');
//       setIsCameraOn(true);
//     }
//   };

//   const handleGalleryButtonClick = () => {
//     document.getElementById("fileInput")?.click();
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         if (typeof reader.result === 'string') {
//           setCapturedImage(reader.result);
//           setIsCameraOn(false);
//           localStorage.setItem('virtualHairPhoto', reader.result);
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // WebcamSection is now integrated into the main return for clarity with new UI
//   // ProductCard and Carousel related code is removed.

//   return (
//     <div className="min-h-screen bg-white flex flex-col items-center py-6 sm:py-10 px-4">
//       {/* Header Section */}
//       {isMobileView ? (
//         <div className="w-full flex items-center mb-6 sm:mb-8 relative px-2">
//           <button 
//             onClick={() => window.history.back()} 
//             className="absolute left-0 text-gray-700 hover:text-gray-900 transition-colors p-2"
//             aria-label="Go back"
//           >
//             <ChevronLeft size={28} />
//           </button>
//           <h1 className="text-xl font-semibold text-gray-800 mx-auto">
//             2D Try-on
//           </h1>
//         </div>
//       ) : (
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-semibold text-gray-800">
//             Virtual Hair 2D Try-On Experience
//           </h1>
//           <p className="text-md text-gray-600 mt-2">
//             Experience our advanced 2D hair visualization technology
//           </p>
//         </div>
//       )}

//       {/* Image Display Area */}
//       <div 
//         className={`bg-[#DDCDBF] rounded-xl flex items-center justify-center shadow-lg 
//                    ${isMobileView ? 'w-[90vw] max-w-[380px] h-auto aspect-[6/5] p-3' : 'w-full max-w-[500px] h-[320px] p-4'}
//                   `}
//       >
//         <div className={`relative w-2/3 h-full max-w-2/3 max-h-full 
//                          ${isMobileView ? 'max-w-[260px] max-h-[260px]' : 'max-w-[260px] max-h-[260px]'}
//                          bg-white rounded-full border-2 border-dashed border-gray-500 
//                          flex items-center justify-center overflow-hidden aspect-square mx-auto`}
//         >
//           {isCameraOn ? (
//             <Webcam
//               ref={webcamRef}
//               mirrored
//               screenshotFormat="image/jpeg"
//               videoConstraints={{ facingMode: 'user', width: 1280, height: 720 }}
//               className="w-full h-full object-cover"
//             />
//           ) : capturedImage ? (
//             <img
//               src={capturedImage}
//               alt="Captured"
//               className="w-full h-full object-cover"
//             />
//           ) : (
//             <span className="text-lg text-gray-500 text-center p-2">2D Image</span>
//           )}
//         </div>
//       </div>

//       {/* Action Buttons */}
//       <div className={`mt-8 flex ${isMobileView ? 'flex-col space-y-3 w-[90vw] max-w-[380px]' : 'flex-row space-x-4 items-center'} justify-center`}>
//         <button 
//           onClick={handleCaptureButtonClick} 
//           className={`text-white px-6 py-3 rounded-full shadow-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-medium
//                      ${isMobileView ? 'w-full' : 'min-w-[160px]'} bg-[#A57E6E]`}
//         >
//           <Camera size={20} /> {isCameraOn ? 'Take Picture' : 'Capture'}
//         </button>
//         <button 
//           onClick={handleGalleryButtonClick} 
//           className={`border px-6 py-3 rounded-full shadow-md hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 font-medium
//                      ${isMobileView ? 'w-full' : 'min-w-[160px]'} bg-white text-[#A57E6E] border-[#A57E6E]`}
//         >
//           {isMobileView ? <Upload size={20} /> : <ImageIcon size={20} />}
//           {isMobileView ? 'Upload From Gallery' : 'Gallery'}
//         </button>
//       </div>

//       {/* Secondary Actions: Try Again and Submit */}
//       {(capturedImage || isCameraOn) && (
//         <div className={`mt-6 flex ${isMobileView ? 'flex-col space-y-3 w-[90vw] max-w-[380px]' : 'flex-row space-x-4 items-center'} justify-center`}>
//           <button
//             onClick={handleTryAgain}
//             className={`px-6 py-3 rounded-full shadow-md transition-colors font-medium
//                        ${isMobileView ? 'w-full' : 'min-w-[160px]'} bg-gray-200 hover:bg-gray-300 text-gray-700`}
//           >
//             Clear & Start Over
//           </button>
//           {capturedImage && !isCameraOn && (
//           <Link to="/swap">  <button
//               onClick={handleSubmit}
//               className={`text-white px-6 py-3 rounded-full shadow-md transition-colors font-medium
//                          ${isMobileView ? 'w-full' : 'min-w-[160px]'} bg-sky-500 hover:bg-sky-600`}
//             >
//              Submit Image
//             </button></Link>
//           )}
//         </div>
//       )}
      
//       <input
//         type="file"
//         accept="image/*"
//         id="fileInput"
//         className="hidden"
//         onChange={handleFileChange}
//       />
//     </div>
//   );
// };

// export default TryOn;

import { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import { Link } from 'react-router-dom';
import { Camera, Image as ImageIcon, Upload, ChevronLeft } from "lucide-react";

const TryOn = () => {
  const webcamRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null); // Will always start as null
  const [isMobileView, setIsMobileView] = useState(false);

  // Responsive view detection
  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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

  const handleSubmit = async () => {
    if (!capturedImage) {
      alert("Please capture or upload an image first.");
      return;
    }

    try {
      const response = await fetch("https://your-backend-api-endpoint.com/upload", { // Placeholder
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
        
      }
    } catch (error) {
      console.error("Error submitting image:", error);
      alert("An error occurred while sending the image.");
    }
  };

  const handleCaptureButtonClick = () => {
    if (isCameraOn) {
      capturePhoto();
    } else {
      setCapturedImage(null); // Clear previous image from display
      
      setIsCameraOn(true);
    }
  };

  const handleGalleryButtonClick = () => {
    document.getElementById("fileInput")?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setCapturedImage(reader.result);
          setIsCameraOn(false);
          
          localStorage.setItem('virtualHairPhoto', reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-6 sm:py-10 px-4">
      {/* Header Section */}
      {isMobileView ? (
        <div className="w-full flex items-center mb-6 sm:mb-8 relative px-2">
          <button
            onClick={() => window.history.back()}
            className="absolute left-0 text-gray-700 hover:text-gray-900 transition-colors p-2"
            aria-label="Go back"
          >
            <ChevronLeft size={28} />
          </button>
          <h1 className="text-xl font-semibold text-gray-800 mx-auto">
            2D Try-on
          </h1>
        </div>
      ) : (
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">
            Virtual Hair 2D Try-On Experience
          </h1>
          <p className="text-md text-gray-600 mt-2">
            Experience our advanced 2D hair visualization technology
          </p>
        </div>
      )}

      {/* Image Display Area */}
      <div
        className={`bg-[#DDCDBF] rounded-xl flex items-center justify-center shadow-lg
                  ${isMobileView ? 'w-[90vw] max-w-[380px] h-auto aspect-[6/5] p-3' : 'w-full max-w-[500px] h-[320px] p-4'}
                `}
      >
        <div className={`relative w-2/3 h-full
                          ${isMobileView ? 'max-w-[260px] max-h-[260px]' : 'max-w-[260px] max-h-[260px]'}
                          bg-white rounded-full border-2 border-dashed border-gray-500
                          flex items-center justify-center overflow-hidden aspect-square mx-auto`}
        >
          {isCameraOn ? (
            <Webcam
              ref={webcamRef}
              mirrored
              screenshotFormat="image/jpeg"
              videoConstraints={{ facingMode: 'user', width: 1280, height: 720 }}
              className="w-full h-full object-cover"
            />
          ) : capturedImage ? (
            <img
              src={capturedImage}
              alt="Captured"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-lg text-gray-500 text-center p-2">2D Image</span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className={`mt-8 flex ${isMobileView ? 'flex-col space-y-3 w-[90vw] max-w-[380px]' : 'flex-row space-x-4 items-center'} justify-center`}>
        <button
          onClick={handleCaptureButtonClick}
          className={`text-white px-6 py-3 rounded-full shadow-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-medium
                        ${isMobileView ? 'w-full' : 'min-w-[160px]'} bg-[#A57E6E]`}
        >
          <Camera size={20} /> {isCameraOn ? 'Take Picture' : 'Capture'}
        </button>
        <button
          onClick={handleGalleryButtonClick}
          className={`border px-6 py-3 rounded-full shadow-md hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 font-medium
                        ${isMobileView ? 'w-full' : 'min-w-[160px]'} bg-white text-[#A57E6E] border-[#A57E6E]`}
        >
          {isMobileView ? <Upload size={20} /> : <ImageIcon size={20} />}
          {isMobileView ? 'Upload From Gallery' : 'Gallery'}
        </button>
      </div>

      {/* Secondary Actions: Try Again and Submit */}
      {(capturedImage || isCameraOn) && (
        <div className={`mt-6 flex ${isMobileView ? 'flex-col space-y-3 w-[90vw] max-w-[380px]' : 'flex-row space-x-4 items-center'} justify-center`}>
          <button
            onClick={handleTryAgain}
            className={`px-6 py-3 rounded-full shadow-md transition-colors font-medium
                              ${isMobileView ? 'w-full' : 'min-w-[160px]'} bg-gray-200 hover:bg-gray-300 text-gray-700`}
          >
            Clear & Start Over
          </button>
          {capturedImage && !isCameraOn && (
            <Link to="/swap"> {/* Ensure this route is configured in your router */}
              <button
                onClick={handleSubmit} // handleSubmit now also handles backend communication
                className={`text-white px-6 py-3 rounded-full shadow-md transition-colors font-medium
                                ${isMobileView ? 'w-full' : 'min-w-[160px]'} bg-sky-500 hover:bg-sky-600`}
              >
                Submit Image
              </button>
            </Link>
          )}
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        id="fileInput"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default TryOn;