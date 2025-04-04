import React from 'react';
import ProductCard from '../common/ProductCard';

const ProductsGrid = () => {
  const products = [
    {
      title: 'Personal Loan',
      description: 'Get instant personal loans up to ₹20 Lakhs with minimal documentation',
      imageUrl: '/images/personal-loan.jpg',
      rating: 4.5,
      features: [
        'Low interest rates',
        'Quick approval',
        'Flexible tenure',
        'No collateral required'
      ],
      buttonText: 'Apply Now'
    },
    {
      title: 'Credit Card',
      description: 'Choose from a wide range of credit cards with exciting rewards',
      imageUrl: '/images/credit-card.jpg',
      rating: 4.2,
      features: [
        'Cashback offers',
        'Travel rewards',
        'Zero annual fee',
        'Contactless payments'
      ],
      buttonText: 'Compare Cards'
    },
    {
      title: 'Home Loan',
      description: 'Fulfill your dream of owning a home with our competitive home loan rates',
      imageUrl: '/images/home-loan.jpg',
      rating: 4.7,
      features: [
        'Low EMI options',
        'Long repayment tenure',
        'Top-up facility',
        'Balance transfer'
      ],
      buttonText: 'Check Eligibility'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-center mb-4">
        Featured Financial Products
      </h2>
      <p className="text-xl text-gray-600 text-center mb-12">
        Compare and choose the best financial products for your needs
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            {...product}
            onButtonClick={() => console.log(`Clicked ${product.title}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid; 