// import React from 'react';
// import girlModel from '../../../../../public/hair/girlModel.jpeg';
// import boyModel from '../../../../../public/hair/boyModel.png';
// import { Link } from "react-router-dom";

// const HairCategories = () => {
//   return (
//     <div className="text-center py-10">
//       {/* Title */}
//       <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">OUR HAIR CATEGORIES</h2>
//       <hr className="border-t border-black w-[90%] mx-auto mt-4  mb-12" />

//       {/* Categories */}
//       <div className="flex flex-row md:flex-row justify-center items-center gap-12 md:gap-20">
//         {/* Men */}
//         <div className="flex flex-col items-center">
//             <Link to='/menProducts' className='text-xl md:text-2xl font-bold'>
//           <img
//             src={boyModel}
//             alt="Men"
//             className="w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 object-cover rounded-full"
//           />
//           </Link>
//           <p className="mt-4 text-xl md:text-2xl font-bold">Men</p>
//         </div>

//         {/* Women */}
//         <div className="flex flex-col items-center">
//         <Link to='/womenProducts' className='text-xl md:text-2xl font-bold'>
//           <img
//             src={girlModel}
//             alt="Women"
//             className="w-48 h-48  md:w-64 md:h-64  lg:w-96 lg:h-96 object-cover rounded-full"
//           />
//           </Link>
//           <p className="mt-4 text-xl md:text-2xl font-bold">Women</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HairCategories;

import React from 'react';

const girlModel = '/hair/girlModel.jpeg';
const boyModel = '/hair/boyModel.png';

const Link = ({ to, children, className }) => <a href={to} className={className}>{children}</a>;

const ShopByCategory = () => {
  const categories = [
    {
      name: 'Men',
      description: 'Explore our latest and trendy accessories',
      image: boyModel,
      link: '/menProducts',
    },
    {
      name: 'Women',
      description: 'Explore our latest and trendy accessories',
      image: girlModel,
      link: '/womenProducts',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white font-['Inter']">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-amber-700 mb-12 md:mb-16 tracking-tight">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center p-6 md:p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="md:mr-6 text-center md:text-left w-full md:w-2/3">
                <h3 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base mb-6">
                  {category.description}
                </p>
                <Link
                  to={category.link}
                  className="inline-flex items-center justify-center text-amber-600 font-semibold py-2 px-5 border border-amber-600 rounded-lg hover:bg-amber-600 hover:text-white transition-colors duration-300 text-sm lg:text-base group focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
                >
                  SHOP NOW
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </Link>
              </div>

              <div className="mt-6 md:mt-0 md:ml-auto w-full md:w-1/3 flex-shrink-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-36 h-36 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover rounded-lg mx-auto md:mx-0 shadow-md"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src="https://placehold.co/200x200/E2E8F0/9CA3AF?text=Image+Not+Found";
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;