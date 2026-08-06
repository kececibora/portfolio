import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, FileDown, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { profile } from '../i18n/content'
import { ArchitectureMap } from './ArchitectureMap'

function RotatingRole({ roles, reduce }) {
  const [i, setI] = useState(0)

  useEffect(() => {
    if (reduce) return undefined
    const id = setInterval(() => setI((value) => (value + 1) % roles.length), 2800)
    return () => clearInterval(id)
  }, [reduce, roles.length])

  return (
    <span
      className="relative block h-[2.8em] w-full overflow-hidden sm:h-[1.4em]"
      aria-label={roles[0]}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={reduce ? 'static' : i}
          aria-hidden="true"
          initial={reduce ? false : { y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={reduce ? undefined : { y: '-100%', opacity: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 top-0 font-semibold leading-[1.35] text-accent-gradient sm:whitespace-nowrap"
        >
          {roles[reduce ? 0 : i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

const ease = [0.22, 1, 0.36, 1]
const rise = {
  hidden: { opacity: 0, y: 22 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay, ease } }),
}

export function Hero() {
  const { t } = useLang()
  const h = t.hero
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative mx-auto max-w-shell px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:pt-36"
    >
      <div aria-hidden className="hero-orbit absolute right-[8%] top-20 -z-10 hidden h-72 w-72 rounded-full border border-dashed border-accent/10 lg:block" />

      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div>
          <motion.div
            variants={rise}
            initial={reduce ? false : 'hidden'}
            animate="show"
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-line bg-panel/60 px-3.5 py-1.5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2 flex-none">
              {!reduce && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="min-w-0 font-mono text-[11px] text-muted sm:text-xs">
              <MapPin size={12} className="mr-1 inline -translate-y-px text-accent/70" />
              {h.tag}
            </span>
          </motion.div>

          <motion.h1
            id="hero-title"
            custom={0.08}
            variants={rise}
            initial={reduce ? false : 'hidden'}
            animate="show"
            className="mt-6 font-display text-[2.65rem] font-bold leading-[1.01] tracking-[-0.045em] text-text sm:text-6xl lg:text-[4rem]"
          >
            <span className="text-gradient">Ramazan Bora</span>
            <br />
            <span className="text-gradient">Keçeci</span>
          </motion.h1>

          <motion.p
            custom={0.16}
            variants={rise}
            initial={reduce ? false : 'hidden'}
            animate="show"
            className="mt-5 font-display text-xl text-muted sm:text-2xl"
          >
            <RotatingRole roles={h.roles} reduce={reduce} />
          </motion.p>

          <motion.p
            custom={0.24}
            variants={rise}
            initial={reduce ? false : 'hidden'}
            animate="show"
            className="mt-5 max-w-xl text-[15px] leading-[1.75] text-muted sm:text-base"
          >
            {h.lead}
          </motion.p>

          <motion.div
            custom={0.32}
            variants={rise}
            initial={reduce ? false : 'hidden'}
            animate="show"
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a href="#projects" className="btn-3d group w-full px-5 py-3 text-sm sm:w-auto">
              {h.ctaProjects}
              <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-line bg-panel/60 px-5 py-3 text-sm font-medium text-text backdrop-blur-sm transition-colors hover:border-accent/40 sm:w-auto"
            >
              <Mail size={16} className="text-accent" />
              {h.ctaContact}
            </a>
          </motion.div>

          <motion.div
            custom={0.4}
            variants={rise}
            initial={reduce ? false : 'hidden'}
            animate="show"
            className="mt-7 flex flex-wrap items-center gap-2.5"
          >
            <a href="/cv.pdf" download className="btn-cv">
              <FileDown size={16} className="text-accent" />
              {h.ctaCv}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="social-icon social-icon-violet"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-icon social-icon-blue"
            >
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="social-icon social-icon-cyan">
              <Mail size={18} />
            </a>
            <span className="ml-1 hidden font-mono text-xs text-faint sm:inline">@kececibora</span>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.28, ease }}
          className="relative"
        >
          <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-gradient-to-tr from-accent/10 via-transparent to-accent-2/10 blur-2xl" />
          <ArchitectureMap copy={h.architecture} facts={h.metrics} />
        </motion.div>
      </div>
    </section>
  )
}
