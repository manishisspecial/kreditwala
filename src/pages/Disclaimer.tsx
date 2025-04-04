import React from 'react';

const Disclaimer: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">Information Accuracy</h2>
            <p className="text-gray-600">
              While we strive to provide accurate and up-to-date information, KreditWala does not warrant that the information presented is complete, accurate, or current. All information is subject to change without notice.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">No Financial Advice</h2>
            <p className="text-gray-600">
              The information provided on this website is for general informational purposes only and should not be considered as financial advice. We recommend consulting with qualified financial advisors before making any financial decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Third-Party Services</h2>
            <p className="text-gray-600">
              KreditWala is not responsible for any products, services, or content provided by third-party financial institutions. Any dealings with these institutions are solely between you and the institution.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer; 