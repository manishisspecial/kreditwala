import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <a href="mailto:support@kreditwala.com" className="flex items-center text-sm hover:text-primary-500">
                <FaEnvelope className="mr-2" />
                support@kreditwala.com
              </a>
              <a href="tel:+919311757194" className="flex items-center text-sm hover:text-primary-500">
                <FaPhone className="mr-2" />
                +91-9311757194
              </a>
            </div>

            {/* Partner Links */}
            <div className="flex items-center space-x-4 mt-2 sm:mt-0">
              <Link
                to="/partner/login"
                className="text-sm text-white hover:text-primary-500"
              >
                Partner Login
              </Link>
              <Link
                to="/partner/register"
                className="text-sm bg-primary-500 hover:bg-primary-600 text-white px-4 py-1 rounded"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/images/logo.jpg"
                alt="KreditWala Logo"
                className="h-10"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/'
                    ? 'text-primary-500'
                    : 'text-gray-700 hover:text-primary-500'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/about'
                    ? 'text-primary-500'
                    : 'text-gray-700 hover:text-primary-500'
                }`}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/services'
                    ? 'text-primary-500'
                    : 'text-gray-700 hover:text-primary-500'
                }`}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/contact'
                    ? 'text-primary-500'
                    : 'text-gray-700 hover:text-primary-500'
                }`}
              >
                Contact Us
              </Link>
              <Link
                to="/apply-now"
                className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded transition-colors"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-primary-500 focus:outline-none"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === '/'
                      ? 'text-primary-500'
                      : 'text-gray-700 hover:text-primary-500'
                  }`}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === '/about'
                      ? 'text-primary-500'
                      : 'text-gray-700 hover:text-primary-500'
                  }`}
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
                <Link
                  to="/services"
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === '/services'
                      ? 'text-primary-500'
                      : 'text-gray-700 hover:text-primary-500'
                  }`}
                  onClick={toggleMenu}
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === '/contact'
                      ? 'text-primary-500'
                      : 'text-gray-700 hover:text-primary-500'
                  }`}
                  onClick={toggleMenu}
                >
                  Contact Us
                </Link>
                <Link
                  to="/apply-now"
                  className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded transition-colors text-center"
                  onClick={toggleMenu}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar; 