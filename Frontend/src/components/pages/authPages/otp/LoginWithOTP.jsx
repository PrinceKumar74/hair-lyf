// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const LoginWithOTP = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="flex flex-col items-center justify-center min-h-[90vh]">
//       <div className="w-full max-w-md px-6 py-8">
//         <h1 className="text-3xl font-bold text-center mb-2">Log in with OTP</h1>
//         <p className="text-gray-500 text-center mb-8">
//           Lorem ipsum dolor sit amet consectetur. Leo eget quam dui in posuere nulla.
//         </p>

//         <div className="relative mb-8">
//           <div className="absolute inset-0 flex items-center">
//           </div>
//         </div>

//         <div className="space-y-6">
//           <div>
//             <h2 className="text-sm font-medium text-gray-700 mb-1">Phone number</h2>
//             <input
//               type="tel"
//               className="w-full px-4 py-3 border border-[#D0764F] rounded-lg focus:ring-2 focus:ring-[#D0764F] focus:border-[#D0764F]"
//               placeholder="123456789"
//             />
            
//           </div>


//           <button
//             className="w-full bg-[#D0764F] text-white py-3 px-4 rounded-lg hover:bg-[#c06943] transition-colors font-medium"
//             onClick={()=> navigate('/verify-with-otp')}
//           >
//             Send OTP
//           </button>
//         </div>

        
//       </div>
//     </div>
//   );
// };

// export default LoginWithOTP;



































import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = "https://hairlyf-backend-api.onrender.com";

const LoginWithOTP = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!phone || phone.length < 10) {
      setError('Please enter a valid phone number');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/phone-auth/request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json', // Explicitly ask for JSON
        },
        body: JSON.stringify({ phone: phone.trim() }),
      });

      // First check if the response is JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        throw new Error(text || 'Invalid response from server');
      }

      const data = await response.json();
      console.log('API Response:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send OTP');
      }

      // If successful, navigate to verify page
      navigate('/verify-with-otp', { state: { phone } });
    } catch (err) {
      // Handle different types of errors
      if (err.message.includes('<!DOCTYPE html>')) {
        setError('Server error - received HTML response. Please check the API endpoint.');
      } else {
        setError(err.message || 'Something went wrong. Please try again.');
      }
      console.error('API Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh]">
      <div className="w-full max-w-md px-6 py-8">
        <h1 className="text-3xl font-bold text-center mb-2">Log in with OTP</h1>
        <p className="text-gray-500 text-center mb-8">
          Enter your phone number to receive a verification code
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1 block">
              Phone number
            </label>
            <input
              id="phone"
              type="tel"
              className="w-full px-4 py-3 border border-[#D0764F] rounded-lg focus:ring-2 focus:ring-[#D0764F] focus:border-[#D0764F]"
              placeholder="9876543210"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))} // Remove non-digit characters
              pattern="[0-9]{10}"
              maxLength="10"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#D0764F] text-white py-3 px-4 rounded-lg hover:bg-[#c06943] transition-colors font-medium disabled:opacity-50 flex justify-center items-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : 'Send OTP'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginWithOTP;