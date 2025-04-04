import React from 'react';

const LoanAgainstProperty: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Loan Against Property</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-600 mb-4">
            Get a loan against your residential or commercial property with attractive interest rates and flexible repayment options.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Features</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Loan against residential/commercial property</li>
                <li>High loan amount</li>
                <li>Competitive interest rates</li>
                <li>Long repayment tenure</li>
                <li>Minimal documentation</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Eligibility</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Indian resident</li>
                <li>Age: 21-65 years</li>
                <li>Property ownership</li>
                <li>Stable income source</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanAgainstProperty; 