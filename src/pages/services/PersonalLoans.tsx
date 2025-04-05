import React from 'react';

const PersonalLoans = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-display font-bold text-primary-900 mb-8">Personal Loans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">Why Choose Our Personal Loans?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>Instant approval and quick disbursal</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>Competitive interest rates</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>Flexible repayment tenure</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>Minimal documentation</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span>No collateral required</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">Loan Features</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Loan amount up to ₹25 lakhs</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Repayment period up to 5 years</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>No prepayment charges</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>Online application process</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span>24/7 customer support</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonalLoans; 