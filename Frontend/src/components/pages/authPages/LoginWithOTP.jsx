import React from 'react';

const LoginWithOTP = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh]">
      <div className="w-full max-w-md px-6 py-8">
        <h1 className="text-3xl font-bold text-center mb-2">Log in with OTP</h1>
        <p className="text-gray-500 text-center mb-8">
          Lorem ipsum dolor sit amet consectetur. Leo eget quam dui in posuere nulla.
        </p>

        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-medium text-gray-700 mb-1">Phone number</h2>
            <input
              type="tel"
              className="w-full px-4 py-3 border border-[#D0764F] rounded-lg focus:ring-2 focus:ring-[#D0764F] focus:border-[#D0764F]"
              placeholder="123456789"
            />
            <p className="mt-1 text-sm text-green-600">OTP sent </p>
          </div>


          <button
            className="w-full bg-[#D0764F] text-white py-3 px-4 rounded-lg hover:bg-[#c06943] transition-colors font-medium"
          >
            Send OTP
          </button>
        </div>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button
          className="w-full border border-[#D0764F] text-[#D0764F] py-3 px-4 rounded-lg hover:bg-[#D0764F]/10 transition-colors font-medium"
        >
          Log in with Email
        </button>
      </div>
    </div>
  );
};

export default LoginWithOTP;