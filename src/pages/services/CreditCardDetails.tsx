import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { creditCards } from '../../data/creditCards';
import { FaCheck, FaPlane, FaShoppingBag, FaGasPump, FaUtensils, FaFilm, FaGift } from 'react-icons/fa';

const CreditCardDetails = () => {
  const { id } = useParams<{ id: string }>();
  const card = creditCards.find(card => card.id === id);

  if (!card) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Card Not Found</h1>
            <p className="mt-4 text-gray-600">The requested credit card could not be found.</p>
            <Link
              to="/services/credit-cards"
              className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-500 hover:bg-primary-600"
            >
              Back to Credit Cards
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Card Header */}
          <div className="bg-primary-500 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white">{card.name}</h1>
                <p className="mt-2 text-primary-100">{card.issuer}</p>
              </div>
              <Link
                to="/apply-now"
                className="mt-4 sm:mt-0 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary-500 bg-white hover:bg-gray-50"
              >
                Apply Now
              </Link>
            </div>
          </div>

          {/* Card Details */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Key Features */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheck className="h-5 w-5 text-green-500 mt-1" />
                    <span className="ml-3 text-gray-700">Annual Fee: {card.annualFee}</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="h-5 w-5 text-green-500 mt-1" />
                    <span className="ml-3 text-gray-700">Joining Fee: {card.joiningFee}</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="h-5 w-5 text-green-500 mt-1" />
                    <span className="ml-3 text-gray-700">Reward Rate: {card.rewardRate}</span>
                  </li>
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h2>
                <ul className="space-y-3">
                  {card.welcomeBenefits && (
                    <li className="flex items-start">
                      <FaGift className="h-5 w-5 text-primary-500 mt-1" />
                      <span className="ml-3 text-gray-700">{card.welcomeBenefits}</span>
                    </li>
                  )}
                  {card.loungeAccess && (
                    <li className="flex items-start">
                      <FaPlane className="h-5 w-5 text-primary-500 mt-1" />
                      <span className="ml-3 text-gray-700">{card.loungeAccess}</span>
                    </li>
                  )}
                  {card.fuelSurcharge && (
                    <li className="flex items-start">
                      <FaGasPump className="h-5 w-5 text-primary-500 mt-1" />
                      <span className="ml-3 text-gray-700">{card.fuelSurcharge}</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* Additional Features */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Additional Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {card.emiOptions && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900">EMI Options</h3>
                    <p className="mt-1 text-gray-600">{card.emiOptions}</p>
                  </div>
                )}
                {card.contactless && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900">Contactless</h3>
                    <p className="mt-1 text-gray-600">{card.contactless}</p>
                  </div>
                )}
                {card.insurance && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900">Insurance</h3>
                    <p className="mt-1 text-gray-600">{card.insurance}</p>
                  </div>
                )}
                {card.forexMarkup && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900">Forex Markup</h3>
                    <p className="mt-1 text-gray-600">{card.forexMarkup}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Rewards Program */}
            {card.rewards && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Rewards Program</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">{card.rewards}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardDetails; 