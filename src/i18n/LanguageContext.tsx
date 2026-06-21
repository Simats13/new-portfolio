import React, { createContext, useContext, useEffect, useState } from "react";
import { content, Content, Lang } from "./content";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: Content;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const lang: Lang = "fr";

  useEffect(() => {
    document.documentElement.lang = "fr";
  }, []);

  const setLang = () => {};
  const toggleLang = () => {};

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
};
