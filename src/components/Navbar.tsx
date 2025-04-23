import React, { useState, useEffect } from 'react';
import { translate } from '../i18n';

interface NavbarProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentLang, onLanguageChange }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { id: 'home', label: translate('navbar.home'), href: '#home' },
    { id: 'about', label: translate('navbar.about'), href: '#about' },
    { id: 'experience', label: translate('navbar.experience'), href: '#experience' },
    { id: 'projects', label: translate('navbar.projects'), href: '#projects' },
    { id: 'skills', label: translate('navbar.skills'), href: '#skills' },
    { id: 'contact', label: translate('navbar.contact'), href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white bg-opacity-95 backdrop-blur-[10px] shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[70px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold text-primary">JD</a>
          </div>
          
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-text hover:text-primary transition-colors duration-300"
                data-i18n={`navbar.${link.id}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* Language Switcher */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-1 rounded-md text-sm transition-colors ${
                currentLang === 'en'
                  ? 'bg-primary text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('fr')}
              className={`px-2 py-1 rounded-md text-sm transition-colors ${
                currentLang === 'fr'
                  ? 'bg-primary text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              FR
            </button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="block px-3 py-2 rounded-md hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
                data-i18n={`navbar.${link.id}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar; 