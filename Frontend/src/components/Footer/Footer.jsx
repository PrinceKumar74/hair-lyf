import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Explore Section */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              {['Marketplace', 'Campaigns', 'Customer Relationship Manager', 'Workforce Management', 'Pricing'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Section */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h3 className="text-white font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              {['Digital Marketing', 'Real Estate', 'Finance', 'Marketplace'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Become Agent Section */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <h3 className="text-white font-semibold mb-4">Become an Agent</h3>
            <p className="mb-4">Your next job opportunities await for you</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors duration-200">
              LEARN MORE
            </button>
          </div>

          {/* Company Section */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Terms of Service', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Check out our Help Center
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span>Follow us in</span>
              <div className="flex space-x-4">
                {['Twitter', 'Facebook', 'LinkedIn'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
            <div className="text-sm text-gray-400">
              © Overpass 2020
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;






// // Footer.jsx
// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="relative bg-blue-500 text-white">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 overflow-hidden">
//         <svg
//           className="w-full h-full"
//           viewBox="0 0 1920 1080"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M0 0H1920V720C1920 720 1440 1080 960 1080C480 1080 0 720 0 720V0Z"
//             fill="#FFC300"
//           />
//         </svg>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-center">
//         {/* Left Section */}
//         <div className="md:w-1/2 space-y-8">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
//               <svg
//                 className="w-4 h-4"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" />
//               </svg>
//             </div>
//             <span className="text-xl font-bold">OVERPASS</span>
//           </div>

//           {/* Explore Section */}
//           <div>
//             <h2 className="text-lg font-bold mb-2">Explore</h2>
//             <ul className="space-y-1">
//               <li>
//                 <a href="#" className="text-sm hover:underline">
//                   Marketplace
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-sm hover:underline">
//                   Campaigns
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-sm hover:underline">
//                   Customer Relationship Manager
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-sm hover:underline">
//                   Workforce Management
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-sm hover:underline">
//                   Pricing
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Company Section */}
//           <div>
//             <h2 className="text-lg font-bold mb-2">Company</h2>
//             <ul className="space-y-1">
//               <li>
//                 <a href="#" className="text-sm hover:underline">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-sm hover:underline">
//                   Careers
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-sm hover:underline">
//                   Blog
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="md:w-1/2 space-y-8">
//           {/* Industries Section */}
//           <div>
//             <h2 className="text-lg font-bold mb-2">Industries</h2>
//             <ul className="space-y-1">
//               <li>
//                 <a href="#" className="text-sm hover:underline">
//                   Digital Marketing
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-sm hover:underline">
//                   Real Estate
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-sm hover:underline">
//                   Finance Marketplace
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Become an Agent Section */}
//           <div>
//             <h2 className="text-lg font-bold mb-2">Become an Agent</h2>
//             <p className="text-sm">
//               Your next job opportunities await for you
//             </p>
//             <button className="bg-black text-white px-4 py-2 mt-2 rounded hover:bg-gray-800 transition-colors">
//               LEARN MORE
//             </button>
//           </div>

//           {/* Resources Section */}
//           <div>
//             <h2 className="text-lg font-bold mb-2">Resources</h2>
//             <ul className="space-y-1">
//               <li>
//                 <a href="#" className="text-sm hover:underline">
//                   Terms of Service
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-sm hover:underline">
//                   Privacy Policy
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Support Section */}
//           <div>
//             <h2 className="text-lg font-bold mb-2">Support</h2>
//             <p className="text-sm">
//               Check out our{" "}
//               <a href="#" className="text-sm hover:underline">
//                 Help Center
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section - Social Media and Copyright */}
//       <div className="container mx-auto px-4 py-4 border-t border-gray-600 text-sm text-gray-300">
//         <div className="flex justify-between items-center">
//           {/* Social Media */}
//           <div className="flex space-x-4">
//             <span>Follow us</span>
//             <a href="#" className="hover:text-gray-200">
//               <svg
//                 className="w-4 h-4"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.356-.012-.53A8.348 8.348 0 0016 3.5c-1.654 0-3.026.672-4.112 1.772-.987 1.098-2.065 2.179-3.468 3.148a4.13 4.13 0 01-.676-.447A3.78 3.78 0 006 8.077c.088.216.23.432.377.648a3.287 3.287 0 00-.342-.18c-.264-.826-.106-1.826.718-2.5C5.42 6.865 7.69 5 10 5c1.71 0 4.578 1.651 4.578 3.918 0 .314-.03.624-.093.923A8.426 8.426 0 013.462 9.519c-.135.305-.52.962-.635 1.158-.13.23-.58 1.162-.903 2.077-.388.995-.636 1.957-.742 2.97-.126 1.248-.275 2.461-.43 3.751a8.56 8.56 0 01-1.304 3.237c-.853 1.65-3.012 2.967-5.824 2.967-3.814 0-6.76-3.455-6.76-7.82 0-.725.084-1.43.23-2.12zM10 13.101c2.43 0 4.432-1.482 4.432-3.3 0-1.268-.554-2.374-1.394-3.06 1.093.121 2.057.402 2.957.846a9.584 9.584 0 01-3.276 1.557c-.368.037-.732.058-1.096.058-.364 0-.73-.021-1.097-.063a9.593 9.593 0 01-3.3-1.558c.9 -.445 1.864-.725 2.958-.846C5.55 9.727 5 10.833 5 12.101c0 1.818 2.002 3.3 4.432 3.3z" />
//               </svg>
//             </a>
//             <a href="#" className="hover:text-gray-200">
//               <svg
//                 className="w-4 h-4"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M10 0a10 10 0 00-3.83 10.82l4.03 4.03a2 2 0 002.83-2.83l-4.03-4.03a11.95 11.95 0 016.86-3.46 11.95 11.95 0 013.46 6.86l4.03 4.03a2 2 0 002.83-2.83l-4.03-4.03a10 10 0 00-3.83-10.82z" />
//               </svg>
//             </a>
//           </div>

//           {/* Copyright */}
//           <div>
//             © Overpass 2023
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;