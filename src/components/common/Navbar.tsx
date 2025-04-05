import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/apply-now"
              className="bg-primary-500 text-white hover:bg-primary-600 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-500 focus:outline-none"
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
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            About
          </Link>
          <Link
            to="/services"
            className="block text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/apply-now"
            className="block bg-primary-500 text-white hover:bg-primary-600 px-4 py-2 rounded-md text-base font-medium transition-colors text-center"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 