import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

const isBrowser = typeof window !== 'undefined';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'me',
    supportedLngs: ['en', 'me'],
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
    detection: isBrowser ? {} : false,
  });

export default i18n;
