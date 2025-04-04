import React from 'react';

const TwoWheelerLoan: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Two Wheeler Loan</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">About Two Wheeler Loans</h2>
            <p className="text-gray-600">
              Get quick and easy financing for your dream bike or scooter. Our two-wheeler loans come with competitive interest rates and flexible repayment options to make your purchase affordable.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Quick loan approval</li>
              <li>Competitive interest rates</li>
              <li>Minimal documentation</li>
              <li>Flexible repayment terms</li>
              <li>Up to 95% financing available</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Eligibility Criteria</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Age: 21-65 years</li>
              <li>Minimum income: ₹15,000 per month</li>
              <li>Employment: Salaried or self-employed</li>
              <li>Credit score: 650+</li>
            </ul>
          </section>

          <div className="mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoWheelerLoan; 