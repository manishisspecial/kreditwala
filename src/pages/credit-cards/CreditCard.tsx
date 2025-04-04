import React from 'react';
import { Link } from 'react-router-dom';

const CreditCard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Credit Cards
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Choose from our range of credit cards designed for your lifestyle
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link
                to="/apply-now"
                className="inline-block bg-white text-purple-600 py-3 px-8 rounded-md text-lg font-medium hover:bg-purple-50"
              >
                Apply Now
              </Link>
              <Link
                to="/compare"
                className="inline-block border-2 border-white text-white py-3 px-8 rounded-md text-lg font-medium hover:bg-white hover:text-purple-600"
              >
                Compare Cards
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Features */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Why Choose Kreditwala Credit Cards?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Rewards & Cashback</h3>
                    <p className="mt-1 text-gray-600">Earn points on every purchase</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Zero Annual Fee</h3>
                    <p className="mt-1 text-gray-600">No annual charges for the first year</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Contactless Payments</h3>
                    <p className="mt-1 text-gray-600">Secure and fast transactions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">24/7 Support</h3>
                    <p className="mt-1 text-gray-600">Round-the-clock customer service</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Types */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Choose Your Card</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link to="/credit-cards/rewards" className="block p-6 border rounded-lg hover:border-purple-500 hover:shadow-md transition-all">
                  <h3 className="text-lg font-medium mb-2">Rewards Credit Card</h3>
                  <p className="text-gray-600">Earn points on every purchase and redeem for exciting rewards</p>
                </Link>
                <Link to="/credit-cards/travel" className="block p-6 border rounded-lg hover:border-purple-500 hover:shadow-md transition-all">
                  <h3 className="text-lg font-medium mb-2">Travel Credit Card</h3>
                  <p className="text-gray-600">Complimentary airport lounge access and travel benefits</p>
                </Link>
                <Link to="/credit-cards/fuel" className="block p-6 border rounded-lg hover:border-purple-500 hover:shadow-md transition-all">
                  <h3 className="text-lg font-medium mb-2">Fuel Credit Card</h3>
                  <p className="text-gray-600">Save on fuel expenses with cashback and discounts</p>
                </Link>
                <Link to="/credit-cards/shopping" className="block p-6 border rounded-lg hover:border-purple-500 hover:shadow-md transition-all">
                  <h3 className="text-lg font-medium mb-2">Shopping Credit Card</h3>
                  <p className="text-gray-600">Exclusive discounts and offers on shopping</p>
                </Link>
              </div>
            </div>

            {/* Documents Required */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Documents Required</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Identity Proof</span>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Address Proof</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Income Proof</span>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Selfie with PAN Card</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Eligibility Checker */}
          <div className="bg-white rounded-lg shadow-lg p-6 h-fit">
            <h2 className="text-2xl font-bold mb-4">Check Your Eligibility</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Monthly Income (₹)</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500">
                  <option>25,000 - 50,000</option>
                  <option>50,000 - 75,000</option>
                  <option>75,000 - 1,00,000</option>
                  <option>Above 1,00,000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Employment Type</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500">
                  <option>Salaried</option>
                  <option>Self-employed</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Credit Score</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500">
                  <option>700+</option>
                  <option>650-699</option>
                  <option>600-649</option>
                  <option>Below 600</option>
                </select>
              </div>
              <div className="pt-4">
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700">
                  Check Eligibility
                </button>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Eligible Cards</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Credit Limit</span>
                  <span className="font-medium">₹1,00,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Processing Time</span>
                  <span className="font-medium">24-48 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium mb-2">What is the minimum income required for a credit card?</h3>
              <p className="text-gray-600">The minimum income requirement varies based on the type of card. For basic cards, it starts from ₹25,000 per month, while premium cards may require higher income levels.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium mb-2">How long does it take to get a credit card approved?</h3>
              <p className="text-gray-600">Once you submit all the required documents, we typically approve the card within 24-48 hours. The physical card will be delivered within 5-7 business days.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium mb-2">What is the credit limit on my card?</h3>
              <p className="text-gray-600">The credit limit is determined based on your income, credit score, and repayment history. It can range from ₹25,000 to ₹10,00,000 or more.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium mb-2">How can I increase my credit limit?</h3>
              <p className="text-gray-600">You can request a credit limit increase after 6 months of regular usage and timely payments. The bank will review your request based on your usage pattern and repayment history.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Link
            to="/apply-now"
            className="inline-block bg-purple-600 text-white py-3 px-8 rounded-md text-lg font-medium hover:bg-purple-700"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreditCard; 