import React, { useState } from "react";
import { LanguageProvider } from "./i18n/LanguageContext";
import { ThemeProvider } from "./theme/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import KonamiCode from "./components/KonamiCode";
import EasterEgg from "./components/EasterEgg";

const App: React.FC = () => {
  const [easterEgg, setEasterEgg] = useState(false);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <KonamiCode onKonamiCodeComplete={() => setEasterEgg(true)}>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
          <EasterEgg isVisible={easterEgg} onClose={() => setEasterEgg(false)} />
        </KonamiCode>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
