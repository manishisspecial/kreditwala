import React from 'react';
import { Link } from 'react-router-dom';

const HomeLoan = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Home Loan
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Fulfill your dream of owning a home with our competitive home loan rates and flexible repayment options
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
              <h2 className="text-2xl font-bold mb-4">Why Choose Kreditwala Home Loan?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Low Interest Rates</h3>
                    <p className="mt-1 text-gray-600">Starting from 8.40% per annum with flexible repayment options</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Long Repayment Tenure</h3>
                    <p className="mt-1 text-gray-600">Repay over 5 to 30 years as per your convenience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">High Loan Amount</h3>
                    <p className="mt-1 text-gray-600">Get up to 90% of property value with minimal down payment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Tax Benefits</h3>
                    <p className="mt-1 text-gray-600">Save up to ₹2 lakhs per year on taxes under Section 24(b)</p>
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
                    <span className="ml-3">Age: 21 to 65 years</span>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Minimum monthly income: ₹35,000</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Minimum work experience: 2 years</span>
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
                    <span className="ml-3">Identity Proof (Aadhaar/Passport/PAN)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Address Proof (Aadhaar/Passport/Utility Bill)</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Income Proof (Salary Slips/Bank Statements)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Property Documents (Sale Deed/Agreement)</span>
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
                  min="500000"
                  max="50000000"
                  step="500000"
                  className="w-full mt-1"
                />
                <div className="text-right text-sm text-gray-500">₹5,00,000 - ₹5,00,00,000</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Tenure (Years)</label>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="5"
                  className="w-full mt-1"
                />
                <div className="text-right text-sm text-gray-500">5 - 30 years</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Interest Rate (%)</label>
                <input
                  type="range"
                  min="8.4"
                  max="12"
                  step="0.1"
                  className="w-full mt-1"
                />
                <div className="text-right text-sm text-gray-500">8.4% - 12%</div>
              </div>
              <div className="pt-4">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                  Calculate EMI
                </button>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Monthly EMI</span>
                  <span className="font-medium">₹35,000</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Total Interest</span>
                  <span className="font-medium">₹25,00,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Payment</span>
                  <span className="font-medium">₹75,00,000</span>
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
              <p className="text-gray-600">You can get a home loan up to ₹5 crores, depending on your income, property value, and credit score.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium mb-2">What is the maximum tenure for a home loan?</h3>
              <p className="text-gray-600">The maximum tenure for a home loan is 30 years, subject to your age at loan maturity.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium mb-2">What are the tax benefits on home loans?</h3>
              <p className="text-gray-600">You can claim tax deductions up to ₹2 lakhs per year on home loan interest under Section 24(b) and up to ₹1.5 lakhs on principal repayment under Section 80C.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium mb-2">Can I get a home loan for a plot of land?</h3>
              <p className="text-gray-600">Yes, you can get a home loan for purchasing a plot of land, but the loan amount and terms may vary compared to a constructed property.</p>
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

export default HomeLoan; 