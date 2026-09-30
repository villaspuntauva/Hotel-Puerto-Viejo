import { createContext, useContext } from 'react'

export const LANGUAGES = ['en', 'es']

export const LanguageContext = createContext({ lang: 'en', setLang: () => {} })

export function useLanguage() {
  return useContext(LanguageContext)
}

// Picks the current language's entry from a component's `{ en: {...}, es: {...} }` copy.
export function useCopy(copy) {
  const { lang } = useLanguage()
  return copy[lang]
}
