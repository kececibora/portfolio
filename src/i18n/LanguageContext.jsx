import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { content } from './content'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'rbk-lang'

// localStorage can be null (Android WebView with DOM storage off) or throw
// (privacy mode / cookies blocked) — never let it crash the first render.
function readStoredLang() {
  try {
    return window.localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

function writeStoredLang(lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    /* storage unavailable — language just won't persist */
  }
}

// first visit: follow the browser's primary language, English for everyone
// else. navigator can be missing pieces in older WebViews — guard it.
function detectLang() {
  try {
    const primary = window.navigator.languages?.[0] || window.navigator.language || ''
    return primary.toLowerCase().startsWith('tr') ? 'tr' : 'en'
  } catch {
    return 'tr'
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'tr'
    const saved = readStoredLang()
    if (saved === 'en' || saved === 'tr') return saved
    return detectLang()
  })

  useEffect(() => {
    writeStoredLang(lang)
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
