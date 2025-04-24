import React from "react";
import { translate } from "../i18n";

const About: React.FC = () => {
  const title = translate("about.title");
  const paragraph1 = translate("about.paragraph1");
  const paragraph2 = translate("about.paragraph2");
  const socialConnect = translate("about.socialConnect");

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title" data-i18n="about.title">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-primary transform transition-transform duration-300 group-hover:-translate-y-2">
                <img
                  src="/assets/images/profilePicture.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-6">
            <p className="text-lg text-text" data-i18n="about.paragraph1">
              {paragraph1}
            </p>

            <p className="text-lg text-text" data-i18n="about.paragraph2">
              {paragraph2}
            </p>

            <div className="mt-8">
              <p className="font-medium mb-4" data-i18n="about.socialConnect">
                {socialConnect}
              </p>

              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/mathis-maximin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>

                <a
                  href="mailto:mathis@simats.dev"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
