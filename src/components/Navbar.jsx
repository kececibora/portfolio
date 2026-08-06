import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import { FileDown, Menu, Moon, Sun, X } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { useScrolled } from '../hooks/useScrolled'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../hooks/useTheme'

const NAV_SECTION_IDS = ['projects', 'experience', 'skills', 'contact']
const OBSERVED_SECTION_IDS = ['top', ...NAV_SECTION_IDS]

export function Navbar() {
  const { t, lang, toggle } = useLang()
  const { theme, toggleTheme } = useTheme()
  const scrolled = useScrolled(20)
  const active = useActiveSection(OBSERVED_SECTION_IDS)
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const links = NAV_SECTION_IDS.map((id) => ({ id, label: t.nav[id] }))

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line/80 bg-ink/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-shell items-center justify-between px-5 sm:px-8">
        {/* monogram */}
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Ramazan Bora Keçeci">
          <img src="/brand-mark.svg" alt="" className="h-10 w-10 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105" />
          <span className="hidden font-mono text-xs uppercase tracking-[0.22em] text-muted sm:block">
            r.bora.keçeci
          </span>
        </a>

        {/* desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'location' : undefined}
                className={`relative rounded-md px-3 py-2 text-sm transition-colors ${
                  active === l.id ? 'text-text' : 'text-muted hover:text-text'
                }`}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-px h-px bg-gradient-to-r from-accent to-accent-2"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* right cluster */}
        <div className="flex items-center gap-2">
          <a
            href="/cv.pdf"
            download
            className="hidden h-9 items-center gap-2 rounded-lg border border-line bg-panel/70 px-3 font-mono text-[11px] text-muted transition-colors hover:border-accent/40 hover:text-text sm:inline-flex"
          >
            <FileDown size={14} className="text-accent" />
            {t.nav.cv}
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.nav.themeLight : t.nav.themeDark}
            title={theme === 'dark' ? t.nav.themeLight : t.nav.themeDark}
            className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-panel text-muted transition-all hover:border-accent/40 hover:text-accent"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                aria-hidden="true"
                initial={{ opacity: 0, rotate: -35, scale: 0.75 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 35, scale: 0.75 }}
                transition={{ duration: 0.18 }}
              >
                {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <button
            onClick={toggle}
            className="flex h-9 items-center rounded-lg border border-line bg-panel px-1 font-mono text-xs"
            aria-label={lang === 'tr' ? 'Dili İngilizce yap' : 'Switch language to Turkish'}
          >
            <span aria-hidden className={`rounded px-2 py-1 transition-colors ${lang === 'tr' ? 'bg-accent/15 text-accent' : 'text-muted'}`}>
              TR
            </span>
            <span aria-hidden className={`rounded px-2 py-1 transition-colors ${lang === 'en' ? 'bg-accent/15 text-accent' : 'text-muted'}`}>
              EN
            </span>
          </button>

          <button
            className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-panel text-text lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={t.nav.menu}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-b border-line bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="mx-auto max-w-shell px-5 py-4 sm:px-8">
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`block border-b border-line/60 py-3 font-display text-lg ${
                      active === l.id ? 'text-accent' : 'text-text'
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/cv.pdf"
                  download
                  onClick={() => setOpen(false)}
                  className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-accent/25 bg-accent/[0.08] px-4 py-3 text-sm font-semibold text-accent"
                >
                  <FileDown size={16} />
                  {t.nav.cv}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-accent via-accent to-accent-2"
        style={{ scaleX: scrollYProgress }}
      />
    </header>
  )
}
