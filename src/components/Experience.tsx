import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";

const Experience: React.FC = () => {
  const { t } = useLanguage();
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-20 border-y border-border bg-bg-soft"
    >
      <div className="section">
        <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} />

        <div className="relative ml-2 border-l border-border pl-8 sm:ml-3">
          {t.experience.items.map((item, i) => (
            <div key={i} className="reveal relative pb-12 last:pb-0">
              {/* Timeline dot */}
              <span
                className={`absolute -left-[41px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                  item.current
                    ? "border-green bg-green/20"
                    : "border-border bg-surface"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    item.current ? "bg-green" : "bg-muted"
                  }`}
                />
              </span>

              <div className="card card-hover p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-text">{item.role}</h3>
                    <p className="mt-0.5 text-ink">{item.company}</p>
                  </div>
                  {item.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-green/40 bg-green/10 px-3 py-1 text-xs font-medium text-green">
                      <span className="h-1.5 w-1.5 rounded-full bg-green" />
                      {t.experience.current}
                    </span>
                  )}
                </div>

                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted">
                  <span>
                    <i className="fa-regular fa-calendar mr-1.5" />
                    {item.period}
                  </span>
                  <span>
                    <i className="fa-solid fa-location-dot mr-1.5" />
                    {item.location}
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {item.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-2.5 text-sm text-muted">
                      <i className="fa-solid fa-angle-right mt-1 text-xs text-ink" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
