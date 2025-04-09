import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaPhone, FaEnvelope } from 'react-icons/fa';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeAll = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const menuItems = [
    {
      name: 'HOME',
      path: '/',
      submenu: null
    },
    {
      name: 'ABOUT US',
      path: '/about',
      submenu: [
        { name: 'OUR STORY', path: '/about' },
        { name: 'CORE TEAM', path: '/core-team' },
        { name: 'CAREERS', path: '/careers' }
      ]
    },
    {
      name: 'SERVICES',
      path: '/services',
      submenu: [
        { name: 'CREDIT CARDS', path: '/services/credit-cards' },
        { name: 'PERSONAL LOANS', path: '/services/personal-loans' },
        { name: 'BUSINESS LOANS', path: '/services/business-loans' },
        { name: 'INSURANCE', path: '/services/insurance' }
      ]
    },
    {
      name: 'PARTNERS',
      path: '/partners',
      submenu: null
    },
    {
      name: 'CONTACT',
      path: '/contact',
      submenu: null
    }
  ];

  return (
    <>
      {/* Top Bar with Contact Info */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-evenly items-center h-10">
            {/* Contact Info */}
            <div className="flex items-center space-x-4">
              <a href="mailto:support@kreditwala.com" className="flex items-center text-sm hover:text-primary-400 transition-colors duration-200">
                <FaEnvelope className="mr-2" />
                support@kreditwala.com
              </a>
              <a href="tel:+919311757194" className="flex items-center text-sm hover:text-primary-400 transition-colors duration-200">
                <FaPhone className="mr-2" />
                +91-9311757194
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`fixed w-full z-40 mt-10 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="block">
                <Logo />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                {menuItems.map((item) => (
                  <div key={item.name} className="relative group">
                    {item.submenu ? (
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-200 ${
                          location.pathname === item.path
                            ? 'text-primary-600'
                            : 'text-gray-700 hover:text-primary-600'
                        }`}
                      >
                        <span>{item.name}</span>
                        <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'transform rotate-180' : ''
                        }`} />
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-200 ${
                          location.pathname === item.path
                            ? 'text-primary-600'
                            : 'text-gray-700 hover:text-primary-600'
                        }`}
                      >
                        <span>{item.name}</span>
                      </Link>
                    )}

                    {item.submenu && (
                      <div
                        className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 transform origin-top ${
                          activeDropdown === item.name
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-95 pointer-events-none'
                        }`}
                      >
                        <div className="py-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              onClick={closeAll}
                              className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                                location.pathname === subItem.path
                                  ? 'bg-primary-50 text-primary-600'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Apply Now Button */}
            <div className="hidden md:block">
              <Link
                to="/apply-now"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
              >
                APPLY NOW
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none transition-colors duration-200"
              >
                {isOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? 'opacity-100 max-h-screen'
              : 'opacity-0 max-h-0 overflow-hidden'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                    }`}
                  >
                    <span>{item.name}</span>
                    <FaChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    onClick={closeAll}
                    className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                )}

                {item.submenu && (
                  <div
                    className={`pl-4 space-y-1 transition-all duration-200 ${
                      activeDropdown === item.name
                        ? 'opacity-100 max-h-96'
                        : 'opacity-0 max-h-0 overflow-hidden'
                    }`}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        onClick={closeAll}
                        className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                          location.pathname === subItem.path
                            ? 'bg-primary-50 text-primary-600'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-3 py-2">
              <Link
                to="/apply-now"
                className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
              >
                APPLY NOW
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 