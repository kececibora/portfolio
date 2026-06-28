import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Maximize2, X } from 'lucide-react'
import { Section } from './Section'
import { stagger, staggerItem } from './Reveal'
import { useLang } from '../i18n/LanguageContext'

export function Projects() {
  const { t } = useLang()
  const p = t.projects
  const reduce = useReducedMotion()
  const [lightbox, setLightbox] = useState(null) // { src, alt } | null

  // close on Escape + lock background scroll while open
  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => e.key === 'Escape' && setLightbox(null)
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [lightbox])

  return (
    <Section id="projects" index={3} eyebrow={p.eyebrow} title={p.title}>
      <motion.div
        variants={stagger}
        initial={reduce ? 'show' : 'hidden'}
        whileInView="show"
        viewport={{ once: true, margin: '0px 0px -8% 0px' }}
        className="grid gap-5 md:grid-cols-2"
      >
        {p.items.map((proj, i) => (
          <motion.article
            key={proj.name}
            variants={staggerItem}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-panel/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-glow"
          >
            {/* media: real screenshot (device peek), wide diagram, or blueprint placeholder */}
            <div className="relative h-44 overflow-hidden border-b border-line bg-ink-2">
              <div className="blueprint-grid absolute inset-0 opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.06] to-accent-2/[0.06]" />

              {proj.image && proj.wide ? (
                <img
                  src={proj.image}
                  alt={proj.name}
                  loading="lazy"
                  className="absolute inset-0 m-auto max-h-[78%] w-[92%] object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
              ) : proj.image ? (
                <img
                  src={proj.image}
                  alt={proj.name}
                  loading="lazy"
                  className="absolute left-1/2 top-7 w-[44%] max-w-[224px] -translate-x-1/2 rounded-[1.4rem] border border-line/80 shadow-card transition-transform duration-500 group-hover:-translate-y-1.5"
                />
              ) : (
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-accent/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-scan" />
              )}

              <span className="absolute left-4 top-4 z-10 font-mono text-[11px] tracking-[0.2em] text-faint">
                FIG.{String(i + 1).padStart(2, '0')}
              </span>
              {proj.image && !proj.wide && (
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink-2 via-ink-2/70 to-transparent" />
              )}
              <span className="absolute bottom-4 left-4 z-10 font-mono text-sm text-accent/80">
                ~/{proj.code}
              </span>

              {/* click-to-enlarge overlay */}
              {proj.image && (
                <button
                  type="button"
                  onClick={() => setLightbox({ src: proj.image, alt: proj.name })}
                  aria-label={`${proj.name} — ${p.enlarge}`}
                  className="absolute inset-0 z-20 flex items-start justify-end p-3 outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span className="flex items-center gap-1 rounded-lg border border-line/70 bg-ink/70 px-2 py-1 font-mono text-[10px] tracking-wide text-muted opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <Maximize2 size={12} />
                    {p.enlarge}
                  </span>
                </button>
              )}
            </div>

            {/* body */}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-display text-lg font-semibold text-text">{proj.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{proj.desc}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {proj.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-line/70 bg-ink/60 px-2 py-0.5 font-mono text-[11px] text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {proj.url && (
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-text"
                >
                  {p.detail}
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* lightbox dialog */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.alt}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md sm:p-8"
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label={p.close}
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-xl border border-line bg-panel/70 text-muted transition-colors hover:border-accent/40 hover:text-accent"
            >
              <X size={18} />
            </button>
            <motion.img
              src={lightbox.src}
              alt={lightbox.alt}
              onClick={(e) => e.stopPropagation()}
              initial={reduce ? false : { scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={reduce ? undefined : { scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[90vh] max-w-[96vw] rounded-xl border border-line bg-ink-2 object-contain shadow-card"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
