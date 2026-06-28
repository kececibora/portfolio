import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { content } from './content'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'rbk-lang'

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'tr'
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return saved === 'en' || saved === 'tr' ? saved : 'tr'
  })

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((l) => (l === 'tr' ? 'en' : 'tr')),
      t: content[lang],
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
