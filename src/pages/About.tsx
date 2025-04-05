import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-display font-bold text-primary-900 mb-8">About Us</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          KreditWala is a leading financial services provider committed to helping individuals and businesses achieve their financial goals. With years of experience in the industry, we have built a reputation for providing reliable and transparent financial solutions.
        </p>
        <p className="text-gray-600 mb-6">
          Our mission is to make financial services accessible to everyone. We believe in building long-term relationships with our clients by providing personalized solutions that meet their unique needs.
        </p>
        <h2 className="text-2xl font-display font-bold text-primary-900 mt-8 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Transparency in all our dealings</li>
          <li>Customer-centric approach</li>
          <li>Innovation in financial solutions</li>
          <li>Integrity and trust</li>
          <li>Excellence in service</li>
        </ul>
        <h2 className="text-2xl font-display font-bold text-primary-900 mt-8 mb-4">Our Team</h2>
        <p className="text-gray-600 mb-6">
          Our team consists of experienced financial professionals who are dedicated to helping you make informed financial decisions. We work closely with our clients to understand their needs and provide tailored solutions.
        </p>
      </div>
    </div>
  );
};

export default About; 