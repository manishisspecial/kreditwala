import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-4">
          {/* Contact Information - Visible on all screens */}
          <div className="flex flex-row items-center justify-between w-full sm:w-auto sm:space-x-8">
            <div className="flex items-center">
              <FaPhone className="mr-3 text-primary-300 text-base" />
              <a href="tel:+919311757194" className="text-sm font-medium hover:text-primary-300 transition-colors">
                +91 93117 57194
              </a>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-3 text-primary-300 text-base" />
              <a href="mailto:support@kreditwala.com" className="text-sm font-medium hover:text-primary-300 transition-colors">
                support@kreditwala.com
              </a>
            </div>
          </div>

          {/* Business Partner Links - Visible on all screens */}
          <div className="flex flex-row items-center justify-between w-full sm:w-auto sm:space-x-6 mt-4 sm:mt-0">
            <Link
              to="/business-partner/login"
              className="text-sm font-medium hover:text-primary-300 transition-colors whitespace-nowrap"
            >
              Business Partner Login
            </Link>
            <Link
              to="/business-partner/signup"
              className="text-sm font-medium bg-primary-500 hover:bg-primary-600 px-5 py-2 rounded-md transition-colors whitespace-nowrap"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; 