import React from 'react';
import { Link } from 'react-router-dom';

const MobileInsurance = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Mobile Insurance
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Protect your smartphone from accidental damage, theft, and more
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link
                to="/apply-now"
                className="inline-block bg-white text-blue-600 py-3 px-8 rounded-md text-lg font-medium hover:bg-blue-50"
              >
                Get Quote
              </Link>
              <Link
                to="/compare"
                className="inline-block border-2 border-white text-white py-3 px-8 rounded-md text-lg font-medium hover:bg-white hover:text-blue-600"
              >
                Compare Plans
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
              <h2 className="text-2xl font-bold mb-4">Why Choose Kreditwala Mobile Insurance?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Accidental Damage</h3>
                    <p className="mt-1 text-gray-600">Coverage for drops and spills</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Theft Protection</h3>
                    <p className="mt-1 text-gray-600">Coverage for stolen devices</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Liquid Damage</h3>
                    <p className="mt-1 text-gray-600">Protection against water damage</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Screen Repair</h3>
                    <p className="mt-1 text-gray-600">Coverage for cracked screens</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage Details */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Coverage Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Accidental Damage</span>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Theft</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Liquid Damage</span>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Screen Damage</span>
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
                    <span className="ml-3">Phone Invoice</span>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">IMEI Number</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Identity Proof</span>
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
              </div>
            </div>
          </div>

          {/* Premium Calculator */}
          <div className="bg-white rounded-lg shadow-lg p-6 h-fit">
            <h2 className="text-2xl font-bold mb-4">Premium Calculator</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Model</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>iPhone 15 Pro Max</option>
                  <option>Samsung Galaxy S24 Ultra</option>
                  <option>Google Pixel 8 Pro</option>
                  <option>OnePlus 12</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Value</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>₹50,000</option>
                  <option>₹75,000</option>
                  <option>₹1 Lakh</option>
                  <option>₹1.5 Lakhs</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Coverage Type</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Basic (Accidental + Screen)</option>
                  <option>Comprehensive (All Risks)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Policy Term</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>1 year</option>
                  <option>2 years</option>
                </select>
              </div>
              <div className="pt-4">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                  Calculate Premium
                </button>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Annual Premium</span>
                  <span className="font-medium">₹2,500</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Monthly Premium</span>
                  <span className="font-medium">₹208</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Coverage Amount</span>
                  <span className="font-medium">₹1 Lakh</span>
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
              <h3 className="text-lg font-medium mb-2">What is mobile insurance?</h3>
              <p className="text-gray-600">Mobile insurance provides coverage for your smartphone against accidental damage, theft, liquid damage, and screen damage.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium mb-2">What does mobile insurance cover?</h3>
              <p className="text-gray-600">Mobile insurance typically covers accidental damage, theft, liquid damage, and screen damage, depending on the plan you choose.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium mb-2">How are claims processed?</h3>
              <p className="text-gray-600">Claims can be submitted online with photos of the damage and required documents. Claims are typically processed within 3-5 working days.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium mb-2">Can I transfer my insurance to a new phone?</h3>
              <p className="text-gray-600">Yes, you can transfer your insurance to a new phone by updating the details in your policy. A small transfer fee may apply.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Link
            to="/apply-now"
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-md text-lg font-medium hover:bg-blue-700"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileInsurance; 