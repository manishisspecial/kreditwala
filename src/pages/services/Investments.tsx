import React from 'react';

const Investments = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-display font-bold text-primary-900 mb-8">Investment Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">Why Choose Our Investment Services?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>Expert financial advice</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>Diversified investment options</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>Regular portfolio review</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>Transparent fee structure</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>Personalized investment plans</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">Investment Options</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Mutual Funds</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Stocks and Shares</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Fixed Deposits</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Government Bonds</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Retirement Planning</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Investments; 