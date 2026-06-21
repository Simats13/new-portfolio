import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const ref = useReveal<HTMLElement>();

  return (
    <section id="projects" ref={ref} className="section scroll-mt-20">
      <SectionHeading
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        subtitle={t.projects.subtitle}
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {t.projects.items.map((p, i) => (
          <article
            key={i}
            className="reveal card card-hover group flex flex-col p-6"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-2 text-xl text-ink transition-transform group-hover:scale-110">
              <i className={`fa-solid ${p.icon}`} />
            </div>

            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-semibold text-text">{p.title}</h3>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.title} — ${p.linkLabel ?? "site"}`}
                  className="mt-0.5 text-muted transition-colors hover:text-ink"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square text-sm" />
                </a>
              )}
            </div>
            <p className="mt-2 flex-grow text-sm leading-relaxed text-muted">{p.description}</p>

            <div className="mt-4 flex items-center gap-2 text-sm text-green">
              <i className="fa-solid fa-circle-check" />
              <span>{p.highlight}</span>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border pt-4">
              {p.tags.map((tag) => (
                <span key={tag} className="font-mono text-xs text-muted">
                  #{tag.replace(/\s+/g, "")}
                </span>
              ))}
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto inline-flex items-center gap-1.5 font-mono text-xs font-medium text-ink transition-colors hover:underline"
                >
                  <i className="fa-solid fa-link" />
                  {p.linkLabel}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
