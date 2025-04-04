import React from 'react';

const TermsConditions: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using KreditWala's services, you agree to be bound by these terms and conditions. If you do not agree to these terms, please do not use our services.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Service Description</h2>
            <p className="text-gray-600">
              KreditWala provides a platform for comparing and applying for various financial products. We do not directly provide loans, credit cards, or insurance products but facilitate connections with financial institutions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">User Responsibilities</h2>
            <p className="text-gray-600">
              Users are responsible for providing accurate information during the application process. Any fraudulent or misleading information may result in immediate termination of services.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions; 