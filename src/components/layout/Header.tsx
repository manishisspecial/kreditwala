import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMobileLinkClick = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/images/logo.jpg" alt="Kreditwala Logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <Link to="/loans" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Loans
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <Link to="/loans/personal" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  Personal Loan
                </Link>
                <Link to="/loans/home" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  Home Loan
                </Link>
                <Link to="/loans/business" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  Business Loan
                </Link>
                <Link to="/loans/education" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  Education Loan
                </Link>
              </div>
            </div>

            <div className="relative group">
              <Link to="/credit-cards" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Credit Cards
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <Link to="/credit-cards/rewards" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  Rewards Credit Card
                </Link>
                <Link to="/credit-cards/travel" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  Travel Credit Card
                </Link>
                <Link to="/credit-cards/fuel" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  Fuel Credit Card
                </Link>
                <Link to="/credit-cards/shopping" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  Shopping Credit Card
                </Link>
              </div>
            </div>

            <div className="relative group">
              <Link to="/insurance" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Insurance
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <Link to="/insurance/health" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  Health Insurance
                </Link>
                <Link to="/insurance/life" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  Life Insurance
                </Link>
                <Link to="/insurance/car" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  Car Insurance
                </Link>
                <Link to="/insurance/home" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  Home Insurance
                </Link>
              </div>
            </div>

            <div className="relative group">
              <Link to="/investments" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Investments
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <Link to="/investments/mutual-funds" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  Mutual Funds
                </Link>
                <Link to="/investments/fixed-deposits" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  Fixed Deposits
                </Link>
                <Link to="/investments/stocks" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  Stocks
                </Link>
                <Link to="/investments/gold" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  Gold Investment
                </Link>
              </div>
            </div>

            <Link
              to="/compare"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Compare
            </Link>

            <Link
              to="/business-partner-login"
              className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium"
            >
              Login
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="space-y-1">
            <button
              onClick={() => handleMobileLinkClick('/loans')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              Loans
            </button>
            <div className="pl-4 space-y-1">
              <button
                onClick={() => handleMobileLinkClick('/loans/personal')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                Personal Loan
              </button>
              <button
                onClick={() => handleMobileLinkClick('/loans/home')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                Home Loan
              </button>
              <button
                onClick={() => handleMobileLinkClick('/loans/business')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                Business Loan
              </button>
              <button
                onClick={() => handleMobileLinkClick('/loans/education')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                Education Loan
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <button
              onClick={() => handleMobileLinkClick('/credit-cards')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              Credit Cards
            </button>
            <div className="pl-4 space-y-1">
              <button
                onClick={() => handleMobileLinkClick('/credit-cards/rewards')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                Rewards Credit Card
              </button>
              <button
                onClick={() => handleMobileLinkClick('/credit-cards/travel')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                Travel Credit Card
              </button>
              <button
                onClick={() => handleMobileLinkClick('/credit-cards/fuel')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                Fuel Credit Card
              </button>
              <button
                onClick={() => handleMobileLinkClick('/credit-cards/shopping')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                Shopping Credit Card
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <button
              onClick={() => handleMobileLinkClick('/insurance')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              Insurance
            </button>
            <div className="pl-4 space-y-1">
              <button
                onClick={() => handleMobileLinkClick('/insurance/health')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                Health Insurance
              </button>
              <button
                onClick={() => handleMobileLinkClick('/insurance/life')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                Life Insurance
              </button>
              <button
                onClick={() => handleMobileLinkClick('/insurance/car')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                Car Insurance
              </button>
              <button
                onClick={() => handleMobileLinkClick('/insurance/home')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                Home Insurance
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <button
              onClick={() => handleMobileLinkClick('/investments')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              Investments
            </button>
            <div className="pl-4 space-y-1">
              <button
                onClick={() => handleMobileLinkClick('/investments/mutual-funds')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                Mutual Funds
              </button>
              <button
                onClick={() => handleMobileLinkClick('/investments/fixed-deposits')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                Fixed Deposits
              </button>
              <button
                onClick={() => handleMobileLinkClick('/investments/stocks')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                Stocks
              </button>
              <button
                onClick={() => handleMobileLinkClick('/investments/gold')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                Gold Investment
              </button>
            </div>
          </div>

          <button
            onClick={() => handleMobileLinkClick('/compare')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
          >
            Compare
          </button>

          <button
            onClick={() => handleMobileLinkClick('/business-partner-login')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 