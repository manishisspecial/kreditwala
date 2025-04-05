import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img
        src="/images/logo.jpg"
        alt="KreditWala Logo"
        className="h-12 w-auto"
      />
    </Link>
  );
};

export default Logo; 