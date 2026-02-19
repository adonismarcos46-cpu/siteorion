import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'Sobre Nós', path: '/about' },
      { label: 'Portfólio', path: '/portfolio' },
      { label: 'Serviços', path: '/services' },
      { label: 'Contato', path: '/contact' }
    ],
    services: [
      { label: 'Desenvolvimento Web', path: '/services' },
      { label: 'Aplicativos Mobile', path: '/services' },
      { label: 'Marketing Digital', path: '/services' },
      { label: 'Gestão de Redes', path: '/services' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <Sparkles className="w-8 h-8 text-blue-500 transition-transform group-hover:rotate-12" />
              <span className="text-2xl font-bold text-white">
                Orion <span className="text-blue-500">Digital</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Transformamos ideias em soluções digitais inovadoras. Desenvolvimento web, apps e estratégias de marketing que geram resultados reais.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:oriondigital182422@gmail.com"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/orion_digital_182422/"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Orion Digital. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;