import React, { useEffect, useRef, useState } from 'react';
import { translate } from '../i18n';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState<string>('');
  const [typingComplete, setTypingComplete] = useState<boolean>(false);
  const greeting = translate('hero.greeting');
  const name = translate('hero.name');
  const occupation = translate('hero.occupation');
  const location = translate('hero.location');
  const btnContact = translate('hero.btnContact');
  const btnWork = translate('hero.btnWork');
  
  // Typing animation effect
  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;
    
    const typeNextCharacter = () => {
      if (currentIndex < greeting.length) {
        currentText += greeting[currentIndex];
        setTypedText(currentText);
        currentIndex++;
        setTimeout(typeNextCharacter, 100);
      } else {
        setTypingComplete(true);
      }
    };
    
    typeNextCharacter();
    
    return () => {
      currentText = '';
      currentIndex = 0;
    };
  }, [greeting]);
  
  // Floating tech icons
  const techIcons = [
    { name: 'react', color: '#61DAFB' },
    { name: 'javascript', color: '#F7DF1E' },
    { name: 'typescript', color: '#3178C6' },
    { name: 'html5', color: '#E34F26' },
    { name: 'css3', color: '#1572B6' },
    { name: 'node', color: '#339933' },
    { name: 'git', color: '#F05032' },
    { name: 'aws', color: '#FF9900' },
  ];
  
  // Create floating icons
  const FloatingIcons = () => {
    return (
      <>
        {techIcons.map((icon, index) => (
          <div
            key={index}
            className="absolute opacity-20 animate-float"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 0.5})`,
            }}
          >
            <i 
              className={`fab fa-${icon.name} text-4xl md:text-5xl`} 
              style={{ color: icon.color }}
            ></i>
          </div>
        ))}
      </>
    );
  };
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)' }}
    >
      <FloatingIcons />
      
      <div className="container mx-auto px-4 text-center z-10">
        <div className="fade-in flex flex-col items-center space-y-4">
          <h2 className="text-xl md:text-2xl font-light">
            <span className="typing-animation">{typedText}</span>
            <span className={`cursor ${typingComplete ? 'hidden' : 'inline-block'}`}>|</span>
          </h2>
          
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-text transition-opacity duration-1000 ${
              typingComplete ? 'opacity-100' : 'opacity-0'
            }`}
            data-i18n="hero.name"
          >
            {name}
          </h1>
          
          <h2 
            className={`text-2xl md:text-3xl font-medium text-primary transition-opacity duration-1000 delay-300 ${
              typingComplete ? 'opacity-100' : 'opacity-0'
            }`}
            data-i18n="hero.occupation"
          >
            {occupation}
          </h2>
          
          <p 
            className={`text-light-text flex items-center transition-opacity duration-1000 delay-500 ${
              typingComplete ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <i className="fas fa-map-marker-alt mr-2"></i>
            <span data-i18n="hero.location">{location}</span>
          </p>
          
          <div 
            className={`mt-8 flex flex-col sm:flex-row gap-4 justify-center transition-opacity duration-1000 delay-700 ${
              typingComplete ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <a 
              href="#contact" 
              className="primary-button"
              data-i18n="hero.btnContact"
            >
              <i className="fas fa-envelope"></i>
              {btnContact}
            </a>
            <a 
              href="#projects" 
              className="secondary-button"
              data-i18n="hero.btnWork"
            >
              <i className="fas fa-briefcase"></i>
              {btnWork}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 