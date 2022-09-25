import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import i18nBackend from 'i18next-http-backend';

i18next
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    interpolation: {escapeValue: false},
    lng: 'en',
    fallbackLng: 'en',
  });