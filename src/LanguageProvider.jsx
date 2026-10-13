import { useEffect, useState } from 'react'
import { LANGUAGE_PATHS, LanguageContext, SITE_URL, languageFromPath } from './i18n.js'

const TITLES = {
  en: 'Hotel Puerto Viejo — Surf Hostel, Costa Rica',
  es: 'Hotel Puerto Viejo — Hostal de Surf en Puerto Viejo, Costa Rica',
}

const DESCRIPTIONS = {
  en: 'Hotel Puerto Viejo — the first hotel in town, open since 1987. A laid-back, affordable surf hostel half a block from the sea in Puerto Viejo de Talamanca, Costa Rica. Dorms and private rooms.',
  es: 'Hotel Puerto Viejo — el primer hotel del pueblo, abierto desde 1987. Un surf hostel relajado y económico a media cuadra del mar en Puerto Viejo de Talamanca, Costa Rica. Dormitorios y habitaciones privadas.',
}

function setHeadTag(selector, attribute, value) {
  document.querySelector(selector)?.setAttribute(attribute, value)
}

// The URL decides the language (/ is English, /es is Spanish), so every
// visitor and crawler gets the same content for the same address.
function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => languageFromPath(window.location.pathname))

  function setLang(next) {
    if (next === lang) return
    window.history.pushState(null, '', LANGUAGE_PATHS[next] + window.location.hash)
    setLangState(next)
  }

  useEffect(() => {
    const onPopState = () => setLangState(languageFromPath(window.location.pathname))
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = TITLES[lang]
    setHeadTag('meta[name="description"]', 'content', DESCRIPTIONS[lang])
    setHeadTag('link[rel="canonical"]', 'href', SITE_URL + LANGUAGE_PATHS[lang])
  }, [lang])

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}

export default LanguageProvider
