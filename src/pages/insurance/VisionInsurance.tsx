import React from 'react';

const VisionInsurance: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Vision Insurance</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">About Vision Insurance</h2>
            <p className="text-gray-600">
              Vision insurance helps cover the cost of eye care services and products, including routine eye exams, prescription glasses, contact lenses, and more. Protect your eye health with our comprehensive vision insurance plans.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Coverage Benefits</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Annual eye examinations</li>
              <li>Prescription eyeglasses coverage</li>
              <li>Contact lens coverage</li>
              <li>Frame allowance</li>
              <li>Discounts on LASIK surgery</li>
              <li>Access to network of eye care professionals</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Low monthly premiums</li>
              <li>No waiting period for routine services</li>
              <li>Large network of providers</li>
              <li>Easy claim process</li>
              <li>Family coverage options available</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Additional Benefits</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Coverage for progressive lenses</li>
              <li>UV protection coverage</li>
              <li>Anti-reflective coating benefits</li>
              <li>Discounts on non-covered items</li>
            </ul>
          </section>

          <div className="mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Vision Insurance Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionInsurance; 