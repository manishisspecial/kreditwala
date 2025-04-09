import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaArrowRight, FaTimes, FaFilter, FaSearch, FaStar, FaPlane, FaShoppingBag, FaGasPump, FaUtensils, FaFilm, FaGift, FaPlus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { creditCards, CreditCard } from '../../data/creditCards';

// Card categories
const categories = [
  'All',
  'Travel',
  'Shopping',
  'Fuel',
  'Dining',
  'Entertainment',
  'Lifestyle'
];

// Card features for comparison
const comparisonFeatures = [
  'Annual Fee',
  'Joining Fee',
  'Reward Rate',
  'Welcome Benefits',
  'Lounge Access',
  'Fuel Surcharge',
  'EMI Options',
  'Contactless',
  'Insurance',
  'Forex Markup'
];

const getPropertyValue = (card: CreditCard, feature: string): string => {
  const propertyMap: { [key: string]: keyof CreditCard } = {
    'Annual Fee': 'annualFee',
    'Joining Fee': 'joiningFee',
    'Reward Rate': 'rewardRate',
    'Welcome Benefits': 'welcomeBenefits',
    'Lounge Access': 'loungeAccess',
    'Fuel Surcharge': 'fuelSurcharge',
    'EMI Options': 'emiOptions',
    'Contactless': 'contactless',
    'Insurance': 'insurance',
    'Forex Markup': 'forexMarkup'
  };

  const propertyName = propertyMap[feature];
  if (!propertyName) return '-';
  
  const value = card[propertyName];
  return value ? String(value) : '-';
};

const CreditCards = () => {
  const [selectedCards, setSelectedCards] = useState<CreditCard[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCardSelection = (card: CreditCard) => {
    setSelectedCards(prev => 
      prev.some(c => c.id === card.id)
        ? prev.filter(c => c.id !== card.id)
        : prev.length < 3 
          ? [...prev, card]
          : prev
    );
  };

  const filteredCards = creditCards.filter(card => {
    const searchLower = searchQuery.toLowerCase();
    return searchQuery === '' || 
      (card.name && card.name.toLowerCase().includes(searchLower)) ||
      (card.issuer && card.issuer.toLowerCase().includes(searchLower));
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search credit cards..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-center mb-4">
                <img
                  src={card.image}
                  alt={card.name}
                  className="h-32 w-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.name}</h3>
              <p className="text-gray-600 mb-4">{card.issuer}</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Annual Fee:</span> {card.annualFee}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Joining Fee:</span> {card.joiningFee}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Reward Rate:</span> {card.rewardRate}
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <Link
                  to={`/services/credit-cards/${card.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Details
                </Link>
                <a
                  href={card.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Section */}
      {selectedCards.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Compare Selected Cards</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Features</th>
                  {selectedCards.map(card => (
                    <th key={card.id} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {card.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { key: 'annualFee', label: 'Annual Fee' },
                  { key: 'joiningFee', label: 'Joining Fee' },
                  { key: 'rewardRate', label: 'Reward Rate' },
                  { key: 'welcomeBenefits', label: 'Welcome Benefits' },
                  { key: 'loungeAccess', label: 'Lounge Access' },
                  { key: 'fuelSurcharge', label: 'Fuel Surcharge' },
                  { key: 'emiOptions', label: 'EMI Options' },
                  { key: 'contactless', label: 'Contactless' },
                  { key: 'insurance', label: 'Insurance' },
                  { key: 'forexMarkup', label: 'Forex Markup' }
                ].map(({ key, label }) => (
                  <tr key={key}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{label}</td>
                    {selectedCards.map(card => (
                      <td key={card.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {card[key as keyof CreditCard] || '-'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreditCards; 