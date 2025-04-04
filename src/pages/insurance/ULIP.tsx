import React from 'react';

const ULIP: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Unit Linked Insurance Plan (ULIP)</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">What is ULIP?</h2>
            <p className="text-gray-600">
              A Unit Linked Insurance Plan (ULIP) is a unique financial product that combines insurance coverage with investment opportunities. It allows you to invest in various market-linked funds while providing life insurance protection.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Dual benefit of insurance and investment</li>
              <li>Market-linked returns</li>
              <li>Flexibility to switch between funds</li>
              <li>Tax benefits under Section 80C</li>
              <li>Long-term wealth creation potential</li>
              <li>Option to choose fund allocation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Investment Options</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Equity funds for high growth potential</li>
              <li>Debt funds for stable returns</li>
              <li>Balanced funds for moderate risk</li>
              <li>Liquid funds for capital preservation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Benefits</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Life coverage throughout the policy term</li>
              <li>Potential for high returns</li>
              <li>Tax benefits on premium and maturity</li>
              <li>Transparent charge structure</li>
              <li>Option for partial withdrawals</li>
            </ul>
          </section>

          <div className="mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get ULIP Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ULIP; 