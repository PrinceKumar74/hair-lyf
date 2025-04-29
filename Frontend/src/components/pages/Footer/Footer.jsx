import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import upi from "../../../../public/footerImg/upi.png";
import visa from "../../../../public/footerImg/visa.png";
import paypal from "../../../../public/footerImg/paypal.png";
import mastercard from "../../../../public/footerImg/mastercard.png";
import { SiAdguard } from "react-icons/si";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white  text-gray-700" >
      <div className="container mx-auto px-6 lg:px-16 xl:px-32 py-10">
        {/* <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-8"> */}
        <div className="grid grid-cols-1 md:grid-rows-2 gap-8">
          {/* Newsletter & Social */}
          <div className="col-span-1 md:row-start-1 md:col-start-3 md:col-span-2 flex flex-col items-center md:items-start ">
            <h2 className="text-2xl font-bold mb-4 md:hidden">Company Name</h2>
            <p className="text-lg font-semibold mb-2">
              Get the latest deals in your inbox
            </p>
            <form className="w-full max-w-md flex mb-6 gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#D0764F] text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Subscribe
              </button>
            </form>

            <h3 className="text-lg font-semibold mb-3">KEEP IN TOUCH</h3>
            <div className="flex space-x-4 text-gray-600">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-blue-600 transition-colors"
              >
                <FaFacebook size={40} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-pink-600 transition-colors"
              >
                <FaInstagram size={40} />
              </a>
              <a
                href="#"
                aria-label="X"
                className="hover:text-black transition-colors"
              >
                <FaTwitter size={40} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-blue-700 transition-colors"
              >
                <FaLinkedin size={40} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-red-600 transition-colors"
              >
                <FaYoutube size={40} />
              </a>
            </div>
          </div>

          {/* About Company & Customer Service - Side by side on all screens */}
          <div className="col-span-1 md:row-start-1 md:col-start-1 grid grid-cols-2 gap-8  md:gap-24">
            <div >
              <h3 className="text-xl font-bold mb-4">ABOUT COMPANY</h3>
              <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-[#D0764F] transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-[#D0764F] transition-colors">Careers</Link></li>
              <li><Link to="/press" className="hover:text-[#D0764F] transition-colors">Press</Link></li>
              <li><Link to="/sustainability" className="hover:text-[#D0764F] transition-colors">Sustainability</Link></li>
              <li><Link to="/faqs" className="hover:text-[#D0764F] transition-colors">FAQs</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">CUSTOMER SERVICE</h3>
              <ul className="space-y-2">
                <li><Link to="/contact" className="hover:text-[#D0764F] transition-colors">Contact Us</Link></li>
              <li><Link to="/return" className="hover:text-[#D0764F] transition-colors">Return Policy</Link></li>
              <li><Link to="/shipping" className="hover:text-[#D0764F] transition-colors">Shipping Info</Link></li>
              <li><Link to="/cancellation" className="hover:text-[#D0764F] transition-colors">Cancellation</Link></li>
              <li><Link to="/track-order" className="hover:text-[#D0764F] transition-colors">Track Order</Link></li>
              </ul>
            </div>
          </div>

          {/* Quick Links & Legal - Side by side on all screens */}
          <div className="col-span-1 md:row-start-2 md:col-start-1 grid grid-cols-2 gap-8 md:gap-24">
            <div>
              <h3 className="text-xl font-bold mb-4">QUICK LINKS</h3>
              <ul className="space-y-2">
                {[
                  "Home",
                  "Shop All",
                  "New Arrivals",
                  "Offers"
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-[#D0764F] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">LEGAL</h3>
              <ul className="space-y-2">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="hover:text-[#D0764F] transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Payments & Badges - Reordered as requested */}
          <div className="col-span-1 md:row-start-2 md:col-start-3 md:col-span-2 flex flex-col items-center md:items-start ">
            <div className="flex flex-row md:space-x-4 xl:space-x-8 space-x-8 mb-4">
              <div className="flex items-center space-x-2">
                <SiAdguard size={40} className="mr-4"/>
                <span className="lg:text-xl  flex flex-col">
                  <span>Guaranteed</span> Safe Checkout
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CiLock size={40} className="mr-4"/>
                <span className="xl:text-xl flex flex-col"><span>Secure SSL</span> Encryption</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-2 lg:gap-4">
              <img src={upi} alt="UPI" className="xl:h-16" />
              <img src={visa} alt="Visa" className="xl:h-16" />
              <img src={paypal} alt="PayPal" className="xl:h-16" />
              <img src={mastercard} alt="Mastercard" className="h-16" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} HairLyf. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;























