import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
            <p className="text-gray-600">
              We collect information that you provide directly to us, including personal information such as your name, email address, phone number, and financial information necessary for loan and credit card applications.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
            <p className="text-gray-600">
              We use the information we collect to process your applications, provide customer support, and improve our services. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 