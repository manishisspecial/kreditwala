import React from 'react';
import { Link } from 'react-router-dom';

const Insurance: React.FC = () => {
  const insuranceTypes = [
    {
      title: 'Life Insurance',
      description: 'Secure your family\'s future with comprehensive life insurance coverage',
      path: '/insurance/life',
      image: '/images/personal-loan.jpg'
    },
    {
      title: 'Health Insurance',
      description: 'Protect yourself and your family from medical emergencies with health insurance',
      path: '/insurance/health',
      image: '/images/personal-loan.jpg'
    },
    {
      title: 'Car Insurance',
      description: 'Get comprehensive coverage for your car with competitive premiums',
      path: '/insurance/car',
      image: '/images/personal-loan.jpg'
    },
    {
      title: 'Two Wheeler Insurance',
      description: 'Protect your bike with comprehensive insurance coverage',
      path: '/insurance/two-wheeler',
      image: '/images/personal-loan.jpg'
    },
    {
      title: 'Home Insurance',
      description: 'Safeguard your home and belongings with comprehensive home insurance',
      path: '/insurance/home',
      image: '/images/home-loan.jpg'
    },
    {
      title: 'Travel Insurance',
      description: 'Travel worry-free with comprehensive travel insurance coverage',
      path: '/insurance/travel',
      image: '/images/personal-loan.jpg'
    },
    {
      title: 'Term Insurance',
      description: 'Get high coverage at affordable premiums with term insurance',
      path: '/insurance/term',
      image: '/images/personal-loan.jpg'
    },
    {
      title: 'ULIP',
      description: 'Combine insurance and investment benefits with ULIP plans',
      path: '/insurance/ulip',
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
              Insurance
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Choose from a wide range of insurance products to protect what matters most
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {insuranceTypes.map((insurance, index) => (
            <Link
              key={index}
              to={insurance.path}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={insurance.image}
                  alt={insurance.title}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{insurance.title}</h3>
                <p className="text-gray-600">{insurance.description}</p>
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

export default Insurance; 