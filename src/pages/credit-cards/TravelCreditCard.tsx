import React from 'react';
import { Link } from 'react-router-dom';

const TravelCard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Travel Credit Card
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Make your travels more rewarding with our premium travel credit card
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link
                to="/apply-now"
                className="inline-block bg-white text-blue-600 py-3 px-8 rounded-md text-lg font-medium hover:bg-blue-50"
              >
                Apply Now
              </Link>
              <Link
                to="/compare"
                className="inline-block border-2 border-white text-white py-3 px-8 rounded-md text-lg font-medium hover:bg-white hover:text-blue-600"
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
              <h2 className="text-2xl font-bold mb-4">Why Choose Kreditwala Travel Card?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Air Miles</h3>
                    <p className="mt-1 text-gray-600">Earn 4 air miles per ₹100 spent on travel bookings</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Complimentary Travel Insurance</h3>
                    <p className="mt-1 text-gray-600">Get up to ₹50 lakhs travel insurance coverage</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Global Lounge Access</h3>
                    <p className="mt-1 text-gray-600">Unlimited access to 1,000+ airport lounges worldwide</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Concierge Services</h3>
                    <p className="mt-1 text-gray-600">24/7 travel concierge for flight bookings, hotel reservations, and more</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Eligibility Criteria</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Age: 21 to 60 years</span>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Minimum Income: ₹50,000 per month</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">CIBIL Score: 750+</span>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Indian Nationality</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents Required */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Documents Required</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Identity Proof (PAN Card)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Address Proof</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Income Proof</span>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Passport Size Photo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Travel Benefits Calculator */}
          <div className="bg-white rounded-lg shadow-lg p-6 h-fit">
            <h2 className="text-2xl font-bold mb-4">Travel Benefits Calculator</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Annual Travel Spend (₹)</label>
                <input
                  type="range"
                  min="100000"
                  max="1000000"
                  step="100000"
                  className="w-full mt-1"
                />
                <div className="text-right text-sm text-gray-500">₹1,00,000 - ₹10,00,000</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Travel Type</label>
                <select className="w-full mt-1 border-gray-300 rounded-md">
                  <option>Domestic</option>
                  <option>International</option>
                  <option>Both</option>
                </select>
              </div>
              <div className="pt-4">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                  Calculate Benefits
                </button>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Annual Air Miles</span>
                  <span className="font-medium">40,000</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Lounge Visits</span>
                  <span className="font-medium">Unlimited</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Insurance Coverage</span>
                  <span className="font-medium">₹50,00,000</span>
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
              <h3 className="text-lg font-medium mb-2">How do I earn air miles?</h3>
              <p className="text-gray-600">You earn 4 air miles per ₹100 spent on travel bookings and 2 air miles per ₹100 on other spends. Air miles can be redeemed for flight tickets, hotel stays, and more.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium mb-2">What is included in the travel insurance?</h3>
              <p className="text-gray-600">The travel insurance covers medical emergencies, trip cancellation, lost baggage, flight delays, and personal accident coverage up to ₹50 lakhs.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium mb-2">How do I access airport lounges?</h3>
              <p className="text-gray-600">Simply present your credit card and boarding pass at any participating airport lounge. You can also register for Priority Pass membership for additional lounge access.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium mb-2">What are the concierge services?</h3>
              <p className="text-gray-600">Our 24/7 concierge service helps with flight bookings, hotel reservations, restaurant recommendations, event tickets, and other travel-related assistance.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Link
            to="/apply-now"
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-md text-lg font-medium hover:bg-blue-700"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TravelCard; 