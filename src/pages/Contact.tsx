import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-display font-bold text-primary-900 mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions or need assistance? We're here to help. Fill out the form or reach out to us directly.
          </p>
          <div className="space-y-4">
            <div className="flex items-start">
              <FaPhone className="mt-1 mr-3 text-primary-500" />
              <div>
                <h3 className="font-display font-bold text-primary-900">Phone</h3>
                <a href="tel:+919311757194" className="text-gray-600 hover:text-primary-500 transition-colors">
                  +91 93117 57194
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <FaEnvelope className="mt-1 mr-3 text-primary-500" />
              <div>
                <h3 className="font-display font-bold text-primary-900">Email</h3>
                <a href="mailto:support@kreditwala.com" className="text-gray-600 hover:text-primary-500 transition-colors">
                  support@kreditwala.com
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <FaMapMarkerAlt className="mt-1 mr-3 text-primary-500" />
              <div>
                <h3 className="font-display font-bold text-primary-900">Address</h3>
                <p className="text-gray-600">
                  PLOT NO. Y9 &10, IIND FLOOR, MAIN NAJAFGARH ROAD, Vipin Garden, New Delhi, Delhi 110059
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 