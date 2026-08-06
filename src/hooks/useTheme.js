import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'rbk-theme'
const THEMES = new Set(['dark', 'light'])

function getInitialTheme() {
  if (typeof document === 'undefined') return 'light'
  return THEMES.has(document.documentElement.dataset.theme)
    ? document.documentElement.dataset.theme
    : 'light'
}

function applyTheme(theme, persist = false) {
  if (!THEMES.has(theme) || typeof document === 'undefined') return

  const root = document.documentElement
  root.dataset.theme = theme
  root.style.colorScheme = theme

  const themeColor = document.querySelector('meta[name="theme-color"]')
  themeColor?.setAttribute('content', theme === 'dark' ? '#0A0C10' : '#F5F7FA')

  if (persist) {
    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Storage can be disabled in embedded browsers; the theme still works.
    }
  }
}

export function useTheme() {
  const [theme, setThemeState] = useState(getInitialTheme)

  const setTheme = useCallback((nextTheme, persist = true) => {
    if (!THEMES.has(nextTheme)) return
    applyTheme(nextTheme, persist)
    setThemeState(nextTheme)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [setTheme, theme])

  useEffect(() => {
    const onStorage = (event) => {
      if (event.key === STORAGE_KEY && THEMES.has(event.newValue)) {
        setTheme(event.newValue, false)
      }
    }

    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [setTheme])

  return { theme, toggleTheme }
}
