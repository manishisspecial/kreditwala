import React from 'react';

const GoldLoan: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Gold Loan</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-600 mb-4">
            Get instant loans against your gold jewelry with competitive interest rates and flexible repayment options.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Features</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Loan against gold jewelry</li>
                <li>Quick approval process</li>
                <li>Competitive interest rates</li>
                <li>Flexible repayment options</li>
                <li>Secure storage of gold</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Eligibility</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Indian resident</li>
                <li>Age: 18-65 years</li>
                <li>Valid ID proof</li>
                <li>Gold jewelry as collateral</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldLoan; 