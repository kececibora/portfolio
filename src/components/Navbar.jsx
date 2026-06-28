import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { useScrolled } from '../hooks/useScrolled'
import { useActiveSection } from '../hooks/useActiveSection'

const SECTION_IDS = ['skills', 'experience', 'projects', 'contact']

export function Navbar() {
  const { t, lang, toggle } = useLang()
  const scrolled = useScrolled(20)
  const active = useActiveSection(SECTION_IDS)
  const [open, setOpen] = useState(false)

  const links = SECTION_IDS.map((id) => ({ id, label: t.nav[id] }))

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line/80 bg-ink/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-shell items-center justify-between px-5 sm:px-8">
        {/* monogram */}
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Ramazan Bora Keçeci">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-panel font-display text-sm font-bold text-accent transition-colors group-hover:border-accent/50">
            RBK
          </span>
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
          <button
            onClick={toggle}
            className="flex items-center rounded-lg border border-line bg-panel px-1 py-1 font-mono text-xs"
            aria-label="Toggle language"
          >
            <span className={`rounded px-2 py-1 transition-colors ${lang === 'tr' ? 'bg-accent/15 text-accent' : 'text-muted'}`}>
              TR
            </span>
            <span className={`rounded px-2 py-1 transition-colors ${lang === 'en' ? 'bg-accent/15 text-accent' : 'text-muted'}`}>
              EN
            </span>
          </button>

          <button
            className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-panel text-text lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
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
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
