import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data';
import { Code2, Cloud, Shield, Brain } from 'lucide-react';

const iconMap = {
  Code2,
  Cloud,
  Shield,
  Brain,
};

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transforma tus ideas en realidad
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Nosotros somos Shadow Brokers, expertos en desarrollo de software y seguridad cibernética
          </p>
          <Link
            to="/services"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Empieza a transformar tus ideas
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  {React.createElement(iconMap[service.icon as keyof typeof iconMap])}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para empezar tu proyecto?</h2>
          <p className="text-xl mb-8">¡Hablemos cómo podemos ayudarte a alcanzar tus metas!</p>
          <Link
            to="/team"
            className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Conoce a nuestro equipo
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;