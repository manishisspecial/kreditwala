import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600 mb-4">
          Welcome to KreditWala, your trusted partner in financial services. We are committed to helping you make informed decisions about loans, credit cards, and insurance products.
        </p>
        <p className="text-gray-600">
          Our mission is to simplify the process of comparing and choosing financial products, ensuring you get the best deals tailored to your needs.
        </p>
      </div>
    </div>
  );
};

export default AboutUs; 