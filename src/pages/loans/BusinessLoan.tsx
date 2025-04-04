import React from 'react';
import { Link } from 'react-router-dom';

const BusinessLoan = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Business Loan
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Fuel your business growth with our flexible business loans and working capital solutions
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
                Compare Rates
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
              <h2 className="text-2xl font-bold mb-4">Why Choose Kreditwala Business Loan?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">High Loan Amount</h3>
                    <p className="mt-1 text-gray-600">Get up to ₹50 crores for your business needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Flexible Repayment</h3>
                    <p className="mt-1 text-gray-600">Choose repayment tenure from 1 to 5 years</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Quick Processing</h3>
                    <p className="mt-1 text-gray-600">Get approval within 72 hours with minimal documentation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">No Collateral</h3>
                    <p className="mt-1 text-gray-600">Unsecured business loans up to ₹50 lakhs</p>
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
                    <span className="ml-3">Business vintage: 3+ years</span>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Minimum annual turnover: ₹50 lakhs</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Profitability: Last 2 years</span>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">CIBIL score: 750+</span>
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
                    <span className="ml-3">Business Registration Documents</span>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Financial Statements (Last 2 years)</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Bank Statements (Last 6 months)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">KYC Documents of Directors/Partners</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Loan Calculator */}
          <div className="bg-white rounded-lg shadow-lg p-6 h-fit">
            <h2 className="text-2xl font-bold mb-4">Loan Calculator</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Loan Amount (₹)</label>
                <input
                  type="range"
                  min="1000000"
                  max="500000000"
                  step="1000000"
                  className="w-full mt-1"
                />
                <div className="text-right text-sm text-gray-500">₹10,00,000 - ₹50,00,00,000</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Tenure (Years)</label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  className="w-full mt-1"
                />
                <div className="text-right text-sm text-gray-500">1 - 5 years</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Interest Rate (%)</label>
                <input
                  type="range"
                  min="12"
                  max="18"
                  step="0.1"
                  className="w-full mt-1"
                />
                <div className="text-right text-sm text-gray-500">12% - 18%</div>
              </div>
              <div className="pt-4">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                  Calculate EMI
                </button>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Monthly EMI</span>
                  <span className="font-medium">₹1,50,000</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Total Interest</span>
                  <span className="font-medium">₹30,00,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Payment</span>
                  <span className="font-medium">₹1,30,00,000</span>
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
              <h3 className="text-lg font-medium mb-2">What is the maximum loan amount I can get?</h3>
              <p className="text-gray-600">You can get a business loan up to ₹50 crores, depending on your business turnover, profitability, and credit score.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium mb-2">What is the processing time for a business loan?</h3>
              <p className="text-gray-600">The processing time is typically 3-5 working days, subject to document verification and approval.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium mb-2">Do I need to provide collateral?</h3>
              <p className="text-gray-600">For loans up to ₹50 lakhs, no collateral is required. For higher amounts, collateral may be required based on the loan amount and business profile.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium mb-2">Can I prepay my business loan?</h3>
              <p className="text-gray-600">Yes, you can prepay your business loan after 6 months of disbursement. Prepayment charges may apply as per the terms of your loan agreement.</p>
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

export default BusinessLoan; 