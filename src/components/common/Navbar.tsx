import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaUserPlus, FaPhone, FaEnvelope } from 'react-icons/fa';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-8 py-2 sm:py-0 text-sm">
            <div className="flex items-center space-x-4 mb-2 sm:mb-0">
              <Link
                to="/partner/login"
                className="flex items-center hover:text-primary-200 uppercase tracking-wide"
              >
                <FaUser className="mr-1" />
                Partner Login
              </Link>
              <Link
                to="/partner/register"
                className="flex items-center hover:text-primary-200 uppercase tracking-wide"
              >
                <FaUserPlus className="mr-1" />
                Register
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:+919311757194" className="flex items-center hover:text-primary-200 uppercase tracking-wide">
                <FaPhone className="mr-1" />
                +91-9311757194
              </a>
              <a href="mailto:support@kreditwala.com" className="flex items-center hover:text-primary-200 uppercase tracking-wide">
                <FaEnvelope className="mr-1" />
                SUPPORT@KREDITWALA.COM
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors duration-200"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              to="/apply-now"
              className="bg-primary-500 text-white hover:bg-primary-600 px-4 py-2 rounded-md text-sm lg:text-base font-medium transition-all duration-200 hover:shadow-md"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-500 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg absolute w-full transition-all duration-300 ease-in-out`}
        style={{ 
          top: '100%',
          transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
          opacity: isOpen ? '1' : '0',
          pointerEvents: isOpen ? 'auto' : 'none'
        }}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          <Link
            to="/"
            className="block text-gray-700 hover:text-primary-500 px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-gray-700 hover:text-primary-500 px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block text-gray-700 hover:text-primary-500 px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 hover:text-primary-500 px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/apply-now"
            className="block bg-primary-500 text-white hover:bg-primary-600 px-4 py-3 rounded-md text-base font-medium transition-all duration-200 hover:shadow-md mx-4 mt-2"
            onClick={() => setIsOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 