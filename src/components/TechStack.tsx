import React, { useEffect } from 'react';
import { translate } from '../i18n';

interface Skill {
  name: string;
  icon: string;
  color: string;
  proficiency: number;
}

const TechStack: React.FC = () => {
  const title = translate('skills.title');
  const frontend = translate('skills.frontend');
  const backend = translate('skills.backend');
  const tools = translate('skills.tools');
  
  const frontendSkills: Skill[] = [
    { name: 'React', icon: 'react', color: '#61DAFB', proficiency: 90 },
    { name: 'TypeScript', icon: 'js', color: '#3178C6', proficiency: 85 },
    { name: 'JavaScript', icon: 'js', color: '#F7DF1E', proficiency: 95 },
    { name: 'HTML5', icon: 'html5', color: '#E34F26', proficiency: 95 },
    { name: 'CSS3', icon: 'css3-alt', color: '#1572B6', proficiency: 90 },
    { name: 'Vue.js', icon: 'vuejs', color: '#4FC08D', proficiency: 75 },
  ];
  
  const backendSkills: Skill[] = [
    { name: 'Node.js', icon: 'node-js', color: '#339933', proficiency: 85 },
    { name: 'Express', icon: 'node-js', color: '#000000', proficiency: 80 },
    { name: 'MongoDB', icon: 'database', color: '#47A248', proficiency: 75 },
    { name: 'PostgreSQL', icon: 'database', color: '#336791', proficiency: 70 },
    { name: 'RESTful APIs', icon: 'server', color: '#4CAF50', proficiency: 90 },
    { name: 'GraphQL', icon: 'project-diagram', color: '#E10098', proficiency: 65 },
  ];
  
  const toolSkills: Skill[] = [
    { name: 'Git', icon: 'git-alt', color: '#F05032', proficiency: 90 },
    { name: 'GitHub', icon: 'github', color: '#181717', proficiency: 90 },
    { name: 'Docker', icon: 'docker', color: '#2496ED', proficiency: 75 },
    { name: 'AWS', icon: 'aws', color: '#FF9900', proficiency: 70 },
    { name: 'Webpack', icon: 'js', color: '#8DD6F9', proficiency: 75 },
    { name: 'CI/CD', icon: 'github-alt', color: '#4CAF50', proficiency: 75 },
  ];
  
  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach((bar) => {
              const proficiency = bar.getAttribute('data-proficiency');
              if (proficiency) {
                (bar as HTMLElement).style.width = `${proficiency}%`;
              }
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const skillSections = document.querySelectorAll('.skills-category');
    skillSections.forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      skillSections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  // Skill component
  const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => {
    return (
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <i 
              className={`fab fa-${skill.icon} text-lg mr-2`} 
              style={{ color: skill.color }}
            ></i>
            <span className="font-medium">{skill.name}</span>
          </div>
          <span className="text-light-text text-sm">{skill.proficiency}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="progress-bar h-2.5 rounded-full transition-all duration-1000 ease-out" 
            style={{ width: '0%', backgroundColor: skill.color }}
            data-proficiency={skill.proficiency}
          ></div>
        </div>
      </div>
    );
  };
  
  return (
    <section id="skills" className="py-20 bg-section-bg">
      <div className="section-container">
        <h2 className="section-title" data-i18n="skills.title">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Frontend Skills */}
          <div className="skills-category card p-6">
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center" data-i18n="skills.frontend">
              <i className="fas fa-laptop-code mr-2"></i> {frontend}
            </h3>
            <div>
              {frontendSkills.map((skill, index) => (
                <SkillItem key={index} skill={skill} />
              ))}
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className="skills-category card p-6">
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center" data-i18n="skills.backend">
              <i className="fas fa-server mr-2"></i> {backend}
            </h3>
            <div>
              {backendSkills.map((skill, index) => (
                <SkillItem key={index} skill={skill} />
              ))}
            </div>
          </div>
          
          {/* Tools & Cloud Skills */}
          <div className="skills-category card p-6">
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center" data-i18n="skills.tools">
              <i className="fas fa-tools mr-2"></i> {tools}
            </h3>
            <div>
              {toolSkills.map((skill, index) => (
                <SkillItem key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack; 