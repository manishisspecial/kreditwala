import React from 'react';

const TermsConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using this website, you accept and agree to be bound by the terms and conditions of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. Use of Services</h2>
              <p className="text-gray-600">
                Our services are available only to individuals who can form legally binding contracts under applicable law. You must be at least 18 years old to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. User Responsibilities</h2>
              <p className="text-gray-600">
                As a user, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Use the services for lawful purposes only</li>
                <li>Not engage in any fraudulent activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. Intellectual Property</h2>
              <p className="text-gray-600">
                All content on this website, including text, graphics, logos, and software, is the property of Kreditwala and is protected by intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-600">
                Kreditwala shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Modifications to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. Your continued use of the services following any changes indicates your acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">7. Governing Law</h2>
              <p className="text-gray-600">
                These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">8. Contact Information</h2>
              <p className="text-gray-600">
                For any questions regarding these terms and conditions, please contact us at legal@kreditwala.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions; 