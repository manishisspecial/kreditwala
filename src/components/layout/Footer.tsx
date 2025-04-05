import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: FaFacebook,
      href: 'https://facebook.com/kreditwala',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      href: 'https://instagram.com/kreditwala',
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      href: 'https://twitter.com/kreditwala',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://linkedin.com/company/kreditwala',
    },
    {
      name: 'YouTube',
      icon: FaYoutube,
      href: 'https://youtube.com/kreditwala',
    },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
    { name: 'Disclaimer', path: '/disclaimer' },
  ];

  const services = [
    { name: 'Loans', path: '/loans' },
    { name: 'Credit Cards', path: '/credit-cards' },
    { name: 'Insurance', path: '/insurance' },
    { name: 'Investments', path: '/investments' },
  ];

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-display font-bold mb-4">About Us</h3>
            <p className="text-primary-200">
              We are committed to providing the best financial solutions to help you achieve your goals.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-200 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaPhone className="mr-2 text-primary-400" />
                <span className="text-primary-200">+91 1234567890</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-primary-400" />
                <span className="text-primary-200">info@kreditwala.com</span>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-primary-400" />
                <span className="text-primary-200">123 Business Street, City, Country</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-600 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-800 text-center">
          <p className="text-primary-200">
            © {new Date().getFullYear()} Kreditwala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 