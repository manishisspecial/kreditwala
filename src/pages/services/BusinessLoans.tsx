import React from 'react';

const BusinessLoans = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-display font-bold text-primary-900 mb-8">Business Loans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">Why Choose Our Business Loans?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>Quick approval and disbursement</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>Competitive interest rates</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>Flexible repayment options</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>Minimal documentation</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>Expert guidance throughout the process</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">Types of Business Loans</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Working Capital Loans</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Equipment Financing</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Business Expansion Loans</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Startup Business Loans</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>MSME Loans</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BusinessLoans; 