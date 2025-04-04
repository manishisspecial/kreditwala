import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600 mb-6">
          Have questions? We're here to help. Reach out to us using any of the methods below.
        </p>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <p className="text-gray-600">support@kreditwala.com</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Phone</h2>
            <p className="text-gray-600">1800-XXX-XXXX (Toll Free)</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Office Address</h2>
            <p className="text-gray-600">
              KreditWala Financial Services<br />
              123 Finance Street<br />
              Mumbai, Maharashtra 400001
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs; 