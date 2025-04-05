import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center space-x-4">
            <a href="tel:+919311757194" className="flex items-center text-sm hover:text-primary-200">
              <FaPhone className="mr-2" />
              +91 93117 57194
            </a>
            <a href="mailto:support@kreditwala.com" className="flex items-center text-sm hover:text-primary-200">
              <FaEnvelope className="mr-2" />
              support@kreditwala.com
            </a>
            <span className="flex items-center text-sm">
              <FaMapMarkerAlt className="mr-2" />
              PLOT NO. Y9 &10, IIND FLOOR, MAIN NAJAFGARH ROAD, Vipin Garden, New Delhi, Delhi 110059
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/business-partner/login"
              className="text-sm hover:text-primary-200"
            >
              Business Partner Login
            </Link>
            <Link
              to="/business-partner/signup"
              className="text-sm hover:text-primary-200"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 