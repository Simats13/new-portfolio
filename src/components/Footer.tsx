import React from "react";
import { translate } from "../i18n";

interface NavbarTranslations {
  home: string;
  about: string;
  experience: string;
  projects: string;
  skills: string;
  contact: string;
  education: string;
}

interface AboutTranslations {
  title: string;
  paragraph1: string;
  paragraph2: string;
  socialConnect: string;
  email: string;
  phone: string;
  github: string;
}

interface ContactTranslations {
  title: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  name: string;
  subject: string;
  message: string;
  sending: string;
  send: string;
  success: string;
  error: string;
  availableFor: string;
  fullTime: string;
  freelance: string;
  remote: string;
  consultations: string;
  location?: string;
}

interface FooterTranslations {
  copyright: string;
  quickLinks: string;
  madeWith: string;
  and: string;
}

const Footer: React.FC = () => {
  const quickLinks = translate("navbar") as unknown as NavbarTranslations;
  const contact = translate("contact") as unknown as ContactTranslations;
  const about = translate("about") as unknown as AboutTranslations;

  // Récupérer les traductions du footer
  const footerTrans = {
    copyright: translate("footer.copyright"),
    quickLinks: translate("footer.quickLinks"),
    madeWith: translate("footer.madeWith"),
    and: translate("footer.and"),
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div>
            <div className="text-2xl font-bold mb-4 text-primary">Mathis Maximin</div>
            <p className="text-gray-400 mb-4">
              Software engineer specializing in full-stack development, creating
              robust and scalable applications with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href={"mailto:" + about.email}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{footerTrans.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {quickLinks.home}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {quickLinks.about}
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {quickLinks.experience}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {quickLinks.projects}
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {quickLinks.skills}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {quickLinks.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-bold mb-4">{quickLinks.contact}</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <i className="fas fa-envelope mr-2"></i>
                <a
                  href={"mailto:" + about.email}
                  className="hover:text-white transition-colors duration-300"
                >
                  {about.email}
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <i className="fas fa-map-marker-alt mr-2"></i>
                <span>{contact.location || "Grenoble, France"}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p data-i18n="footer.copyright">{footerTrans.copyright}</p>
          <div className="mt-2 text-sm">
            <span>{footerTrans.madeWith}</span>
            <i className="fas fa-heart text-red-500 mx-1"></i>
            <span>{footerTrans.and}</span>
            <i className="fab fa-react text-blue-400 mx-1"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
