// // // import i18n from 'i18next';
// // // import { initReactI18next } from 'react-i18next';

// // // import enTranslations from './locales/en.json';
// // // import esTranslations from './locales/es.json';

// // // i18n
// // //   .use(initReactI18next)
// // //   .init({
// // //     resources: {
// // //       en: { translation: enTranslations },
// // //       es: { translation: esTranslations },
// // //     },
// // //     lng: 'en',
// // //     fallbackLng: 'en',
// // //     interpolation: {
// // //       escapeValue: false,
// // //     },
// // //   });

// // // export default i18n;




// // import i18n from 'i18next';
// // import { initReactI18next } from 'react-i18next';
// // import LanguageDetector from 'i18next-browser-languagedetector';

// // import enTranslations from './locales/en.json';
// // import esTranslations from './locales/es.json';

// // i18n
// //   .use(LanguageDetector)
// //   .use(initReactI18next)
// //   .init({
// //     resources: {
// //       en: { translation: enTranslations },
// //       es: { translation: esTranslations },
// //     },
// //     fallbackLng: 'en',
// //     supportedLngs: ['en', 'es'],
// //     interpolation: {
// //       escapeValue: false,
// //     },
// //     detection: {
// //       order: ['navigator', 'htmlTag', 'path', 'subdomain'],
// //       caches: ['localStorage', 'cookie'],
// //     },
// //     react: {
// //       useSuspense: false,
// //     },
// //   });

// // export default i18n;














// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import Backend from 'i18next-http-backend';

// i18n
//   .use(Backend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: 'en',
//     debug: process.env.NODE_ENV === 'development',
//     interpolation: {
//       escapeValue: false,
//     },
//     backend: {
//       loadPath: '/locales/{{lng}}/{{ns}}.json',
//     },
//     detection: {
//       order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
//       caches: ['localStorage', 'cookie'],
//     },
//     react: {
//       useSuspense: false,
//     },
//   });

// export default i18n;




import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;

