import { useEffect, useState } from 'react'
import { LANGUAGES, LanguageContext } from './i18n.js'

const TITLES = {
  en: 'Hotel Puerto Viejo — Surf Hostel, Costa Rica',
  es: 'Hotel Puerto Viejo — Surf Hostel, Costa Rica',
}

const DESCRIPTIONS = {
  en: 'Hotel Puerto Viejo — the first hotel in town, open since 1987. A laid-back, affordable surf hostel half a block from the sea in Puerto Viejo de Talamanca, Costa Rica. Dorms and private rooms.',
  es: 'Hotel Puerto Viejo — el primer hotel del pueblo, abierto desde 1987. Un surf hostel relajado y económico a media cuadra del mar en Puerto Viejo de Talamanca, Costa Rica. Dormitorios y habitaciones privadas.',
}

const STORAGE_KEY = 'hpv-language'

function initialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (LANGUAGES.includes(saved)) return saved
  } catch {
    // Storage can be blocked (private mode); fall through to the browser language.
  }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLanguage)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = TITLES[lang]
    document.querySelector('meta[name="description"]')?.setAttribute('content', DESCRIPTIONS[lang])
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Not critical if the choice can't be remembered.
    }
  }, [lang])

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}

export default LanguageProvider
