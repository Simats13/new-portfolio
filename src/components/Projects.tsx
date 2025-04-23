import React, { useEffect } from 'react';
import { translate } from '../i18n';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
}

const Projects: React.FC = () => {
  const title = translate('projects.title');
  const viewProject = translate('projects.viewProject');
  
  const projects: Project[] = [
    {
      id: 'project1',
      title: translate('projects.project1.title'),
      description: translate('projects.project1.description'),
      image: 'https://img.freepik.com/free-photo/closeup-computer-screen-with-screenshot-app-office-desk_637285-7299.jpg',
      technologies: [
        'React', 'TypeScript', 'Node.js', 'AWS'
      ],
      demoLink: 'https://example.com/project1',
    },
    {
      id: 'project2',
      title: translate('projects.project2.title'),
      description: translate('projects.project2.description'),
      image: 'https://img.freepik.com/free-photo/online-shopping-concept-shopping-cart-smartphone-screen_93675-56082.jpg',
      technologies: [
        'Vue.js', 'Express', 'MongoDB', 'Stripe'
      ],
      demoLink: 'https://example.com/project2',
    },
  ];
  
  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach((item) => {
      observer.observe(item);
    });
    
    return () => {
      projectItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);
  
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title" data-i18n="projects.title">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-item opacity-0 card group relative overflow-hidden"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Project image */}
              <div className="h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Project details */}
              <div className="p-6">
                <h3 
                  className="text-xl font-bold text-text mb-2" 
                  data-i18n={`projects.${project.id}.title`}
                >
                  {project.title}
                </h3>
                
                <p 
                  className="text-light-text mb-4" 
                  data-i18n={`projects.${project.id}.description`}
                >
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-blue-100 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* View project button */}
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors duration-300"
                  data-i18n="projects.viewProject"
                >
                  {viewProject}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 