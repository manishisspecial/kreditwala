import React from 'react';
import { FaUsers, FaHandshake, FaChartLine, FaAward, FaCalendarAlt, FaRocket, FaTrophy } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-display font-bold text-primary-900 mb-6">Our Story</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Pioneering Fintech Solutions Since 2017
        </p>
      </div>

      {/* Company History */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
        <div className="flex items-center mb-8">
          <FaCalendarAlt className="text-4xl text-primary-500 mr-4" />
          <h2 className="text-3xl font-display font-bold text-primary-900">Our Journey</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <FaRocket className="text-primary-500 text-xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">Founded in 2017</h3>
                <p className="text-gray-600 mt-1">
                  KreditWala began its journey on March 28, 2017, with a vision to revolutionize the financial services industry.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <FaTrophy className="text-primary-500 text-xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">Best Startup Award</h3>
                <p className="text-gray-600 mt-1">
                  Recognized as the Best Fintech Startup for our innovative solutions and customer-centric approach.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/awards/best-startup-award.jpg"
              alt="Best Startup Award"
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-xl font-semibold">Best Fintech Startup 2017</h3>
              <p className="text-white/80">Awarded for Innovation & Excellence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievement Section */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-8 mb-16 text-white">
        <h2 className="text-3xl font-display font-bold mb-8 text-center">Our Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FaUsers className="text-4xl" />
            </div>
            <h3 className="text-4xl font-bold mb-2">10,000+</h3>
            <p className="text-white/90">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FaHandshake className="text-4xl" />
            </div>
            <h3 className="text-4xl font-bold mb-2">50+</h3>
            <p className="text-white/90">Partner Banks</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FaChartLine className="text-4xl" />
            </div>
            <h3 className="text-4xl font-bold mb-2">₹500Cr+</h3>
            <p className="text-white/90">Loans Disbursed</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FaAward className="text-4xl" />
            </div>
            <h3 className="text-4xl font-bold mb-2">15+</h3>
            <p className="text-white/90">Industry Awards</p>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            To make financial services accessible to everyone through innovative technology and personalized solutions. We believe in building long-term relationships with our clients by providing transparent and reliable financial services.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">Our Values</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 mr-3">✓</span>
              <span className="text-gray-600">Transparency in all our dealings</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 mr-3">✓</span>
              <span className="text-gray-600">Customer-centric approach</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 mr-3">✓</span>
              <span className="text-gray-600">Innovation in financial solutions</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 mr-3">✓</span>
              <span className="text-gray-600">Integrity and trust</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 mr-3">✓</span>
              <span className="text-gray-600">Excellence in service</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center">
        <h2 className="text-3xl font-display font-bold text-primary-900 mb-4">Our Team</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Our team consists of experienced financial professionals who are dedicated to helping you make informed financial decisions. We work closely with our clients to understand their needs and provide tailored solutions.
        </p>
        <Link
          to="/core-team"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600"
        >
          Meet Our Team
        </Link>
      </div>
    </div>
  );
};

export default About; 