import React, { useState } from 'react';
import { translate } from '../i18n';

const Contact: React.FC = () => {
  const title = translate('contact.title');
  const emailText = translate('contact.email');
  const linkedinText = translate('contact.linkedin');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(null);
    
    // Simulate form submission
    setTimeout(() => {
      // Success simulation
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(null);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title" data-i18n="contact.title">{title}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Contact form */}
          <div className="card p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-text">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-text">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-text">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-text">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="primary-button w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i>
                    Send Message
                  </>
                )}
              </button>
              
              {submitSuccess === true && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitSuccess === false && (
                <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
                  {errorMessage || 'Something went wrong. Please try again later.'}
                </div>
              )}
            </form>
          </div>
          
          {/* Contact information */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="bg-section-bg p-6 rounded-lg flex items-start space-x-4">
              <div className="bg-primary text-white rounded-full p-3 mt-1">
                <i className="fas fa-envelope text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" data-i18n="contact.email">{emailText}</h3>
                <a 
                  href="mailto:john.doe@example.com" 
                  className="text-primary hover:underline"
                >
                  john.doe@example.com
                </a>
              </div>
            </div>
            
            <div className="bg-section-bg p-6 rounded-lg flex items-start space-x-4">
              <div className="bg-primary text-white rounded-full p-3 mt-1">
                <i className="fab fa-linkedin-in text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" data-i18n="contact.linkedin">{linkedinText}</h3>
                <a 
                  href="https://linkedin.com/in/johndoe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  linkedin.com/in/johndoe
                </a>
              </div>
            </div>
            
            <div className="bg-section-bg p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Available For</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check-circle text-primary"></i>
                  <span>Full-time roles</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check-circle text-primary"></i>
                  <span>Freelance projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check-circle text-primary"></i>
                  <span>Remote work</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check-circle text-primary"></i>
                  <span>Consultations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 