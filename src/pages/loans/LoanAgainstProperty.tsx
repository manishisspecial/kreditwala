import React from 'react';

const LoanAgainstProperty: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Loan Against Property</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">What is Loan Against Property?</h2>
            <p className="text-gray-600">
              A Loan Against Property (LAP) is a secured loan where you can pledge your property as collateral to obtain a loan. This type of loan typically offers lower interest rates compared to unsecured loans.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Lower interest rates compared to personal loans</li>
              <li>Higher loan amounts based on property value</li>
              <li>Longer repayment tenure available</li>
              <li>Flexible end-use of funds</li>
              <li>Tax benefits available under certain conditions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Eligibility Criteria</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Property ownership with clear title</li>
              <li>Age: 21-65 years</li>
              <li>Stable income source</li>
              <li>Good credit score</li>
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

export default LoanAgainstProperty; 