import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div className="flex space-x-6">
            <a href="tel:+911234567890" className="flex items-center text-sm hover:text-primary-300">
              <FaPhone className="mr-2" />
              +91 1234567890
            </a>
            <a href="mailto:info@kreditwala.com" className="flex items-center text-sm hover:text-primary-300">
              <FaEnvelope className="mr-2" />
              info@kreditwala.com
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="/login" className="text-sm hover:text-primary-300">
              Login
            </a>
            <a href="/register" className="text-sm hover:text-primary-300">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; 