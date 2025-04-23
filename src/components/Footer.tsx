import React from 'react';
import { translate } from '../i18n';

const Footer: React.FC = () => {
  const copyright = translate('footer.copyright');
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div>
            <div className="text-2xl font-bold mb-4 text-primary">JD</div>
            <p className="text-gray-400 mb-4">
              Software engineer specializing in full-stack development, creating robust and scalable applications with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:john.doe@example.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-300">Experience</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">Skills</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <i className="fas fa-envelope mr-2"></i>
                <a href="mailto:john.doe@example.com" className="hover:text-white transition-colors duration-300">
                  john.doe@example.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <i className="fas fa-map-marker-alt mr-2"></i>
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p data-i18n="footer.copyright">{copyright}</p>
          <div className="mt-2 text-sm">
            <span>Made with</span>
            <i className="fas fa-heart text-red-500 mx-1"></i>
            <span>and</span>
            <i className="fab fa-react text-blue-400 mx-1"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 