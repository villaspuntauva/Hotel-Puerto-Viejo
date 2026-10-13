import { createContext, useContext } from 'react'

export const LANGUAGES = ['en', 'es']

export const SITE_URL = 'https://hotelpuertoviejo.com'

// Each language has its own URL so search engines can index both versions.
export const LANGUAGE_PATHS = { en: '/', es: '/es' }

export function languageFromPath(pathname) {
  return /^\/es(\/|$)/.test(pathname) ? 'es' : 'en'
}

export const LanguageContext = createContext({ lang: 'en', setLang: () => {} })

export function useLanguage() {
  return useContext(LanguageContext)
}

// Picks the current language's entry from a component's `{ en: {...}, es: {...} }` copy.
export function useCopy(copy) {
  const { lang } = useLanguage()
  return copy[lang]
}

// Colones per US dollar, used to show every price in the visitor's language's
// currency: dollars in English, colones in Spanish. Update when the rate drifts.
const CRC_PER_USD = 450

// Formats an amount for a language, converting it if it was set in the other
// currency. Converted dollars round to whole dollars, converted colones to ₡100.
export function formatPrice(amount, currency, lang) {
  if (lang === 'es') {
    const colones = currency === 'CRC' ? amount : Math.round((amount * CRC_PER_USD) / 100) * 100
    return `₡${colones.toLocaleString('en-US').replaceAll(',', '.')}`
  }
  if (currency === 'USD') return `$${amount.toFixed(2)}`
  return `$${Math.round(amount / CRC_PER_USD)}`
}
