import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4">KreditWala</h3>
            <p className="text-primary-200">
              Your trusted partner in financial growth. We provide personalized financial solutions to help you achieve your dreams.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-primary-200 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-primary-200 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-primary-200 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-primary-200 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-display font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="/services/business-loans" className="text-primary-200 hover:text-white transition-colors">
                  Business Loans
                </a>
              </li>
              <li>
                <a href="/services/personal-loans" className="text-primary-200 hover:text-white transition-colors">
                  Personal Loans
                </a>
              </li>
              <li>
                <a href="/services/home-loans" className="text-primary-200 hover:text-white transition-colors">
                  Home Loans
                </a>
              </li>
              <li>
                <a href="/services/credit-cards" className="text-primary-200 hover:text-white transition-colors">
                  Credit Cards
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-display font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-primary-400" />
                <span className="text-primary-200">+91 1234567890</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-primary-400" />
                <span className="text-primary-200">info@kreditwala.com</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-primary-400" />
                <span className="text-primary-200">
                  123 Business Street, Financial District, Mumbai, India
                </span>
              </li>
            </ul>
            <div className="mt-4">
              <SocialIcons />
            </div>
          </div>
        </div>
        <div className="border-t border-primary-800 mt-12 pt-8 text-center text-primary-200">
          <p>&copy; {new Date().getFullYear()} KreditWala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 