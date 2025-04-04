import React from 'react';
import { Link } from 'react-router-dom';

const Investments: React.FC = () => {
  const investmentTypes = [
    {
      title: 'Mutual Funds',
      description: 'Invest in professionally managed funds with diverse portfolio options',
      path: '/investments/mutual-funds',
      image: '/images/personal-loan.jpg'
    },
    {
      title: 'Fixed Deposits',
      description: 'Secure your savings with guaranteed returns through fixed deposits',
      path: '/investments/fixed-deposits',
      image: '/images/personal-loan.jpg'
    },
    {
      title: 'Stocks',
      description: 'Invest in company shares and build your wealth through stock market',
      path: '/investments/stocks',
      image: '/images/personal-loan.jpg'
    },
    {
      title: 'Bonds',
      description: 'Invest in government and corporate bonds for stable returns',
      path: '/investments/bonds',
      image: '/images/personal-loan.jpg'
    },
    {
      title: 'PPF',
      description: 'Secure your future with Public Provident Fund investments',
      path: '/investments/ppf',
      image: '/images/home-loan.jpg'
    },
    {
      title: 'NPS',
      description: 'Plan your retirement with National Pension Scheme',
      path: '/investments/nps',
      image: '/images/personal-loan.jpg'
    },
    {
      title: 'Gold',
      description: 'Invest in gold for long-term wealth preservation',
      path: '/investments/gold',
      image: '/images/personal-loan.jpg'
    },
    {
      title: 'Real Estate',
      description: 'Invest in property for long-term capital appreciation',
      path: '/investments/real-estate',
      image: '/images/home-loan.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Investments
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Grow your wealth with our diverse range of investment options
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {investmentTypes.map((investment, index) => (
            <Link
              key={index}
              to={investment.path}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={investment.image}
                  alt={investment.title}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{investment.title}</h3>
                <p className="text-gray-600">{investment.description}</p>
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

export default Investments; 