// // OTPVerification.jsx
// import React, { useState, useRef, useEffect } from 'react';

// const OTPVerification = () => {
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [isLoading, setIsLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const inputRefs = useRef([]);

//   // Handle OTP input change
//   const handleChange = (index, value) => {
//     if (/^\d*$/.test(value) && value.length <= 1) {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);

//       // Auto focus to next input
//       if (value && index < 5) {
//         inputRefs.current[index + 1].focus();
//       }
//     }
//   };

//   // Handle backspace key
//   const handleKeyDown = (index, e) => {
//     if (e.key === 'Backspace' && !otp[index] && index > 0) {
//       inputRefs.current[index - 1].focus();
//     }
//   };

//   // Handle paste event
//   const handlePaste = (e) => {
//     e.preventDefault();
//     const pasteData = e.clipboardData.getData('text/plain').trim();
//     if (/^\d{6}$/.test(pasteData)) {
//       const pasteOtp = pasteData.split('');
//       const newOtp = [...otp];
//       for (let i = 0; i < 6; i++) {
//         if (i < pasteOtp.length) {
//           newOtp[i] = pasteOtp[i];
//         }
//       }
//       setOtp(newOtp);
//     }
//   };

//   // Verify OTP
//   const verifyOtp = async () => {
//     const otpString = otp.join('');
//     if (otpString.length !== 6) {
//       setMessage('Please enter a 6-digit OTP');
//       return;
//     }

//     setIsLoading(true);
//     setMessage('');

//     try {
//       // Simulate API call to backend
//       // Replace this with your actual API call
//       const response = await mockApiCall(otpString);
      
//       if (response.success) {
//         setMessage('OTP verified successfully!');
//         // Handle successful verification (e.g., redirect user)
//       } else {
//         setMessage(response.message || 'Invalid OTP. Please try again.');
//       }
//     } catch (error) {
//       setMessage('An error occurred. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Mock API call function
//   const mockApiCall = (otp) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         // In a real app, this would be your actual API response
//         // For demo, we'll consider '123456' as the valid OTP
//         if (otp === '123456') {
//           resolve({ success: true, message: 'OTP verified' });
//         } else {
//           resolve({ success: false, message: 'Invalid OTP' });
//         }
//       }, 1000);
//     });
//   };

//   // Auto focus first input on mount
//   useEffect(() => {
//     if (inputRefs.current[0]) {
//       inputRefs.current[0].focus();
//     }
//   }, []);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold text-center text-gray-800">OTP Verification</h1>
//         <p className="text-sm text-center text-gray-600">
//           Please enter the 6-digit OTP sent to your registered email/mobile
//         </p>

//         <div className="flex justify-center space-x-3">
//           {otp.map((digit, index) => (
//             <input
//               key={index}
//               type="text"
//               inputMode="numeric"
//               pattern="[0-9]*"
//               maxLength="1"
//               value={digit}
//               onChange={(e) => handleChange(index, e.target.value)}
//               onKeyDown={(e) => handleKeyDown(index, e)}
//               onPaste={handlePaste}
//               ref={(el) => (inputRefs.current[index] = el)}
//               className="w-12 h-12 text-2xl text-center border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
//             />
//           ))}
//         </div>

//         {message && (
//           <p className={`text-sm text-center ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
//             {message}
//           </p>
//         )}

//         <button
//           onClick={verifyOtp}
//           disabled={isLoading}
//           className={`w-full py-2 px-4 rounded-md text-white font-medium ${isLoading ? 'bg-blue-400' : 'bg-[#D0764F] hover:bg-[#c06943]'}`}
//         >
//           {isLoading ? 'Verifying...' : 'Verify OTP'}
//         </button>

//         <div className="text-center">
//           <button className="text-sm text-[#D0764F] hover:text-[#c06943]">
//             Resend OTP
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OTPVerification;



























import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const API_BASE_URL = "https://hairlyf-backend-api.onrender.com";

const OTPVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const inputRefs = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Get phone number from navigation state or location
  const phone = location.state?.phone || '';
  console.log(phone)

  // Handle OTP input change
  const handleChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto focus to next input
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Handle backspace key
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle paste event
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text/plain').trim();
    if (/^\d{6}$/.test(pasteData)) {
      const pasteOtp = pasteData.split('');
      const newOtp = [...otp];
      for (let i = 0; i < 6; i++) {
        if (i < pasteOtp.length) {
          newOtp[i] = pasteOtp[i];
        }
      }
      setOtp(newOtp);
    }
  };

  // Verify OTP with the API
  const verifyOtp = async () => {
    const otpString = otp.join('');
    if (otpString.length !== 6) {
      setMessage('Please enter a 6-digit OTP');
      return;
    }

    if (!phone) {
      setMessage('Phone number not found. Please start the process again.');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/phone-auth/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          phone: phone,
          otp: otpString
        }),
      });

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        throw new Error(text || 'Invalid response from server');
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'OTP verification failed');
      }

      // If verification is successful
      setMessage('OTP verified successfully!');
      
      // Redirect user after successful verification
      // Replace '/dashboard' with your desired route
      setTimeout(() => navigate('/dashboard'), 1000);
      
    } catch (error) {
      setMessage(error.message || 'An error occurred. Please try again.');
      console.error('OTP Verification Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Resend OTP function
  const resendOtp = async () => {
    if (!phone) {
      setMessage('Phone number not found. Please start the process again.');
      return;
    }

    setResendDisabled(true);
    setCountdown(30);
    setMessage('Sending new OTP...');

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/phone-auth/request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ phone }),
      });

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        throw new Error(text || 'Invalid response from server');
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to resend OTP');
      }

      setMessage('New OTP sent successfully!');
    } catch (error) {
      setMessage(error.message || 'Failed to resend OTP. Please try again.');
    }
  };

  // Countdown timer for resend OTP
  useEffect(() => {
    if (resendDisabled && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setResendDisabled(false);
    }
  }, [resendDisabled, countdown]);

  // Auto focus first input on mount
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800">OTP Verification</h1>
        <p className="text-sm text-center text-gray-600">
          Enter the 6-digit OTP sent to {phone || 'your number'}
        </p>

        <div className="flex justify-center space-x-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-12 h-12 text-2xl text-center border-2 border-gray-300 rounded-md focus:border-[#D0764F] focus:outline-none focus:ring-1 focus:ring-[#D0764F]"
              disabled={isLoading}
            />
          ))}
        </div>

        {message && (
          <p className={`text-sm text-center ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}

        <button
          onClick={verifyOtp}
          disabled={isLoading}
          className={`w-full py-3 px-4 rounded-lg text-white font-medium ${isLoading ? 'bg-[#D0764F]/80' : 'bg-[#D0764F] hover:bg-[#c06943]'}`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Verifying...
            </span>
          ) : 'Verify OTP'}
        </button>

        <div className="text-center">
          <button 
            onClick={resendOtp} 
            disabled={resendDisabled}
            className={`text-sm ${resendDisabled ? 'text-gray-400' : 'text-[#D0764F] hover:text-[#c06943]'}`}
          >
            {resendDisabled ? `Resend OTP in ${countdown}s` : 'Resend OTP'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;