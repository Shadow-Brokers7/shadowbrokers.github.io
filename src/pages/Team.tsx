import React from 'react';
import { team } from '../data';
import { Github, Linkedin, Mail } from 'lucide-react';

const Team = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Nuestro equipo</h1>
          <p className="text-xl text-gray-300">
            Conozca a los expertos detrás de Shadow Brokers
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-100 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.github} target='_blank'
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={member.linkedin} target='_blank'
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={`mailto:${member.mail}`} target='_blank'
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Mail size={20} />
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

export default Team;