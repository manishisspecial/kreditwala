import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const CoreTeam = () => {
  const teamMembers = [
    {
      name: 'Mrityunjay Kumar Roy',
      designation: 'Founder & CEO',
      image: '/images/team/mrityunjay.ceo.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Shalini Parmar',
      designation: 'HR',
      image: '/images/team/shalini.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    }
    ,
    {
      name: 'Manish Shah',
      designation: 'Service Head',
      image: '/images/team/manish.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Core Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team consists of talented individuals dedicated to solving customer problems with sincerity.
            All of our team members are highly skilled and experienced in their respective fields.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-blue-200">{member.designation}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-center space-x-4">
                  <a href={member.social.linkedin} className="text-gray-600 hover:text-blue-600">
                    <FaLinkedin size={20} />
                  </a>
                  <a href={member.social.twitter} className="text-gray-600 hover:text-blue-400">
                    <FaTwitter size={20} />
                  </a>
                  <a href={member.social.github} className="text-gray-600 hover:text-gray-900">
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreTeam; 