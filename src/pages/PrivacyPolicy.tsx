import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
              <p className="text-gray-600">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Personal identification information (name, email, phone number)</li>
                <li>Financial information (income, employment details)</li>
                <li>Documentation (ID proof, address proof)</li>
                <li>Usage data and preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-gray-600">
                We use the collected information for:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Processing your applications</li>
                <li>Providing customer support</li>
                <li>Improving our services</li>
                <li>Communicating with you</li>
                <li>Legal compliance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Information Sharing</h2>
              <p className="text-gray-600">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Financial institutions and partners</li>
                <li>Service providers</li>
                <li>Legal authorities when required</li>
                <li>With your consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
              <p className="text-gray-600">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at privacy@kreditwala.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 