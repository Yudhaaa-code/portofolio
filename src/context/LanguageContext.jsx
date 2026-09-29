import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../data/translations'

const LanguageContext = createContext({
  language: 'id',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (key) => key,
})

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      return localStorage.getItem('portfolio_lang') || 'id'
    } catch {
      return 'id'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('portfolio_lang', language)
    } catch {
      // Ignore localStorage write error
    }
    // Set document lang attribute
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (lang) => {
    if (lang === 'id' || lang === 'en') {
      setLanguageState(lang)
    }
  }

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'id' ? 'en' : 'id'))
  }

  /**
   * Helper function t('nav.home') or t('hero.greeting')
   */
  const t = (path) => {
    if (!path) return ''
    const keys = path.split('.')
    let current = translations[language]

    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key]
      } else {
        // Fallback to Indonesian if missing in current language
        let fallback = translations.id
        for (const fbKey of keys) {
          if (fallback && typeof fallback === 'object' && fbKey in fallback) {
            fallback = fallback[fbKey]
          } else {
            return path
          }
        }
        return fallback || path
      }
    }

    return current
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
