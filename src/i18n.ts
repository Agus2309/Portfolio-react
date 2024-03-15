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
      "me": "I'm Agustín,",
      "profession": "a Fullstack Web Developer",
      "portfolio": "This is my portfolio",
      "more": "See more",
      "about": {
        "title": "About Me",
        "description": "I am a Fullstack Web Developer with experience in building web applications using modern technologies."
      },
      "projects": {
        "title": "Projects",
        "first": "Web System for device and users management",
        "second": "App to create and manage events",
        "third": "Independant presentation component for the App Event",
        "fourth": "Notes App",
        "fifth": "CSV Parser",
        "viewLivePage": "See my project",
        "viewRepo": "See github repo",
        "Tech": "Technologies used"
      },
      "technologies": {
        "title": "Tools and Technologies"
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
        "technologies": "Tecnologías",
        "contact": "Contacto",
        "resume": "Mi CV"
      },
      "welcome": "Bienvenido!",
      "me": "Soy Agustín,",
      "profession": "un Desarrollador Web Fullstack",
      "portfolio": "Este es mi portfolio",
      "more": "Ver más",
      "about": {
        "title": "About Me",
        "description": "I am a Fullstack Web Developer with experience in building web applications using modern technologies."
      },
      "projects": {
        "title": "Proyectos",
        "first": "Sistema Web para la gestión de usuarios y dispositivos",
        "second": "App para crear y gestionar eventos",
        "third": "Componente independiente de presentación para la aplicación de eventos",
        "fourth": "Aplicación de Notas",
        "fifth": "CSV Parser",
        "viewLivePage": "Ver el proyecto",
        "viewRepo": "Ver repo de github",
        "Tech": "Tecnologías utilizadas"
      },
      "technologies": {
        "title": "Herramientas y Tecnologías"
      },
      "contact": {
        "title": "Contactame",
        "first": "lorem ipsum",
        "second": "lorem ipsum",
        "mail": "Correo",
        "social": "Redes Sociales"
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
