import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Address = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Visit Us</h2>
          <div className="flex items-center justify-center">
            <FaMapMarkerAlt className="text-primary-600 text-2xl mr-3" />
            <p className="text-gray-600 text-lg">
              Plot No. Y9 & 10, IInd Floor, Main Najafgarh Road, Vipin Garden, New Delhi 110059
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address; 