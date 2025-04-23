import React, { useState, useEffect } from 'react';
import { loadTranslations, setLanguage, translate } from './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<string>('en');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Initialize translations
    const init = async () => {
      // Get browser language or stored preference
      const storedLang = localStorage.getItem('language');
      const browserLang = navigator.language.split('-')[0];
      const initialLang = storedLang || (browserLang === 'fr' ? 'fr' : 'en');
      
      // Load translations
      await loadTranslations();
      
      // Set language
      setLanguage(initialLang);
      setCurrentLang(initialLang);
      
      // Finish loading
      setIsLoading(false);
    };
    
    init();
  }, []);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setCurrentLang(lang);
    localStorage.setItem('language', lang);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="font-poppins">
      <Navbar currentLang={currentLang} onLanguageChange={handleLanguageChange} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
};

export default App; 