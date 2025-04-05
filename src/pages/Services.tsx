import React from 'react';
import { FaChartLine, FaHandshake, FaShieldAlt, FaClock } from 'react-icons/fa';

const services = [
  {
    title: 'Business Loans',
    description: 'Get the financial support you need to grow your business with our flexible loan options.',
    icon: <FaChartLine className="h-8 w-8 text-primary-500" />,
    link: '/services/business-loans'
  },
  {
    title: 'Personal Loans',
    description: 'Fulfill your personal financial needs with our easy-to-avail personal loan solutions.',
    icon: <FaHandshake className="h-8 w-8 text-primary-500" />,
    link: '/services/personal-loans'
  },
  {
    title: 'Insurance',
    description: 'Protect what matters most with our comprehensive insurance coverage options.',
    icon: <FaShieldAlt className="h-8 w-8 text-primary-500" />,
    link: '/services/insurance'
  },
  {
    title: 'Investment Solutions',
    description: 'Grow your wealth with our expert investment advice and solutions.',
    icon: <FaClock className="h-8 w-8 text-primary-500" />,
    link: '/services/investments'
  }
];

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-display font-bold text-primary-900 mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-display font-bold text-primary-900 mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <a
              href={service.link}
              className="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center"
            >
              Learn more
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services; 