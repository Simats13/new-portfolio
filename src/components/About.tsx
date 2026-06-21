import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";

const About: React.FC = () => {
  const { t } = useLanguage();
  const ref = useReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="section scroll-mt-20">
      <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

      <div className="grid gap-10 lg:grid-cols-5">
        <div className="reveal lg:col-span-3">
          <div className="space-y-4 text-muted">
            {t.about.body.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          
        </div>

        
      </div>
    </section>
  );
};

export default About;
