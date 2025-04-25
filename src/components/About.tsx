import React, { useEffect, useRef } from "react";
import { translate } from "../i18n";

const About: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const title = translate("about.title");
  const paragraph1 = translate("about.paragraph1");
  const paragraph2 = translate("about.paragraph2");
  const socialConnect = translate("about.socialConnect");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("opacity-100");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title" data-i18n="about.title">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile image */}
          <div className="flex justify-center">
            <div
              ref={imageRef}
              className="relative group opacity-0 transition-opacity duration-1000"
            >
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-primary transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-lg">
                <img
                  src="/assets/images/profilePicture.png"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
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
