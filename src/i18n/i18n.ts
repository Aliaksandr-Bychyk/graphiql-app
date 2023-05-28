import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import localizationEN from './localization/english.json';
import localizationRU from './localization/russian.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

const resources = {
  en: {
    translation: localizationEN,
  },
  ru: {
    translation: localizationRU,
  },
};

const getLanguage = (): string => {
  const lang = localStorage.getItem('language');
  if (lang) {
    return lang as string;
  }
  return 'en';
};

i18next.use(initReactI18next).init({
  resources,
  lng: getLanguage(),
});

export default i18next;
