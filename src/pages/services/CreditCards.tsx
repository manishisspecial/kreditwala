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

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map(card => (
          <div key={card.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{card.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{card.issuer}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Link
                    to={`/services/credit-cards/${card.id}`}
                    className="text-primary-500 hover:text-primary-600 text-sm font-medium"
                  >
                    Know More
                  </Link>
                  <button
                    onClick={() => handleCardSelection(card)}
                    className={`p-2 rounded-full ${
                      selectedCards.some(c => c.id === card.id)
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                    }`}
                  >
                    <FaPlus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Annual Fee:</span>
                  <span className="text-sm font-medium">{card.annualFee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Joining Fee:</span>
                  <span className="text-sm font-medium">{card.joiningFee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Reward Rate:</span>
                  <span className="text-sm font-medium">{card.rewardRate}</span>
                </div>
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