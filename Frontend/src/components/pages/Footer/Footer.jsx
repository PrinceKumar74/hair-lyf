import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { SiAdguard } from "react-icons/si";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 text-gray-700 border-t border-gray-100 shadow-inner">
      <div className="container mx-auto px-6 lg:px-16 xl:px-32 py-16">
        <div className="grid grid-cols-1 md:grid-rows-2 gap-12">
          {/* Newsletter & Social */}
          <div className="col-span-1 md:row-start-1 md:col-start-3 md:col-span-2 flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold mb-4 md:hidden bg-gradient-to-r from-[#D0764F] to-orange-600 bg-clip-text text-transparent">
              HairLyf
            </h2>
            <p className="text-xl font-semibold mb-4 text-gray-800">
              Get the latest deals in your inbox
            </p>
            <form className="w-full max-w-md flex mb-8 gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow border-2 border-gray-200 rounded-xl px-6 py-3 focus:outline-none focus:border-[#D0764F] transition-all duration-300 shadow-sm"
              />
              <button
                type="submit"
                className="bg-[#D0764F] text-white px-8 py-3 rounded-xl hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-md font-semibold"
              >
                Subscribe
              </button>
            </form>

            <h3 className="text-lg font-bold mb-4 text-gray-800">KEEP IN TOUCH</h3>
            <div className="flex space-x-6 text-gray-600">
              {[
                { Icon: FaFacebook, color: "blue-600", label: "Facebook" },
                { Icon: FaInstagram, color: "pink-600", label: "Instagram" },
                { Icon: FaTwitter, color: "black", label: "X" },
                { Icon: FaLinkedin, color: "blue-700", label: "LinkedIn" },
                { Icon: FaYoutube, color: "red-600", label: "YouTube" },
              ].map(({ Icon, color, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className={`hover:text-${color} transition-all duration-300 transform hover:scale-110`}
                >
                  <Icon size={32} />
                </a>
              ))}
            </div>
          </div>

          {/* About Company & Customer Service */}
          <div className="col-span-1 md:row-start-1 md:col-start-1 grid grid-cols-2 gap-8 md:gap-24">
            <div className="footer-section">
              <h3 className="text-xl font-bold mb-6 text-gray-800 border-b-2 border-[#D0764F] pb-2 inline-block">
                ABOUT COMPANY
              </h3>
              <ul className="space-y-3">
                {[
                  { to: "/about", text: "About Us" },
                  { to: "/careers", text: "Careers" },
                  { to: "/press", text: "Press" },
                  { to: "/sustainability", text: "Sustainability" },
                  { to: "/faqs", text: "FAQs" },
                ].map((item) => (
                  <li key={item.text}>
                    <Link
                      to={item.to}
                      className="hover:text-[#D0764F] transition-all duration-300 flex items-center space-x-2 group"
                    >
                      <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                        {item.text}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="text-xl font-bold mb-6 text-gray-800 border-b-2 border-[#D0764F] pb-2 inline-block">
                CUSTOMER SERVICE
              </h3>
              <ul className="space-y-3">
                {[
                  { to: "/contact", text: "Contact Us" },
                  { to: "/return", text: "Return Policy" },
                  { to: "/shipping", text: "Shipping Info" },
                  { to: "/cancellation", text: "Cancellation" },
                  { to: "/track-order", text: "Track Order" },
                ].map((item) => (
                  <li key={item.text}>
                    <Link
                      to={item.to}
                      className="hover:text-[#D0764F] transition-all duration-300 flex items-center space-x-2 group"
                    >
                      <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                        {item.text}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Links & Legal */}
          <div className="col-span-1 md:row-start-2 md:col-start-1 grid grid-cols-2 gap-8 md:gap-24">
            <div className="footer-section">
              <h3 className="text-xl font-bold mb-6 text-gray-800 border-b-2 border-[#D0764F] pb-2 inline-block">
                QUICK LINKS
              </h3>
              <ul className="space-y-3">
                {["Home", "Shop All", "New Arrivals", "Offers"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-[#D0764F] transition-all duration-300 flex items-center space-x-2 group"
                    >
                      <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                        {item}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="text-xl font-bold mb-6 text-gray-800 border-b-2 border-[#D0764F] pb-2 inline-block">
                LEGAL
              </h3>
              <ul className="space-y-3">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="hover:text-[#D0764F] transition-all duration-300 flex items-center space-x-2 group"
                      >
                        <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                          {item}
                        </span>
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Payments & Badges */}
          <div className="col-span-1 md:row-start-2 md:col-start-3 md:col-span-2 flex flex-col items-center md:items-start space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <SiAdguard size={40} className="text-[#D0764F]" />
                <span className="text-lg flex flex-col">
                  <span className="font-semibold">Guaranteed</span>
                  <span className="text-gray-600">Safe Checkout</span>
                </span>
              </div>
              <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <CiLock size={40} className="text-[#D0764F]" />
                <span className="text-lg flex flex-col">
                  <span className="font-semibold">Secure SSL</span>
                  <span className="text-gray-600">Encryption</span>
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {[
                { src: "/footerImg/upi.png", alt: "UPI" },
                { src: "/footerImg/visa.png", alt: "Visa" },
                { src: "/footerImg/paypal.png", alt: "PayPal" },
                { src: "/footerImg/mastercard.png", alt: "Mastercard" },
              ].map((payment) => (
                <div
                  key={payment.alt}
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <img
                    src={payment.src}
                    alt={payment.alt}
                    className="h-12 xl:h-14 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#D0764F] font-semibold">HairLyf</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;























