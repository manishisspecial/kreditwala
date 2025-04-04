import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Sitemap</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Loans</h2>
            <ul className="space-y-2">
              <li><Link to="/loans/personal" className="text-blue-600 hover:underline">Personal Loan</Link></li>
              <li><Link to="/loans/home" className="text-blue-600 hover:underline">Home Loan</Link></li>
              <li><Link to="/loans/business" className="text-blue-600 hover:underline">Business Loan</Link></li>
              <li><Link to="/loans/education" className="text-blue-600 hover:underline">Education Loan</Link></li>
              <li><Link to="/loans/car" className="text-blue-600 hover:underline">Car Loan</Link></li>
              <li><Link to="/loans/gold" className="text-blue-600 hover:underline">Gold Loan</Link></li>
              <li><Link to="/loans/loan-against-property" className="text-blue-600 hover:underline">Loan Against Property</Link></li>
              <li><Link to="/loans/two-wheeler" className="text-blue-600 hover:underline">Two Wheeler Loan</Link></li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Credit Cards</h2>
            <ul className="space-y-2">
              <li><Link to="/credit-cards" className="text-blue-600 hover:underline">All Credit Cards</Link></li>
              <li><Link to="/credit-cards/rewards" className="text-blue-600 hover:underline">Rewards Credit Cards</Link></li>
              <li><Link to="/credit-cards/travel" className="text-blue-600 hover:underline">Travel Credit Cards</Link></li>
              <li><Link to="/credit-cards/fuel" className="text-blue-600 hover:underline">Fuel Credit Cards</Link></li>
              <li><Link to="/credit-cards/shopping" className="text-blue-600 hover:underline">Shopping Credit Cards</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Insurance</h2>
            <ul className="space-y-2">
              <li><Link to="/insurance/life" className="text-blue-600 hover:underline">Life Insurance</Link></li>
              <li><Link to="/insurance/health" className="text-blue-600 hover:underline">Health Insurance</Link></li>
              <li><Link to="/insurance/car" className="text-blue-600 hover:underline">Car Insurance</Link></li>
              <li><Link to="/insurance/two-wheeler" className="text-blue-600 hover:underline">Two Wheeler Insurance</Link></li>
              <li><Link to="/insurance/home" className="text-blue-600 hover:underline">Home Insurance</Link></li>
              <li><Link to="/insurance/travel" className="text-blue-600 hover:underline">Travel Insurance</Link></li>
              <li><Link to="/insurance/term" className="text-blue-600 hover:underline">Term Insurance</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Other Pages</h2>
          <ul className="space-y-2">
            <li><Link to="/about-us" className="text-blue-600 hover:underline">About Us</Link></li>
            <li><Link to="/contact-us" className="text-blue-600 hover:underline">Contact Us</Link></li>
            <li><Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms-conditions" className="text-blue-600 hover:underline">Terms & Conditions</Link></li>
            <li><Link to="/disclaimer" className="text-blue-600 hover:underline">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sitemap; 