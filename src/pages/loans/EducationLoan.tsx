import React from 'react';
import { Link } from 'react-router-dom';

const EducationLoan = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Education Loan
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Invest in your future with our education loans for domestic and international studies
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
              <h2 className="text-2xl font-bold mb-4">Why Choose Kreditwala Education Loan?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">100% Course Fee Coverage</h3>
                    <p className="mt-1 text-gray-600">Get up to ₹1 crore for your education expenses</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Moratorium Period</h3>
                    <p className="mt-1 text-gray-600">Start repaying only after course completion + 6 months</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Low Interest Rates</h3>
                    <p className="mt-1 text-gray-600">Starting from 8.50% per annum with flexible repayment options</p>
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
                    <p className="mt-1 text-gray-600">Save up to ₹1.5 lakhs per year under Section 80E</p>
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
                    <span className="ml-3">Age: 18 to 35 years</span>
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
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Admission to recognized institution</span>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Co-applicant required (parent/guardian)</span>
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
                    <span className="ml-3">Admission Letter</span>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Course Fee Structure</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Academic Records</span>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="ml-3">Co-applicant's Income Proof</span>
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
                  min="100000"
                  max="10000000"
                  step="100000"
                  className="w-full mt-1"
                />
                <div className="text-right text-sm text-gray-500">₹1,00,000 - ₹1,00,00,000</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Tenure (Years)</label>
                <input
                  type="range"
                  min="5"
                  max="15"
                  step="1"
                  className="w-full mt-1"
                />
                <div className="text-right text-sm text-gray-500">5 - 15 years</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Interest Rate (%)</label>
                <input
                  type="range"
                  min="8.5"
                  max="12"
                  step="0.1"
                  className="w-full mt-1"
                />
                <div className="text-right text-sm text-gray-500">8.5% - 12%</div>
              </div>
              <div className="pt-4">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                  Calculate EMI
                </button>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Monthly EMI</span>
                  <span className="font-medium">₹12,500</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Total Interest</span>
                  <span className="font-medium">₹5,00,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Payment</span>
                  <span className="font-medium">₹15,00,000</span>
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
              <h3 className="text-lg font-medium mb-2">What expenses are covered under education loan?</h3>
              <p className="text-gray-600">Education loans cover tuition fees, hostel charges, examination fees, library fees, travel expenses, and other course-related expenses.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium mb-2">When do I need to start repaying the loan?</h3>
              <p className="text-gray-600">You can start repaying the loan after course completion plus 6 months (moratorium period). During this period, only simple interest is charged.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium mb-2">Is collateral required for education loans?</h3>
              <p className="text-gray-600">For loans up to ₹7.5 lakhs, no collateral is required. For higher amounts, collateral may be required based on the loan amount and course.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium mb-2">What are the tax benefits on education loans?</h3>
              <p className="text-gray-600">You can claim tax deduction on the interest paid under Section 80E. There is no upper limit on the deduction amount.</p>
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

export default EducationLoan; 