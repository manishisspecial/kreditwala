import React from 'react';
import { Link } from 'react-router-dom';
import { FaHandshake, FaUserPlus, FaSignInAlt } from 'react-icons/fa';

const Partners = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-primary-900 mb-4">
            Partner with KreditWala
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our network of trusted partners and help us provide better financial solutions to our customers.
          </p>
        </div>

        {/* Partner Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <FaUserPlus className="text-4xl text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">New Partner Registration</h3>
            <p className="text-gray-600 mb-6">
              Register as a new partner and start offering our financial products to your customers.
            </p>
            <Link
              to="/partner-register"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-300"
            >
              Register Now
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <FaSignInAlt className="text-4xl text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Existing Partner Login</h3>
            <p className="text-gray-600 mb-6">
              Access your partner dashboard to manage your account and track your performance.
            </p>
            <Link
              to="/partner-login"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-300"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-primary-900 mb-6 text-center">
            Why Partner with Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <FaHandshake className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trusted Brand</h3>
              <p className="text-gray-600">
                Partner with a trusted name in the financial industry
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <FaHandshake className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitive Commissions</h3>
              <p className="text-gray-600">
                Earn attractive commissions on every successful referral
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <FaHandshake className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dedicated Support</h3>
              <p className="text-gray-600">
                Get dedicated support from our partner success team
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners; 