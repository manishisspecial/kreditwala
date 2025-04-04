import React, { useState } from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  rating: number;
  features: string[];
  buttonText: string;
  onButtonClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  imageUrl,
  rating,
  features,
  buttonText,
  onButtonClick,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="h-full flex flex-col transition-transform duration-200 hover:-translate-y-1">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-40 bg-gray-100">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <img
            src={imageUrl}
            alt={title}
            className={`w-full h-full object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <ul className="mb-4 space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-gray-600 text-sm">
                • {feature}
              </li>
            ))}
          </ul>
          <button
            onClick={onButtonClick}
            className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 