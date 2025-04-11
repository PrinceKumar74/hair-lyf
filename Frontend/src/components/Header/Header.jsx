import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTotalItems } from '../../store/slice/cartSlice';
import { Link } from "react-router-dom";
import {
  FaBars,
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaTimes,
} from "react-icons/fa";
// import SearchBar from "./SearchBar/SearchBar";
import TryOnButton from "../ReusableComponents/TryOnButton";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Use the selector to get the total number of items in the cart
  const totalItems = useSelector(selectTotalItems);

  // Handle input change
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search action
  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // You can replace this with your desired search logic:
      // e.g., redirect to a search page or update state
      // window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    } else {
      alert("Please enter a search query.");
    }
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Main Header */}
      <nav className="bg-gray-800 text-white shadow-md px-4 py-1 flex justify-between items-center">
        {/* Logo (Always Visible) */}
        <div className="flex items-center space-x-2">
          <img src="/assets/logo.png" alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Navigation Links (Visible on Larger Screens) */}
        <ul className="hidden lg:flex space-x-8 text-white items-center">
          <li>
            <Link to="/" className="hover:text-orange-400">
              HOME
            </Link>
          </li>
          
          <li>
            <Link to="/ourStory" className="hover:text-orange-400">
              OUR STORY
            </Link>
          </li>
          <li>
            <Link to="/tryOn">
              <TryOnButton />
            </Link>
          </li>
          <li>
            <Link to="/help" className="hover:text-orange-400">
              HELP
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-orange-400">
              BLOGS
            </Link>
          </li>
        </ul>

        {/* Icons (Always Visible) */}
        <div className="flex space-x-4 items-center">
          <Link to="/search" className="hover:text-orange-400">
            {/* <FaSearch size={20} /> */}
            <div className="relative">
              {/* Search Input */}
              <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Search..."
                className="px-4 py-2 pr-10 w-full rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 text-sm"
              />

              {/* Search Icon */}
              <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 transition-colors duration-300"
              >
                <FaSearch size={16} />
              </button>
            </div>
          </Link>
          <Link to="/wishlist" className="hover:text-orange-400">
            <FaHeart size={20} />
          </Link>
          {/* Cart Icon with Badge */}
          <Link to="/cart" className="hover:text-orange-400 relative">
            <FaShoppingCart size={20} />

            {/* Badge for Cart Count */}
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {/* User Icon - Conditionally Rendered for Larger Screens */}
          <div className="hidden md:block">
            <Link to="/profile" className="hover:text-orange-400">
              <FaUser size={20} />
            </Link>
          </div>
        </div>

        {/* Hamburger Menu (Visible on Smaller Screens) */}
        <div className="lg:hidden">
          <button onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <FaTimes size={24} className="text-white" />
            ) : (
              <FaBars size={24} className="text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Sidebar (Collapsible Menu) */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4">
          {/* Close Button */}
          <button
            className="text-white absolute top-8 right-4"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaTimes size={24} />
          </button>

          {/* Sidebar Links */}
          <ul className="space-y-4 ">
            <li>
              <div className="flex items-center space-x-2">
                <img
                  src="/assets/logo.png"
                  alt="Logo"
                  className="h-16 w-auto"
                />
              </div>
            </li>
            <li>
              <Link
                to="/"
                className="block hover:text-orange-400"
                onClick={() => setIsSidebarOpen(false)}
              >
                HOME
              </Link>
            </li>

            <li>
              <Link
                to="/ourStory"
                className="block hover:text-orange-400"
                onClick={() => setIsSidebarOpen(false)}
              >
                OUR STORY
              </Link>
            </li>
            <li>
              <Link to="/tryOn" onClick={() => setIsSidebarOpen(false)}>
                <TryOnButton />
              </Link>
            </li>
            <li>
              <Link
                to="/help"
                className="block hover:text-orange-400"
                onClick={() => setIsSidebarOpen(false)}
              >
                HELP
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="block hover:text-orange-400"
                onClick={() => setIsSidebarOpen(false)}
              >
                BLOGS
              </Link>
            </li>
           
          </ul>

          {/* User Icon in Sidebar - Positioned at Bottom Left */}
          <div className="absolute bottom-4 left-4">
            <Link
              to="/profile"
              className="hover:text-orange-400"
              onClick={() => setIsSidebarOpen(false)}
            >
              <FaUser size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay to Close Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Header;
