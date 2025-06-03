
import React, { useState, useEffect } from 'react';


// Helper to fetch image URL and convert to base64 data URL
const imageUrlToBase64 = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok for URL: ${url}`);
    }
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result); // reader.result is the base64 data URL
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error('Error fetching or converting image URL to base64:', error);
    throw error;
  }
};

// Helper function to convert a data URL (base64) to a Blob
const dataURLtoBlob = (dataurl) => {
  if (!dataurl) return null;
  const arr = dataurl.split(',');
  if (arr.length < 2) {
    console.error('Invalid data URL for blob conversion (missing comma):', dataurl.substring(0, 100) + '...');
    return null;
  }
  const mimeMatch = arr[0].match(/:(.*?);/);
  if (!mimeMatch || mimeMatch.length < 2) {
    console.error('Could not extract MIME type from data URL for blob conversion:', arr[0]);
    return null;
  }
  const mime = mimeMatch[1];
  try {
    const bstr = atob(arr[1]); // arr[1] is the base64 data
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  } catch (e) {
    console.error('Error decoding base64 string during blob conversion:', e, dataurl.substring(0,100) + '...');
    return null;
  }
};

// Define predefined wigs
const PREDEFINED_WIGS = [
  {
    id: 'wig1',
    name: 'Curly Wave Style 1',
    imgSrc: '/Wigs/wig1.png', 
    rating: 4.8, price: '₹1280', originalPrice: '₹2290', discount: '(50% OFF)',
  },
  {
    id: 'wig2',
    name: 'Straight Bob Style',
    imgSrc: '/Wigs/wig2.png', 
    rating: 4.7, price: '₹1350', originalPrice: '₹2400', discount: '(44% OFF)',
  },
  {
    id: 'wig3',
    name: 'Long Layers Style',
    imgSrc: '/Wigs/wig3.png', 
    rating: 4.9, price: '₹1500', originalPrice: '₹3000', discount: '(50% OFF)',
  },
  {
    id: 'wig4',
    name: 'Short Pixie Cut',
    imgSrc: '/Wigs/women-wig.png', 
    rating: 4.6, price: '₹1100', originalPrice: '₹2000', discount: '(45% OFF)',
  },
];

const SwapHairForm = () => {
  const [faceImageBase64, setFaceImageBase64] = useState(null); // Data URL of the original user photo
  const [originalFaceImageSrc, setOriginalFaceImageSrc] = useState('https://via.placeholder.com/350x350/ECECEC/AAA?Text=Your+Photo'); // For displaying the original image
  const [mainDisplayImageSrc, setMainDisplayImageSrc] = useState('https://via.placeholder.com/350x350/F0F0F0/CCC?Text=Try-On+Preview'); // For displaying the processed/preview image
  const [loading, setLoading] = useState(false);
  const [processingWigId, setProcessingWigId] = useState(null);
  const [error, setError] = useState('');

  const placeholderOriginal = 'https://via.placeholder.com/350x350/ECECEC/AAA?Text=Upload+Your+Photo';
  const placeholderPreview = 'https://via.placeholder.com/350x350/F0F0F0/CCC?Text=Select+a+Style';

  useEffect(() => {
    try {
      const savedFaceImage = localStorage.getItem('virtualHairPhoto'); // Expects data URL
      if (savedFaceImage) {
        setFaceImageBase64(savedFaceImage);
        setOriginalFaceImageSrc(savedFaceImage);
        setMainDisplayImageSrc(savedFaceImage); 
      } else {
        setOriginalFaceImageSrc(placeholderOriginal);
        setMainDisplayImageSrc(placeholderPreview);
        console.warn("No 'virtualHairPhoto' found in localStorage. Please upload an image.");
      }
    } catch (e) {
      console.error("Error accessing localStorage:", e);
      setOriginalFaceImageSrc(placeholderOriginal);
      setMainDisplayImageSrc('https://via.placeholder.com/350x350/FFF/CCC?Text=Error+Loading');
      setError("Could not load your saved image from browser storage.");
    }
  }, []);

  const handleResetPreview = () => {
    if (faceImageBase64) {
      setMainDisplayImageSrc(faceImageBase64); 
      setError('');
    } else {
      setMainDisplayImageSrc(placeholderPreview);
      setError('No base face image available. Please upload your photo first.');
    }
  };

  const handleWigPreview = async (wig) => {
    if (!faceImageBase64) {
      alert('Please ensure your photo is loaded. Check if "virtualHairPhoto" is set in localStorage or upload again.');
      setError('Your face image is not available. Please upload your photo.');
      return;
    }

    setLoading(true);
    setProcessingWigId(wig.id);
    setError('');

    try {
      const wigImageBase64 = await imageUrlToBase64(wig.imgSrc);
      const faceBlob = dataURLtoBlob(faceImageBase64);
      const wigBlob = dataURLtoBlob(wigImageBase64);

      if (!faceBlob) {
        throw new Error('Failed to process your face image. Ensure "virtualHairPhoto" in localStorage is a valid image data URL.');
      }
      if (!wigBlob) {
        throw new Error(`Failed to process the wig image (${wig.name}). Please check the wig image source.`);
      }
      
      const formData = new FormData();
      const faceFileExtension = faceBlob.type.split('/')[1] || 'png';
      const wigFileExtension = wigBlob.type.split('/')[1] || 'png';

      formData.append('face', faceBlob, `face_image.${faceFileExtension}`);
      formData.append('shape', wigBlob, `wig_shape_image.${wigFileExtension}`);
      formData.append('color', wigBlob, `wig_color_image.${wigFileExtension}`);
      formData.append('align', 'true');
      formData.append('use_poisson', 'false');
      formData.append('poisson_erosion', '15');

      const response = await fetch('http://hairgain-lb-242445726.us-east-1.elb.amazonaws.com/swap_hair_file', {
        method: 'POST',
        headers: {
          'Accept': 'image/png', 
        },
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Hair swap service failed (status ${response.status}): ${errorText.substring(0, 200)}`);
      }

      const resultBlob = await response.blob();
      const resultImgURL = URL.createObjectURL(resultBlob);
      setMainDisplayImageSrc(resultImgURL);

    } catch (err) {
      console.error('Error during hair swap:', err);
      setError(`Failed to preview style: ${err.message}`);
      if (faceImageBase64) setMainDisplayImageSrc(faceImageBase64); else setMainDisplayImageSrc(placeholderPreview);
    } finally {
      setLoading(false);
      setProcessingWigId(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto my-8 p-6 sm:p-10 bg-white rounded-xl shadow-2xl font-sans">
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-2">Virtual Hair Try-On</h1>
      <p className="text-center text-gray-600 mb-10 text-lg">See how different hairstyles look on you instantly!</p>

      {error && (
        <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-md shadow" role="alert">
          <p className="font-bold">Oops! Something went wrong.</p>
          <p>{error}</p>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Image Display Area (Original and Processed) */}
        <div className="lg:w-1/2 flex flex-col gap-8"> {/* Increased gap for more separation */}
          {/* Original Image Display */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3 text-center">Your Photo</h2>
            <div className="w-full max-w-sm bg-gray-100 rounded-xl shadow-lg p-3">
              <img
                src={originalFaceImageSrc}
                alt="Your uploaded photo"
                className="w-full h-auto object-contain rounded-lg aspect-[4/4]"
                onError={() => {
                  setOriginalFaceImageSrc(placeholderOriginal);
                  // setError("Could not display your original image."); // Avoid duplicate errors if main error is present
                }}
              />
            </div>
          </div>

          {/* Processed Image Display */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3 text-center">Try-On Preview</h2>
            <div className="w-full max-w-sm bg-gray-100 rounded-xl shadow-lg p-3 relative">
                {loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-80 z-10 rounded-lg">
                    <div className="w-16 h-16 border-4 border-orange-300 border-t-orange-600 rounded-full animate-spin"></div>
                    <p className="mt-3 text-orange-600 font-semibold">Swapping Style...</p>
                </div>
                )}
                <img
                    src={mainDisplayImageSrc}
                    alt="Hair try-on result"
                    className="w-full h-auto object-contain rounded-lg aspect-[4/4]"
                    onError={() => { 
                    setError("Could not display the preview image.");
                    setMainDisplayImageSrc(placeholderPreview);
                    }}
                />
            </div>
            <button
              onClick={handleResetPreview}
              disabled={loading || !faceImageBase64}
              className={`mt-6 px-8 py-3 border-2 font-semibold rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-50
                ${loading || !faceImageBase64
                  ? 'border-gray-300 text-gray-400 cursor-not-allowed'
                  : 'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white focus:ring-orange-400'
                }`}
            >
              Reset Preview
            </button>
          </div>
        </div>

        {/* Wig Options Area */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Choose a Hairstyle</h2>
          {!faceImageBase64 && (
            <div className="mb-6 p-4 bg-orange-50 border-l-4 border-orange-400 text-orange-700 rounded-md shadow">
              <p className="font-semibold text-orange-800">Quick Tip:</p>
              <p className="text-sm">To try on hairstyles, your photo needs to be loaded. Make sure 'virtualHairPhoto' is set in your browser's storage (usually from an upload page).</p>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PREDEFINED_WIGS.map((wig) => (
              <div key={wig.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col group">
                <img
                  src={wig.imgSrc}
                  alt={wig.name}
                  className="w-full h-52 object-contain group-hover:opacity-90 transition-opacity"
                />
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">{wig.name}</h3>
                  <div className="text-sm text-yellow-500 mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 font-bold">{wig.rating}</span>
                    <span className="text-gray-500 ml-2 text-xs">(Sample Rating)</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-orange-600">{wig.price}</span>
                    <span className="text-sm text-gray-400 line-through ml-2">{wig.originalPrice}</span>
                    <span className="text-xs text-green-600 font-semibold ml-2 bg-green-100 px-2 py-0.5 rounded-md">{wig.discount}</span>
                  </div>
                  <button
                    onClick={() => handleWigPreview(wig)}
                    disabled={loading || !faceImageBase64}
                    className={`w-full mt-auto py-3 px-4 rounded-lg font-semibold tracking-wide transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2
                      ${(loading && processingWigId === wig.id)
                        ? 'bg-orange-300 text-white cursor-wait focus:ring-orange-300'
                        : (loading || !faceImageBase64)
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed focus:ring-gray-300'
                          : 'bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500 active:bg-orange-700'
                      }`}
                  >
                    {loading && processingWigId === wig.id ? 'Processing...' : 'Preview this Style'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapHairForm;