import React from 'react';
import { services } from '../data';
import { Code2, Cloud, Shield, Brain } from 'lucide-react';

const iconMap = {
  Code2,
  Cloud,
  Shield,
  Brain,
};

const Services = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Nuestros servicios</h1>
          <p className="text-xl text-gray-300">
            Experiencia y conocimientos en desarrollo de software y seguridad cibernética
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                {React.createElement(iconMap[service.icon as keyof typeof iconMap], {
                  size: 32,
                  className: 'text-blue-600',
                })}
              </div>
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Expertos en consultoría y planificación de proyectos
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Uso de metodologías ágiles
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Soporte continuado y personalizado
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;