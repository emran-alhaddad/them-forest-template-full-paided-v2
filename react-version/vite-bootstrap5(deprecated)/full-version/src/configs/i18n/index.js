// ** I18n Imports
import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// ** Languages Imports
const en = new URL('../../assets/data/locales/en.json', import.meta.url).href
const fr = new URL('../../assets/data/locales/fr.json', import.meta.url).href
const de = new URL('../../assets/data/locales/de.json', import.meta.url).href
const pt = new URL('../../assets/data/locales/pt.json', import.meta.url).href

const languages = {
  en,
  fr,
  de,
  pt
}

i18n

  // Enables the i18next backend
  .use(Backend)

  // Enable automatic language detection
  .use(LanguageDetector)

  // Enables the hook initialization module
  .use(initReactI18next)
  .init({
    lng: 'en',
    backend: {
      /* translation file path */
      loadPath: lng => languages[lng]
    },
    fallbackLng: 'en',
    debug: false,
    keySeparator: false,
    react: {
      useSuspense: false
    },
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    }
  })

export default i18n
