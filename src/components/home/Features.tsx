import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaHandshake, FaShieldAlt, FaClock } from 'react-icons/fa';

const features = [
  {
    name: 'Quick Approval',
    description: 'Get your loan approved within minutes with our streamlined process.',
    icon: FaClock,
  },
  {
    name: 'Competitive Rates',
    description: 'Enjoy the most competitive interest rates in the market.',
    icon: FaChartLine,
  },
  {
    name: 'Secure Process',
    description: 'Your data is protected with bank-level security measures.',
    icon: FaShieldAlt,
  },
  {
    name: 'Personalized Service',
    description: 'Dedicated relationship managers for personalized assistance.',
    icon: FaHandshake,
  },
];

const Features = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold text-primary-900 sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-primary-600">
            Experience the difference with our customer-centric approach and innovative solutions.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-primary-900">{feature.name}</h3>
              <p className="mt-2 text-base text-primary-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features; 