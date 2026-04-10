import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', path: '/', hash: null },
    { label: 'Orionis IA', path: '/orionis', hash: null },
    { label: 'Portfólio', path: '/portfolio', hash: null },
    { label: 'Soluções', path: '/', hash: 'solucoes' },
    { label: 'Contato', path: '/contact', hash: null }
  ];

  const whatsappNumber = "5581999464238";
  const whatsappMessage = encodeURIComponent("Quero estruturar meu sistema digital com a Orion.");

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  const handleNavClick = (e, item) => {
    if (item.hash) {
      e.preventDefault();
      if (location.pathname !== item.path) {
        navigate(item.path);
        setTimeout(() => {
          const element = document.getElementById(item.hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        const element = document.getElementById(item.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-950/95 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/20 rounded-lg blur-lg group-hover:bg-blue-600/30 transition-all"></div>
              <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white transition-transform group-hover:rotate-12" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 leading-tight">
                Orion
              </span>
              <span className="text-xs font-medium text-blue-600 leading-tight">
                Digital
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.hash ? `${item.path}#${item.hash}` : item.path}
                onClick={(e) => handleNavClick(e, item)}
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                  location.pathname === item.path
                    ? 'text-blue-400'
                    : 'text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={openWhatsApp}
              className="bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              Falar com Especialista
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-blue-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.hash ? `${item.path}#${item.hash}` : item.path}
                onClick={(e) => handleNavClick(e, item)}
                className={`block text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              onClick={() => {
                openWhatsApp();
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Falar com Especialista
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;