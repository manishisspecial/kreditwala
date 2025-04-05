import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const SocialIcons = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: FaFacebook,
      href: 'https://facebook.com/kreditwala',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      href: 'https://instagram.com/kreditwala',
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      href: 'https://twitter.com/kreditwala',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://linkedin.com/company/kreditwala',
    },
    {
      name: 'YouTube',
      icon: FaYoutube,
      href: 'https://youtube.com/kreditwala',
    },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-400 hover:text-primary-600 transition-colors duration-300"
          aria-label={social.name}
        >
          <social.icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons; 