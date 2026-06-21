import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const roles = t.hero.roles;
  const [display, setDisplay] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const deleting = useRef(false);
  const charIndex = useRef(0);

  // Typewriter cycling through roles
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const current = roles[roleIndex % roles.length];

    const tick = () => {
      if (!deleting.current) {
        charIndex.current += 1;
        setDisplay(current.slice(0, charIndex.current));
        if (charIndex.current === current.length) {
          deleting.current = true;
          timeout = setTimeout(tick, 1600);
          return;
        }
        timeout = setTimeout(tick, 70);
      } else {
        charIndex.current -= 1;
        setDisplay(current.slice(0, charIndex.current));
        if (charIndex.current === 0) {
          deleting.current = false;
          setRoleIndex((i) => i + 1);
          timeout = setTimeout(tick, 200);
          return;
        }
        timeout = setTimeout(tick, 35);
      }
    };

    timeout = setTimeout(tick, 120);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roleIndex, t]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-indigo/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[380px] w-[480px] rounded-full bg-pink/30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 left-0 h-[300px] w-[300px] rounded-full bg-indigo/10 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 lg:py-0">
        <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row lg:gap-8">
          <div className="w-full max-w-3xl lg:w-2/3">
            {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-sm text-muted backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
              </span>
              {t.hero.available}
            </div> */}

            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {t.hero.name.split(" ")[0]}{" "}
              <span className="gradient-text">
                {t.hero.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <div className="mt-5 flex items-center gap-2 font-mono text-lg text-ink sm:text-2xl">
              <span className="text-muted">{">"}</span>
              <span>{display}</span>
              <span className="inline-block h-6 w-[2px] animate-blink bg-ink sm:h-7" />
            </div>


            <p className="mt-3 max-w-2xl text-muted">{t.hero.intro}</p>

            <p className="mt-5 flex items-center gap-2 text-sm text-muted">
              <i className="fa-solid fa-location-dot text-ink" />
              {t.hero.location}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="btn-primary">
                <i className="fa-solid fa-paper-plane" />
                {t.hero.ctaContact}
              </a>
              <a href="#experience" className="btn-ghost">
                <i className="fa-solid fa-arrow-down" />
                {t.hero.ctaWork}
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5 text-xl text-muted">
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

          <div className="flex w-full justify-center lg:w-1/3 lg:justify-end">
            <div className="relative animate-float">
              {/* Decorative gradient glow behind the photo */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-indigo via-pink-strong to-violet opacity-30 blur-2xl transition duration-1000 group-hover:opacity-50" />
              
              {/* Inner glassmorphism styled ring wrapper */}
              <div className="relative rounded-full border-4 border-border/80 bg-surface/50 p-2 shadow-soft backdrop-blur-sm transition-all duration-300 hover:border-ink/30">
                <div className="h-44 w-44 overflow-hidden rounded-full border border-border bg-surface sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72">
                  <img
                    src="/assets/images/profilePicture.png"
                    alt="Mathis Maximin"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted">
        <i className="fa-solid fa-chevron-down animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
