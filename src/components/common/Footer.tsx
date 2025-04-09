import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/credit-cards" className="text-primary-200 hover:text-white transition-colors">
                  Credit Cards
                </Link>
              </li>
              <li>
                <Link to="/services/personal-loans" className="text-primary-200 hover:text-white transition-colors">
                  Personal Loans
                </Link>
              </li>
              <li>
                <Link to="/services/business-loans" className="text-primary-200 hover:text-white transition-colors">
                  Business Loans
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/core-team" className="text-primary-200 hover:text-white transition-colors">
                  Core Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-primary-200 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-primary-200 hover:text-white transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-primary-400" />
                <a href="mailto:support@kreditwala.com" className="text-primary-200 hover:text-white transition-colors">
                  support@kreditwala.com
                </a>
              </li>
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-primary-400" />
                <a href="tel:+919311757194" className="text-primary-200 hover:text-white transition-colors">
                  +91 93117 57194
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-primary-400" />
                <span className="text-primary-200">
                  Plot No. Y9 & 10, IInd Floor, Main Najafgarh Road, Vipin Garden, New Delhi 110059
                </span>
              </li>
            </ul>
            <div className="mt-4">
              <SocialIcons />
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-200 text-sm">
              © {new Date().getFullYear()} KreditWala. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-primary-200 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-200 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 