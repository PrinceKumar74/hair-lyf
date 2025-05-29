import React, { useState } from 'react';

// ForgotPassword Component: Renders a form for users to request a password reset link.
function ForgotPassword() {
  // State to hold the email input value
  const [email, setEmail] = useState('');

  // Handler for form submission (currently just logs the email)
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log('Password reset requested for:', email);
    // TODO: Add logic here to send the password reset request to your backend API
    alert('Password reset link request submitted for ' + email + ' (check console)'); // Replace with better user feedback
  };

  // Handler for email input changes
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Handler for "Go back to Login" click (replace with actual navigation logic)
  const handleGoBack = () => {
    console.log('Navigate back to login');
    // TODO: Add navigation logic here (e.g., using React Router)
    alert('Navigating back to Login page (implement navigation)');
  };

  return (
    // Main container: Full screen height, flexbox centering, background image
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center font-sans"
      // IMPORTANT: Replace 'YOUR_BACKGROUND_IMAGE_URL.jpg' with the actual path or URL to your image
      // Example: style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}
      // Or if using Vite and the image is in the public folder: style={{ backgroundImage: "url('/image_bd1569.jpg')" }}
      style={{ backgroundImage: "url('YOUR_BACKGROUND_IMAGE_URL.jpg')" }}
    >
      {/* Form Card: Centered, white background with transparency, padding, rounded corners, shadow */}
      <div className="bg-white bg-opacity-90 p-8 md:p-12 rounded-lg shadow-xl max-w-md w-full mx-4">

        {/* Company Name */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-left">
          Company Name
        </h1>

        {/* Forgot Password Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">
          Forgot Password
        </h2>

        {/* Instruction Text */}
        <p className="text-gray-600 mb-6 text-sm">
          Enter your registered email
        </p>

        {/* Form Element */}
        <form onSubmit={handleSubmit}>
          {/* Email Input Field */}
          <div className="mb-6">
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="abc@gmail.com" // Placeholder text like in the image
              required // Make email input mandatory
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200" // Added focus styling
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-4 rounded-md transition duration-300 ease-in-out mb-4" // Orange-brown color like image
          >
            Get a reset link
          </button>
        </form>

        {/* Go Back Link/Button */}
        <button
            onClick={handleGoBack}
            className="text-sm text-orange-600 hover:text-orange-800 hover:underline transition duration-200"
        >
            Go back to Login
        </button>
      </div>
    </div>
  );
}

// Export the component for use in other parts of the application
export default ForgotPassword;
