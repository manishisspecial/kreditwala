import React from 'react';

const CreditCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-display font-bold text-primary-900 mb-8">Credit Cards</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">Why Choose Our Credit Cards?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>Quick approval process</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>Competitive interest rates</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>Reward points on every purchase</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>Zero annual fee options</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>24/7 customer support</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">Credit Card Types</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Rewards Credit Cards</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Travel Credit Cards</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Fuel Credit Cards</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Shopping Credit Cards</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Premium Credit Cards</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreditCards; 