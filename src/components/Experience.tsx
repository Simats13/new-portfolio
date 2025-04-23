import React, { useEffect, useRef } from 'react';
import { translate } from '../i18n';

interface Job {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  icon: string;
}

const Experience: React.FC = () => {
  const title = translate('experience.title');
  
  const jobs: Job[] = [
    {
      id: 'job1',
      title: translate('experience.job1.title'),
      company: translate('experience.job1.company'),
      period: translate('experience.job1.period'),
      description: translate('experience.job1.description'),
      icon: 'code',
    },
    {
      id: 'job2',
      title: translate('experience.job2.title'),
      company: translate('experience.job2.company'),
      period: translate('experience.job2.period'),
      description: translate('experience.job2.description'),
      icon: 'laptop-code',
    },
    {
      id: 'job3',
      title: translate('experience.job3.title'),
      company: translate('experience.job3.company'),
      period: translate('experience.job3.period'),
      description: translate('experience.job3.description'),
      icon: 'window-maximize',
    },
  ];
  
  // Animation on scroll
  const timelineRef = useRef<HTMLDivElement>(null);
  
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
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
      observer.observe(item);
    });
    
    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);
  
  return (
    <section id="experience" className="py-20 bg-section-bg">
      <div className="section-container">
        <h2 className="section-title" data-i18n="experience.title">{title}</h2>
        
        {/* Timeline */}
        <div ref={timelineRef} className="relative mt-16">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          
          <div className="space-y-12">
            {jobs.map((job, index) => (
              <div 
                key={job.id} 
                className={`timeline-item opacity-0 transition-all duration-1000 ${
                  index % 2 === 0 ? 'md:ml-auto md:pl-16 md:pr-0' : 'md:mr-auto md:pr-16 md:pl-0'
                } md:w-1/2 relative`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-6 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-md z-10">
                  <i className={`fas fa-${job.icon}`}></i>
                </div>
                
                {/* Position the dot on the timeline */}
                <div 
                  className={`hidden md:block absolute top-6 transform ${
                    index % 2 === 0 
                      ? 'left-0 -translate-x-1/2'
                      : 'right-0 translate-x-1/2'
                  }`}
                ></div>
                
                {/* Mobile dot - only visible on small screens */}
                <div className="md:hidden absolute left-0 top-6 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-md z-10">
                  <i className={`fas fa-${job.icon}`}></i>
                </div>
                
                {/* Content card */}
                <div className={`
                  ml-16 md:ml-0 p-6 bg-white rounded-lg shadow-md 
                  hover:shadow-lg transition-shadow duration-300
                  ${index % 2 === 0 ? 'md:text-right' : ''}
                `}>
                  <h3 className="text-xl font-bold text-text" data-i18n={`experience.${job.id}.title`}>
                    {job.title}
                  </h3>
                  
                  <h4 className="text-lg font-medium text-primary mt-1" data-i18n={`experience.${job.id}.company`}>
                    {job.company}
                  </h4>
                  
                  <div className="text-sm text-light-text mt-2 mb-4" data-i18n={`experience.${job.id}.period`}>
                    {job.period}
                  </div>
                  
                  <p className="text-text" data-i18n={`experience.${job.id}.description`}>
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 