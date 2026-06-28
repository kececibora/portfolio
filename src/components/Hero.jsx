import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Mail, Github, Linkedin, MapPin } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { profile } from '../i18n/content'
import { Terminal } from './Terminal'

function RotatingRole({ roles }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % roles.length), 2600)
    return () => clearInterval(id)
  }, [roles.length])

  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-accent-gradient whitespace-nowrap font-semibold"
        >
          {roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

const ease = [0.22, 1, 0.36, 1]
const rise = {
  hidden: { opacity: 0, y: 22 },
  show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d, ease } }),
}

export function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section id="top" className="relative mx-auto max-w-shell px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:pt-44">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* left: copy */}
        <div>
          <motion.div
            variants={rise}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-3.5 py-1.5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs text-muted">
              <MapPin size={12} className="mr-1 inline -translate-y-px text-accent/70" />
              {h.tag}
            </span>
          </motion.div>

          <motion.h1
            custom={0.08}
            variants={rise}
            initial="hidden"
            animate="show"
            className="mt-6 font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight text-text sm:text-6xl lg:text-[4.1rem]"
          >
            <span className="text-gradient">Ramazan Bora</span>
            <br />
            <span className="text-gradient">Keçeci</span>
          </motion.h1>

          <motion.p
            custom={0.16}
            variants={rise}
            initial="hidden"
            animate="show"
            className="mt-5 font-display text-xl text-muted sm:text-2xl"
          >
            <RotatingRole roles={h.roles} />
          </motion.p>

          <motion.p
            custom={0.24}
            variants={rise}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base"
          >
            {h.lead}
          </motion.p>

          <motion.div
            custom={0.32}
            variants={rise}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              {h.ctaProjects}
              <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel/60 px-5 py-3 text-sm font-medium text-text backdrop-blur-sm transition-colors hover:border-accent/40"
            >
              <Mail size={16} className="text-accent" />
              {h.ctaContact}
            </a>
          </motion.div>

          <motion.div
            custom={0.4}
            variants={rise}
            initial="hidden"
            animate="show"
            className="mt-8 flex items-center gap-3"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-xl border border-[#a78bfa]/30 bg-[#a78bfa]/10 text-[#c4b5fd] transition-all hover:-translate-y-0.5 hover:border-[#a78bfa]/60 hover:text-white hover:shadow-[0_6px_20px_-6px_rgba(167,139,250,0.5)]"
            >
              <Github size={19} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-xl border border-[#38bdf8]/30 bg-[#38bdf8]/10 text-[#7dd3fc] transition-all hover:-translate-y-0.5 hover:border-[#38bdf8]/60 hover:text-white hover:shadow-[0_6px_20px_-6px_rgba(56,189,248,0.5)]"
            >
              <Linkedin size={19} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-white hover:shadow-[0_6px_20px_-6px_rgba(63,224,255,0.5)]"
            >
              <Mail size={19} />
            </a>
            <span className="ml-1 font-mono text-xs text-faint">@kececibora</span>
          </motion.div>
        </div>

        {/* right: terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-accent/10 via-transparent to-accent-2/10 blur-2xl" />
          <Terminal />
          {/* dimension annotation, blueprint flavor */}
          <div className="mt-3 flex items-center justify-between px-1 font-mono text-[10px] tracking-[0.2em] text-faint">
            <span>FIG. 01 — BUILD PIPELINE</span>
            <span>FLUTTER · FIREBASE · NODE · ERP</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
