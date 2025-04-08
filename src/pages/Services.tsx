import React from 'react';
import { FaChartLine, FaHandshake, FaShieldAlt, FaClock, FaCreditCard, FaBriefcase, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Credit Cards',
    description: 'Compare and apply for the best credit cards from top banks with exclusive rewards and benefits.',
    icon: <FaCreditCard className="text-4xl text-primary-500" />,
    link: '/services/credit-cards',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    title: 'Business Loans',
    description: 'Get quick and easy business loans with competitive interest rates and flexible repayment options.',
    icon: <FaBriefcase className="text-4xl text-primary-500" />,
    link: '/services/business-loans',
    gradient: 'from-green-500 to-green-600'
  },
  {
    id: 3,
    title: 'Personal Loans',
    description: 'Instant personal loans for all your needs with minimal documentation and quick disbursal.',
    icon: <FaUser className="text-4xl text-primary-500" />,
    link: '/services/personal-loans',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    id: 4,
    title: 'Insurance',
    description: 'Comprehensive insurance solutions for life, health, motor, and more with best-in-class coverage.',
    icon: <FaShieldAlt className="text-4xl text-primary-500" />,
    link: '/services/insurance',
    gradient: 'from-red-500 to-red-600'
  },
  {
    id: 5,
    title: 'Investments',
    description: 'Expert guidance for smart investments in mutual funds, stocks, and other financial instruments.',
    icon: <FaChartLine className="text-4xl text-primary-500" />,
    link: '/services/investments',
    gradient: 'from-yellow-500 to-yellow-600'
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-primary-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover a wide range of financial solutions tailored to meet your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full transform transition-all duration-300 hover:shadow-xl">
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />
                <div className="p-6">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-primary-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <a
                    href={service.link}
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium transition-colors duration-300"
                  >
                    Learn more
                    <svg
                      className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300"
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 