import React, { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";

// Destination address — kept here so it is never rendered in the page.
const CONTACT_EMAIL = "contact@simats.dev";

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const ref = useReveal<HTMLElement>();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `${form.name ? `${form.name} — ` : ""}Portfolio contact`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const infoCards = [
    {
      icon: "fa-location-dot",
      label: t.contact.locationLabel,
      value: t.contact.locationValue,
    },
    {
      icon: "fa-language",
      label: t.contact.languages,
      value: t.contact.languagesList,
    },
  ];

  return (
    <section id="contact" ref={ref} className="section scroll-mt-20">
      <div className="reveal relative overflow-hidden rounded-3xl border border-border bg-surface/50 p-8 sm:p-12">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo/10 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-pink/40 blur-[100px]" />

        <div className="relative grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={t.contact.eyebrow}
              title={t.contact.title}
              subtitle={t.contact.body}
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {infoCards.map((card, i) => (
                <div key={i} className="card card-hover flex items-center gap-4 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink/10 text-ink">
                    <i className={`fa-solid ${card.icon}`} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wide text-muted">{card.label}</p>
                    <p className="font-medium text-text">{card.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form (mailto) */}
          <form onSubmit={handleSubmit} className="card flex flex-col gap-4 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-sm">
                <span className="font-medium text-text">{t.contact.form.name}</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.form.namePlaceholder}
                  className="rounded-xl border border-border bg-bg/60 px-4 py-2.5 text-text placeholder:text-muted/70 outline-none transition-colors focus:border-ink"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm">
                <span className="font-medium text-text">{t.contact.form.email}</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.form.emailPlaceholder}
                  className="rounded-xl border border-border bg-bg/60 px-4 py-2.5 text-text placeholder:text-muted/70 outline-none transition-colors focus:border-ink"
                />
              </label>
            </div>

            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-text">{t.contact.form.message}</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder={t.contact.form.messagePlaceholder}
                className="resize-none rounded-xl border border-border bg-bg/60 px-4 py-2.5 text-text placeholder:text-muted/70 outline-none transition-colors focus:border-ink"
              />
            </label>

            <button type="submit" className="btn-primary mt-2 w-full sm:w-auto sm:self-start">
              <i className="fa-solid fa-paper-plane" />
              {t.contact.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
