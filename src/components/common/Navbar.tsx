import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Layout */}
          <div className="sm:hidden flex flex-col space-y-2">
            <div className="flex justify-between">
              <a href="mailto:support@kreditwala.com" className="flex items-center text-sm hover:text-blue-400">
                <FaEnvelope className="mr-2" />
                support@kreditwala.com
              </a>
              <a href="tel:+919311757194" className="flex items-center text-sm hover:text-blue-400">
                <FaPhone className="mr-2" />
                +91-9311757194
              </a>
            </div>
            <div className="flex justify-between">
              <Link
                to="/partner/login"
                className="text-sm text-white hover:text-blue-400"
              >
                Partners Login
              </Link>
              <Link
                to="/partner/register"
                className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden sm:flex flex-row justify-between items-center">
            {/* Contact Info */}
            <div className="flex items-center space-x-6">
              <a href="mailto:support@kreditwala.com" className="flex items-center text-sm hover:text-blue-400">
                <FaEnvelope className="mr-2" />
                support@kreditwala.com
              </a>
              <a href="tel:+919311757194" className="flex items-center text-sm hover:text-blue-400">
                <FaPhone className="mr-2" />
                +91-9311757194
              </a>
            </div>

            {/* Partner Links */}
            <div className="flex items-center space-x-4">
              <Link
                to="/partner/login"
                className="text-sm text-white hover:text-blue-400"
              >
                Partners Login
              </Link>
              <Link
                to="/partner/register"
                className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="fixed top-12 left-0 right-0 z-50 bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="flex items-center">
                  <img
                    src="/images/logo.jpg"
                    alt="KreditWala Logo"
                    className="h-10"
                  />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  to="/"
                  className="border-transparent text-gray-500 hover:border-blue-500 hover:text-blue-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="border-transparent text-gray-500 hover:border-blue-500 hover:text-blue-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  About Us
                </Link>
                <Link
                  to="/services"
                  className="border-transparent text-gray-500 hover:border-blue-500 hover:text-blue-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Our Services
                </Link>
                <Link
                  to="/contact"
                  className="border-transparent text-gray-500 hover:border-blue-500 hover:text-blue-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Link
                to="/apply-now"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Apply Now
              </Link>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden absolute w-full bg-white shadow-lg`}>
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-blue-500"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-blue-500"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-blue-500"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-blue-500"
            >
              Contact Us
            </Link>
            <Link
              to="/apply-now"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-blue-500"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar; 