import React, { useState, useEffect, useRef } from "react";
import { loadTranslations, setLanguage, translate } from "./i18n";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import KonamiCode from "./components/KonamiCode";
import EasterEgg from "./components/EasterEgg";

const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<string>("en");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isEasterEggVisible, setIsEasterEggVisible] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize translations
    const init = async () => {
      // Get browser language or stored preference
      const storedLang = localStorage.getItem("language");
      const browserLang = navigator.language.split("-")[0];
      const initialLang = storedLang || (browserLang === "fr" ? "fr" : "en");

      // Load translations
      await loadTranslations();

      // Set language
      setLanguage(initialLang);
      setCurrentLang(initialLang);

      // Finish loading
      setIsLoading(false);

      // Informer l'utilisateur que le Konami Code est disponible
      console.log("🎮 Le Konami Code est actif! Essayez: ↑ ↑ ↓ ↓ ← → ← → B A");
    };

    init();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      // Vérifier si l'utilisateur a dépassé la section Hero
      const heroHeight = heroRef.current.offsetHeight;
      const scrollPosition = window.scrollY;

      // Marquer qu'un scroll a eu lieu
      if (!hasScrolled && scrollPosition > 0) {
        setHasScrolled(true);
      }

      // Afficher la navbar si on a scrollé au-delà de 30% de la hauteur du Hero
      setShowNavbar(scrollPosition > heroHeight * 0.3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setCurrentLang(lang);
    localStorage.setItem("language", lang);
  };

  const handleKonamiCodeComplete = () => {
    setIsEasterEggVisible(true);
    console.log("Konami code détecté! Easter egg activé!");
  };

  const handleCloseEasterEgg = () => {
    setIsEasterEggVisible(false);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <KonamiCode onKonamiCodeComplete={handleKonamiCodeComplete}>
      <div className="font-poppins">
        <Navbar
          currentLang={currentLang}
          onLanguageChange={handleLanguageChange}
          isVisible={showNavbar}
        />
        <div ref={heroRef}>
          <Hero />
        </div>
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Contact />
        <Footer />
        <EasterEgg
          isVisible={isEasterEggVisible}
          onClose={handleCloseEasterEgg}
        />
      </div>
    </KonamiCode>
  );
};

export default App;
