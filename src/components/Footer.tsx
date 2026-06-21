import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-soft">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="text-sm text-muted">
          © {year} Mathis Maximin. {t.footer.rights}
        </p>

        <div className="flex items-center gap-4 text-muted">
          <a
            href="#contact"
            aria-label="Contact"
            className="transition-colors hover:text-ink"
          >
            <i className="fa-solid fa-envelope" />
          </a>
          <a
            href="https://github.com/Simats13"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-ink"
          >
            <i className="fa-brands fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/mathis-maximin"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-ink"
          >
            <i className="fa-brands fa-linkedin-in" />
          </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
