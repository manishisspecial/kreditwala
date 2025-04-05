import React from 'react';
import { Link } from 'react-router-dom';

const ProductComparison = () => {
  const products = [
    {
      id: 1,
      name: 'Personal Loan',
      features: [
        'Up to ₹25 Lakhs',
        'Interest Rate: 10.5% - 24%',
        'Processing Fee: 0.5% - 2%',
        'Instant Approval',
        'Minimal Documentation'
      ],
      image: '/images/personal-loan.png',
      link: '/loans/personal'
    },
    {
      id: 2,
      name: 'Credit Card',
      features: [
        'Up to ₹10 Lakhs Limit',
        'Reward Points: 1-5%',
        'Annual Fee: ₹0 - ₹5,000',
        'Lifetime Free Options',
        'Complimentary Lounge Access'
      ],
      image: '/images/credit-card.png',
      link: '/credit-cards'
    },
    {
      id: 3,
      name: 'Home Loan',
      features: [
        'Up to ₹5 Crores',
        'Interest Rate: 8.5% - 12%',
        'Processing Fee: 0.5% - 1%',
        'Long Tenure: Up to 30 Years',
        'Balance Transfer Available'
      ],
      image: '/images/home-loan.png',
      link: '/loans/home'
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Compare Financial Products
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Find the best financial products tailored to your needs
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-center h-32">
                  <img
                    className="h-24 w-auto object-contain"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">
                  {product.name}
                </h3>
                <ul className="mt-4 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-2 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    to={product.link}
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Compare Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/compare"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
          >
            View All Products
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductComparison; 