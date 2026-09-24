import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import kk from './locales/kk.json'
import ru from './locales/ru.json'
import en from './locales/en.json'

export const LANG_STORAGE_KEY = 'aqu_lang'
export const SUPPORTED_LANGS = ['kk', 'ru', 'en']
export const DEFAULT_LANG = 'kk'

function getInitialLang() {
  const stored = typeof window !== 'undefined' ? window.localStorage.getItem(LANG_STORAGE_KEY) : null
  return SUPPORTED_LANGS.includes(stored) ? stored : DEFAULT_LANG
}

i18n.use(initReactI18next).init({
  resources: {
    kk: { translation: kk },
    ru: { translation: ru },
    en: { translation: en },
  },
  lng: getInitialLang(),
  fallbackLng: DEFAULT_LANG,
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(LANG_STORAGE_KEY, lng)
    document.documentElement.lang = lng
  }
})

if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.language
}

export default i18n
