import React from 'react';

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: 'HDFC Bank',
      logo: '/images/partners/hdfc.png',
      category: 'Banking'
    },
    {
      id: 2,
      name: 'ICICI Bank',
      logo: '/images/partners/icici.png',
      category: 'Banking'
    },
    {
      id: 3,
      name: 'SBI',
      logo: '/images/partners/sbi.png',
      category: 'Banking'
    },
    {
      id: 4,
      name: 'Axis Bank',
      logo: '/images/partners/axis.png',
      category: 'Banking'
    },
    {
      id: 5,
      name: 'Bajaj Finserv',
      logo: '/images/partners/bajaj.png',
      category: 'NBFC'
    },
    {
      id: 6,
      name: 'Kotak Mahindra',
      logo: '/images/partners/kotak.png',
      category: 'Banking'
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Trusted Partners
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            We partner with leading banks and financial institutions to bring you the best products
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <img
                className="h-12 w-auto object-contain"
                src={partner.logo}
                alt={partner.name}
              />
              <p className="mt-4 text-sm font-medium text-gray-900">
                {partner.name}
              </p>
              <p className="mt-1 text-xs text-gray-500">{partner.category}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
          >
            Become a Partner
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners; 