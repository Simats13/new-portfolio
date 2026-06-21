import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";

const Skills: React.FC = () => {
  const { t } = useLanguage();
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="skills"
      ref={ref}
      className="scroll-mt-20 border-y border-border bg-bg-soft"
    >
      <div className="section">
        <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.skills.groups.map((group, i) => (
            <div key={i} className="reveal card card-hover p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink/10 text-ink">
                  <i className={`fa-solid ${group.icon}`} />
                </span>
                <h3 className="font-semibold text-text">{group.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="reveal mt-8 rounded-2xl border border-border bg-surface/50 p-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <span className="flex items-center gap-2 font-semibold text-text">
              <i className="fa-solid fa-award text-ink" />
              {t.skills.certsLabel}
            </span>
            {t.skills.certs.map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center gap-1.5 rounded-full border border-ink/30 bg-ink/10 px-3 py-1 text-sm text-text"
              >
                <i className="fa-solid fa-certificate text-xs text-ink" />
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
