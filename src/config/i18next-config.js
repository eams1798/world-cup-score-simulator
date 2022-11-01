import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import Backend from 'i18next-http-backend';

i18next
  .use(Backend)
  .use(initReactI18next)
  .init({
    interpolation: {escapeValue: false},
    lng: 'en',
    fallbackLng: 'en',
    backend: {
      // for all available options read the backend's repository readme file
      loadPath: '/world-cup-score-simulator/locales/{{lng}}/{{ns}}.json'
    }
  });