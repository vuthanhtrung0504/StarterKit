import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en.json';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: cb => cb('en'),
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next.use(languageDetector).use(initReactI18next).init({
  fallbackLng: 'en',
  debug: false,
  resources: { en },
  nsSeparator: false,
});
