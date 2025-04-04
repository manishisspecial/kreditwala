import React from 'react';

const GoldLoan: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gold Loan</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">About Gold Loans</h2>
            <p className="text-gray-600">
              Get instant loans by pledging your gold jewelry or coins. Gold loans offer quick disbursement, minimal documentation, and competitive interest rates with the safety of your gold assured.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Quick loan disbursement</li>
              <li>Minimal documentation required</li>
              <li>Lower interest rates compared to personal loans</li>
              <li>Flexible repayment options</li>
              <li>High value for your gold</li>
              <li>Secure storage of your gold</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Eligibility Criteria</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Age: 18 years and above</li>
              <li>Ownership of gold jewelry/coins</li>
              <li>Valid ID and address proof</li>
              <li>No credit score requirement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Gold Purity Accepted</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>18 Karat and above</li>
              <li>Both jewelry and coins accepted</li>
              <li>Hallmarked gold preferred</li>
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

export default GoldLoan; 