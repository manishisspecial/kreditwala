import React from 'react';
import { Link } from 'react-router-dom';

const Loans: React.FC = () => {
  const loanTypes = [
    {
      title: 'Personal Loan',
      description: 'Get instant personal loans up to ₹25 lakhs with minimal documentation',
      path: '/loans/personal',
      image: '/images/personal-loan.jpg'
    },
    {
      title: 'Home Loan',
      description: 'Buy your dream home with attractive interest rates and flexible repayment options',
      path: '/loans/home',
      image: '/images/home-loan.jpg'
    },
    {
      title: 'Business Loan',
      description: 'Grow your business with customized loan solutions and quick approvals',
      path: '/loans/business',
      image: '/images/personal-loan.jpg'
    },
    {
      title: 'Education Loan',
      description: 'Fund your education with special student loan schemes and moratorium period',
      path: '/loans/education',
      image: '/images/personal-loan.jpg'
    },
    {
      title: 'Car Loan',
      description: 'Drive your dream car with competitive interest rates and zero down payment options',
      path: '/loans/car',
      image: '/images/personal-loan.jpg'
    },
    {
      title: 'Gold Loan',
      description: 'Get instant loans against your gold with minimal documentation and quick processing',
      path: '/loans/gold',
      image: '/images/personal-loan.jpg'
    },
    {
      title: 'Loan Against Property',
      description: 'Unlock the value of your property with high-value loans and flexible repayment',
      path: '/loans/loan-against-property',
      image: '/images/home-loan.jpg'
    },
    {
      title: 'Two Wheeler Loan',
      description: 'Ride your dream bike with easy EMI options and quick approval',
      path: '/loans/two-wheeler',
      image: '/images/personal-loan.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Loans
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Choose from a wide range of loan products tailored to meet your financial needs
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {loanTypes.map((loan, index) => (
            <Link
              key={index}
              to={loan.path}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={loan.image}
                  alt={loan.title}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{loan.title}</h3>
                <p className="text-gray-600">{loan.description}</p>
                <div className="mt-4">
                  <span className="text-blue-600 font-medium">Learn More →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loans; 