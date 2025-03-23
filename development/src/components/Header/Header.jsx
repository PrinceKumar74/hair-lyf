// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <div>
      {/* Top Banner */}
      <div className="bg-gray-700 text-white text-center py-2">
        <span className="mr-8">Easy Exchange</span>
        <span className="mr-8">COD</span>
        <span className="mr-8">Free Shipping</span>
        <span>+237826764975</span>
      </div>

      {/* Main Header */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          <span className="text-xl font-bold">HAIR</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-gray-800">
          <li>
            <Link to="/shop" className="hover:text-blue-500">
              SHOP
            </Link>
          </li>
          <li>
            <Link
              to="/try-on"
              className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
            >
              3-D Try On
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/book" className="hover:text-blue-500">
              BOOK
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-blue-500">
              BLOGS
            </Link>
          </li>
          <li>
            <Link to="/best-seller" className="hover:text-blue-500">
              BEST SELLER
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex space-x-4">
          <Link to="/search" className="text-gray-600 hover:text-blue-500">
            <FaSearch size={20} />
          </Link>
          <Link to="/wishlist" className="text-gray-600 hover:text-blue-500">
            <FaHeart size={20} />
          </Link>
          <Link to="/cart" className="text-gray-600 hover:text-blue-500">
            <FaShoppingCart size={20} />
          </Link>
          <Link to="/profile" className="text-gray-600 hover:text-blue-500">
            <FaUser size={20} />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;