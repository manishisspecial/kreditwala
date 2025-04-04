import React from 'react';

const ULIP: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">ULIP (Unit Linked Insurance Plan)</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-600 mb-4">
            ULIPs combine the benefits of insurance and investment, offering life cover along with market-linked returns.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Features</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Life insurance coverage</li>
                <li>Market-linked returns</li>
                <li>Flexible investment options</li>
                <li>Tax benefits under Section 80C</li>
                <li>Partial withdrawal facility</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Benefits</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Dual benefit of insurance and investment</li>
                <li>Choice of investment funds</li>
                <li>Transparency in charges</li>
                <li>Flexible premium payment options</li>
                <li>Liquidity through partial withdrawals</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ULIP; 