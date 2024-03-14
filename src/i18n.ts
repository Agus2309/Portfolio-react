import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


const resources = {
  en: {
    translation: {
      "navbar": {
        "home": "Home",
        "about": "About",
        "projects": "Projects",
        "technologies": "Technologies",
        "contact": "Contact",
        "resume": "Resume"
      },
      "welcome": "Welcome!",
      "about": {
        "title": "About Me",
        "description": "I am a Fullstack Web Developer with experience in building web applications using modern technologies."
      },
      "projects": {
        "title": "Projects",
        "viewLivePage": "View Live Page",
        "viewRepo": "View Repository"
      },
      "technologies": {
        "title": "Technologies Used"
      },
      "contact": {
        "title": "Contact Me",
        "name": "Name",
        "email": "Email",
        "message": "Message",
        "send": "Send"
      }
    },
  },
  es: {
    translation: {
      "navbar": {
        "home": "Home",
        "about": "Sobre Mí",
        "projects": "Proyectos",
        "technologies": "Technologías",
        "contact": "Contacto",
        "resume": "Mi CV"
      },
      "welcome": "Welcome!",
      "about": {
        "title": "About Me",
        "description": "I am a Fullstack Web Developer with experience in building web applications using modern technologies."
      },
      "projects": {
        "title": "Projects",
        "viewLivePage": "View Live Page",
        "viewRepo": "View Repository"
      },
      "technologies": {
        "title": "Technologies Used"
      },
      "contact": {
        "title": "Contact Me",
        "name": "Name",
        "email": "Email",
        "message": "Message",
        "send": "Send"
      }
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources,
    debug: true,
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['navigator', 'localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;
