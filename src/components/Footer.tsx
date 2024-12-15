import { Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Shadow Brokers</h3>
            <p className="text-gray-400">
              Transforma tus ideas en potentes soluciones digitales. Tu socio confiable en la innovación tecnológica.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>shadowbrokerssoft@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>+593 961 346 476</span>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>Ecuador, Cayambe</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Siguenos</h3>
            <div className="flex space-x-4">
              <a target='_blank' href="https://github.com/Shadow-Brokers7" className="hover:text-blue-400 transition-colors">
                <FaGithub size={24} />
              </a>
              {/* <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </a> */}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Shadow Brokers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
