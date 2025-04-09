import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="bg-primary-900 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="grid grid-cols-2 gap-4 w-full sm:w-auto mb-2 sm:mb-0">
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-primary-400" />
              <a href="mailto:support@kreditwala.com" className="text-sm text-primary-200 hover:text-white transition-colors">
                support@kreditwala.com
              </a>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-2 text-primary-400" />
              <a href="tel:+919311757194" className="text-sm text-primary-200 hover:text-white transition-colors">
                +91 93117 57194
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/partner-login" className="text-sm text-primary-200 hover:text-white transition-colors">
              Partner Login
            </Link>
            <Link to="/partner-register" className="text-sm text-primary-200 hover:text-white transition-colors">
              Partner Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar; 