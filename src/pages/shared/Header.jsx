import { Menu, X, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ setMobileMenuOpen, scrolled, mobileMenuOpen }) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
      style={{ width: "100%" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 z-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl md:text-2xl">
                  S
                </span>
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                SME CUBE
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-semibold transition-all duration-300 hover:text-red-500 ${
                location.pathname === "/" ? "text-red-500" : "text-gray-700"
              }`}
            >
              হোম
            </Link>
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`font-semibold transition-all duration-300 hover:text-red-500 flex items-center ${
                  location.pathname.startsWith("/services")
                    ? "text-red-500"
                    : "text-gray-700"
                }`}
              >
                সার্ভিস
                <ChevronDown
                  className={`ml-2 h-4 w-4 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <Link
                    to="/services/ecommerce"
                    className={`block px-4 py-2 font-semibold transition-all duration-300 hover:text-red-500 ${
                      location.pathname === "/services/ecommerce"
                        ? "text-red-500"
                        : "text-gray-700"
                    }`}
                    onClick={() => setServicesOpen(false)}
                  >
                    ই-কমার্স সার্ভিস
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/tools"
              className={`font-semibold transition-all duration-300 hover:text-red-500 ${
                location.pathname === "/tools"
                  ? "text-red-500"
                  : "text-gray-700"
              }`}
            >
              টুলস
            </Link>
            <Link
              to="/about"
              className={`font-semibold transition-all duration-300 hover:text-red-500 ${
                location.pathname === "/about"
                  ? "text-red-500"
                  : "text-gray-700"
              }`}
            >
              আমাদের সম্পর্কে
            </Link>
            <Link
              to="/pricing"
              className={`font-semibold transition-all duration-300 hover:text-red-500 ${
                location.pathname === "/pricing"
                  ? "text-red-500"
                  : "text-gray-700"
              }`}
            >
              প্রাইসিং
            </Link>
            <Link
              to="/contact"
              className={`font-semibold transition-all duration-300 hover:text-red-500 ${
                location.pathname === "/contact"
                  ? "text-red-500"
                  : "text-gray-700"
              }`}
            >
              যোগাযোগ
            </Link>
            <Link
              to="/admin/dashboard"
              className={`font-semibold transition-all duration-300 hover:text-red-500 ${
                location.pathname === "/contact"
                  ? "text-red-500"
                  : "text-gray-700"
              }`}
            >
              ড্যাশবোর্ড
            </Link>
            <Link
              to="/login"
              className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              ক্লায়েন্ট এরিয়া
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden z-50 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ${
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{ top: "80px" }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-semibold transition-all duration-300 hover:text-red-500 ${
                location.pathname === "/" ? "text-red-500" : "text-gray-700"
              }`}
            >
              হোম
            </Link>
            <div className="w-full text-center">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`text-2xl font-semibold transition-all duration-300 hover:text-red-500 flex items-center justify-center w-full ${
                  location.pathname.startsWith("/services")
                    ? "text-red-500"
                    : "text-gray-700"
                }`}
              >
                সার্ভিস
                <ChevronDown
                  className={`ml-2 h-5 w-5 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {servicesOpen && (
                <div className="mt-2 space-y-2">
                  <Link
                    to="/services/ecommerce"
                    onClick={() => {
                      setServicesOpen(false);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-2xl font-semibold transition-all duration-300 hover:text-red-500 ${
                      location.pathname === "/services/ecommerce"
                        ? "text-red-500"
                        : "text-gray-700"
                    }`}
                  >
                    ই-কমার্স সার্ভিস
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/tools"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-semibold transition-all duration-300 hover:text-red-500 ${
                location.pathname === "/tools"
                  ? "text-red-500"
                  : "text-gray-700"
              }`}
            >
              টুলস
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-semibold transition-all duration-300 hover:text-red-500 ${
                location.pathname === "/about"
                  ? "text-red-500"
                  : "text-gray-700"
              }`}
            >
              আমাদের সম্পর্কে
            </Link>
            <Link
              to="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-semibold transition-all duration-300 hover:text-red-500 ${
                location.pathname === "/pricing"
                  ? "text-red-500"
                  : "text-gray-700"
              }`}
            >
              প্রাইসিং
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-semibold transition-all duration-300 hover:text-red-500 ${
                location.pathname === "/contact"
                  ? "text-red-500"
                  : "text-gray-700"
              }`}
            >
              যোগাযোগ
            </Link>
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              ক্লায়েন্ট এরিয়া
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
