import React from 'react';
import { translate } from '../i18n';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

const TechStack: React.FC = () => {
  const title = translate('skills.title');
  const frontend = translate('skills.frontend');
  const backend = translate('skills.backend');
  const tools = translate('skills.tools');
  
  const frontendSkills: Skill[] = [
    { name: 'React', icon: 'react', color: '#61DAFB' },
    { name: 'TypeScript', icon: 'js', color: '#3178C6' },
    { name: 'JavaScript', icon: 'js', color: '#F7DF1E' },
    { name: 'HTML5', icon: 'html5', color: '#E34F26' },
    { name: 'CSS3', icon: 'css3-alt', color: '#1572B6' },
  ];
  
  const backendSkills: Skill[] = [
    { name: 'Node.js', icon: 'node-js', color: '#339933' },
    { name: 'Express', icon: 'node-js', color: '#000000' },
    { name: 'MongoDB', icon: 'database', color: '#47A248' },
    { name: 'Firestore', icon: 'database', color: '#336791' },
    { name: 'RESTful APIs', icon: 'server', color: '#4CAF50' },
  ];
  
  const toolSkills: Skill[] = [
    { name: 'Git', icon: 'git-alt', color: '#F05032' },
    { name: 'GitHub', icon: 'github', color: '#181717' },
    { name: 'Docker', icon: 'docker', color: '#2496ED' },
    { name: 'AWS', icon: 'aws', color: '#FF9900' },
    { name: 'Webpack', icon: 'js', color: '#8DD6F9' },
    { name: 'CI/CD', icon: 'github-alt', color: '#4CAF50' },
    { name: 'Kubernetes', icon: 'kubernetes', color: '#326CE5' },
    { name: 'Azure', icon: 'azure', color: '#0089D6' },
    { name: 'Google Cloud', icon: 'google', color: '#4285F4' },
    { name: 'Fastlane', icon: 'fastlane', color: '#000000' },
    { name: 'EAS', icon: 'eas', color: '#000000' },
  ];
  
  // Skill component
  const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => {
    return (
      <div className="flex flex-col items-center justify-center p-4 transition-transform hover:scale-110">
        <div className="text-center mb-2">
          <i 
            className={`fab fa-${skill.icon} text-4xl mb-2`} 
            style={{ color: skill.color }}
          ></i>
          <div className="font-medium mt-2">{skill.name}</div>
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
          <div className="card p-6">
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center" data-i18n="skills.frontend">
              <i className="fas fa-laptop-code mr-2"></i> {frontend}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {frontendSkills.map((skill, index) => (
                <SkillItem key={index} skill={skill} />
              ))}
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className="card p-6">
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center" data-i18n="skills.backend">
              <i className="fas fa-server mr-2"></i> {backend}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {backendSkills.map((skill, index) => (
                <SkillItem key={index} skill={skill} />
              ))}
            </div>
          </div>
          
          {/* Tools & Cloud Skills */}
          <div className="card p-6">
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center" data-i18n="skills.tools">
              <i className="fas fa-tools mr-2"></i> {tools}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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