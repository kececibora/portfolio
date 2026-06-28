import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { profile } from '../i18n/content'

export function Footer() {
  const { t } = useLang()
  const f = t.footer
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto max-w-shell px-5 py-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-panel font-display text-sm font-bold text-accent">
                RBK
              </span>
              <span className="font-display text-base font-semibold text-text">Ramazan Bora Keçeci</span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-muted">{f.built}</p>
          </div>

          <div className="flex items-center gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-xl border border-[#a78bfa]/30 bg-[#a78bfa]/10 text-[#c4b5fd] transition-all hover:-translate-y-0.5 hover:border-[#a78bfa]/60 hover:text-white">
              <Github size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-xl border border-[#38bdf8]/30 bg-[#38bdf8]/10 text-[#7dd3fc] transition-all hover:-translate-y-0.5 hover:border-[#38bdf8]/60 hover:text-white">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="grid h-10 w-10 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-white">
              <Mail size={18} />
            </a>
            <a href="#top" aria-label={f.backToTop} className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-panel/50 text-muted transition-colors hover:border-accent/40 hover:text-accent">
              <ArrowUp size={18} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 font-mono text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Ramazan Bora Keçeci. {f.rights}</span>
          <span>Ankara, Türkiye · 39.93°N 32.86°E</span>
        </div>
      </div>
    </footer>
  )
}
