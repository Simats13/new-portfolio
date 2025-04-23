import enTranslations from './en';
import frTranslations from './fr';

type Translations = {
  [key: string]: string | Translations;
};

let currentLanguage: string = 'en';
let translations: { [lang: string]: Translations } = {};

export const loadTranslations = async (): Promise<void> => {
  translations = {
    en: enTranslations,
    fr: frTranslations,
  };
};

export const setLanguage = (lang: string): void => {
  if (translations[lang]) {
    currentLanguage = lang;
    
    // Replace all text content based on data-i18n attributes
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((element) => {
      const key = element.getAttribute('data-i18n');
      if (key) {
        const translatedText = getTranslation(key);
        if (translatedText) {
          element.textContent = translatedText;
        }
      }
    });
  }
};

export const translate = (key: string): string => {
  return getTranslation(key) || key;
};

const getTranslation = (key: string): string | undefined => {
  const keys = key.split('.');
  let result: any = translations[currentLanguage];
  
  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = result[k];
    } else {
      return undefined;
    }
  }
  
  return typeof result === 'string' ? result : undefined;
};

export default {
  loadTranslations,
  setLanguage,
  translate,
}; 