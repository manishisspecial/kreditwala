import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Kreditwala made my loan application process incredibly smooth. Their team was supportive throughout the journey.",
    author: "Rahul Sharma",
    role: "Small Business Owner",
  },
  {
    quote: "The best financial service I've experienced. Quick approval and transparent process.",
    author: "Priya Patel",
    role: "Entrepreneur",
  },
  {
    quote: "Their customer service is exceptional. They truly understand their customers' needs.",
    author: "Amit Kumar",
    role: "Professional",
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold text-primary-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-primary-600">
            Don't just take our word for it. Here's what our customers have to say about us.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 bg-white rounded-lg shadow-lg"
            >
              <div className="absolute -top-4 left-6">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary-500 text-white">
                  <FaQuoteLeft className="h-4 w-4" />
                </div>
              </div>
              <blockquote className="mt-4">
                <p className="text-base text-primary-600">{testimonial.quote}</p>
              </blockquote>
              <div className="mt-6">
                <p className="text-sm font-medium text-primary-900">{testimonial.author}</p>
                <p className="text-sm text-primary-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 