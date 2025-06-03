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

  // Get email and phone from navigation state
  const email = location.state?.email;
  const phone = location.state?.phone;

  useEffect(() => {
    if (!email || !phone) {  console.log(phone)

      setMessage('Email or phone number not found. Please register again.');
      setTimeout(() => navigate('/register'), 3000);
    }
  }, [email, phone, navigate]);

  const handleChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text/plain').trim();
    if (/^\d{6}$/.test(pasteData)) {
      const pasteOtp = pasteData.split('');
      setOtp(pasteOtp);
      inputRefs.current[5].focus();
    }
  };

  const verifyOtp = async () => {
    const otpString = otp.join('');
    if (otpString.length !== 6) {
      setMessage('Please enter a 6-digit OTP');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/verify-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          otp: otpString
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Invalid OTP');
      }

      setMessage('Email verified successfully!');
      setTimeout(() => navigate('/login'), 2000);
      
    } catch (error) {
      setMessage(error.message || 'Verification failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const resendOtp = async () => {
    if (!email) {
      setMessage('Email not found. Please register again.');
      return;
    }

    setResendDisabled(true);
    setCountdown(30);
    setMessage('Sending new OTP...');

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/resend-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to resend OTP');
      }

      setMessage('New OTP sent successfully!');
    } catch (error) {
      setMessage(error.message || 'Failed to resend OTP. Please try again.');
      setResendDisabled(false);
      setCountdown(0);
    }
  };

  useEffect(() => {
    if (resendDisabled && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setResendDisabled(false);
    }
  }, [resendDisabled, countdown]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800">Verify Your Email</h1>
        <p className="text-sm text-center text-gray-600">
          Enter the 6-digit OTP sent to {email || 'your email'}
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
              className={`w-12 h-12 text-2xl text-center border-2 rounded-md focus:outline-none focus:ring-1 
                ${message.includes('success') 
                  ? 'border-green-500 focus:border-green-500 focus:ring-green-500' 
                  : 'border-gray-300 focus:border-[#D0764F] focus:ring-[#D0764F]'}`}
              disabled={isLoading}
            />
          ))}
        </div>

        {message && (
          <p className={`text-sm text-center ${
            message.includes('success') ? 'text-green-600' : 'text-red-600'
          }`}>
            {message}
          </p>
        )}

        <button
          onClick={verifyOtp}
          disabled={isLoading || otp.join('').length !== 6}
          className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-colors
            ${isLoading ? 'bg-[#D0764F]/80' : 'bg-[#D0764F] hover:bg-[#c06943]'}
            ${otp.join('').length !== 6 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Verifying...
            </span>
          ) : 'Verify Email'}
        </button>

        <div className="text-center">
          <button 
            onClick={resendOtp} 
            disabled={resendDisabled}
            className={`text-sm ${
              resendDisabled ? 'text-gray-400 cursor-not-allowed' : 'text-[#D0764F] hover:text-[#c06943]'
            }`}
          >
            {resendDisabled ? `Resend OTP in ${countdown}s` : 'Resend OTP'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;