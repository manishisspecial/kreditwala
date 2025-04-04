import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">About Us</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                We are committed to providing accessible and transparent financial solutions to help individuals and businesses achieve their goals.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the most trusted financial platform, empowering people to make informed decisions about their financial future.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Our Values</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Transparency in all our dealings</li>
                <li>Customer-centric approach</li>
                <li>Innovation in financial solutions</li>
                <li>Integrity and trust</li>
                <li>Commitment to excellence</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Why Choose Us?</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Wide range of financial products</li>
                <li>Competitive rates and terms</li>
                <li>Quick and easy application process</li>
                <li>Expert guidance and support</li>
                <li>Secure and reliable platform</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 