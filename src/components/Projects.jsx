import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronRight, Maximize2, X } from 'lucide-react'
import { Section } from './Section'
import { stagger, staggerItem } from './Reveal'
import { useLang } from '../i18n/LanguageContext'
import { ProjectDialog } from './ProjectDialog'

// Fanned stack of the group's first three screenshots — pure transforms,
// spreads slightly on hover.
function CardFan({ items, note }) {
  const [left, center, right] = items.slice(0, 3)
  const frame =
    'absolute rounded-[1.1rem] border border-line/80 shadow-card transition-transform duration-500 will-change-transform'
  return (
    <div className="relative h-52 overflow-hidden border-b border-line bg-ink-2 sm:h-56">
      <div className="blueprint-grid absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.06] to-accent-2/[0.06]" />

      {left && (
        <img
          src={left.image}
          alt=""
          loading="lazy"
          className={`${frame} left-[7%] top-10 w-[32%] max-w-[180px] -rotate-6 group-hover:-translate-x-1 group-hover:-rotate-[9deg]`}
        />
      )}
      {right && (
        <img
          src={right.image}
          alt=""
          loading="lazy"
          className={`${frame} right-[7%] top-10 w-[32%] max-w-[180px] rotate-6 group-hover:translate-x-1 group-hover:rotate-[9deg]`}
        />
      )}
      {center && (
        <img
          src={center.image}
          alt=""
          loading="lazy"
          className={`${frame} left-1/2 top-5 z-10 w-[36%] max-w-[200px] -translate-x-1/2 group-hover:-translate-y-1.5`}
        />
      )}

      <div className="absolute inset-x-0 bottom-0 z-20 h-16 bg-gradient-to-t from-ink-2 via-ink-2/70 to-transparent" />

      {note && (
        <span className="absolute bottom-2 right-3 z-20 max-w-[85%] text-right font-mono text-[9px] leading-tight tracking-wide text-faint/80 sm:text-[10px]">
          * {note}
        </span>
      )}
    </div>
  )
}

export function Projects() {
  const { t } = useLang()
  const p = t.projects
  const reduce = useReducedMotion()
  const [openGroup, setOpenGroup] = useState(null) // resolved group | null
  const [lightbox, setLightbox] = useState(null) // { src, alt } | null
  const lightboxCloseRef = useRef(null)

  const byCode = Object.fromEntries(p.items.map((it) => [it.code, it]))
  const groups = p.groups.map((g) => ({ ...g, items: g.codes.map((c) => byCode[c]).filter(Boolean) }))
  const esp32 = byCode['hardware/esp32-lab']

  // lightbox: close on Escape + lock background scroll while open
  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      else if (e.key === 'Tab') {
        e.preventDefault()
        lightboxCloseRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    lightboxCloseRef.current?.focus({ preventScroll: true })
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
      lightbox.trigger?.focus({ preventScroll: true })
    }
  }, [lightbox])

  return (
    <Section id="projects" index={1} eyebrow={p.eyebrow} title={p.title} note={p.note}>
      {/* the two families */}
      <motion.div
        variants={stagger}
        initial={reduce ? 'show' : 'hidden'}
        whileInView="show"
        viewport={{ once: true, margin: '0px 0px -8% 0px' }}
        className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {groups.map((g) => (
          <motion.article
            key={g.key}
            variants={staggerItem}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-panel/50 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-glow focus-within:border-accent/50 focus-within:shadow-glow"
          >
            <button
              type="button"
              onClick={() => setOpenGroup(g)}
              aria-label={`${g.title} — ${p.cta}`}
              className="absolute inset-0 z-30 cursor-pointer rounded-2xl focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
            >
              <span className="sr-only">{p.cta}</span>
            </button>
            <CardFan items={g.items} note={g.imageNote} />

            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-lg font-semibold text-text">{g.title}</h3>
                <span className="flex-none rounded-md border border-line/70 bg-ink/60 px-2 py-0.5 font-mono text-[11px] text-muted">
                  {g.items.length} {g.itemsSuffix || p.appsSuffix}
                </span>
              </div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{g.blurb}</p>

              <span aria-hidden="true" className="btn-3d mt-5 w-fit px-4 py-2.5 text-sm">
                {p.cta}
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* hardware sheet — stays a wide standalone card */}
      {esp32 && (
        <motion.article
          variants={staggerItem}
          initial={reduce ? 'show' : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -8% 0px' }}
          className="group relative mt-5 overflow-hidden rounded-2xl border border-line bg-panel/50 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:shadow-glow"
        >
          <div className="relative h-40 overflow-hidden border-b border-line bg-ink-2 sm:h-44">
            <div className="blueprint-grid absolute inset-0 opacity-70" />
            <img
              src={esp32.image}
              alt={esp32.name}
              loading="lazy"
              className="absolute inset-0 m-auto max-h-[80%] w-[92%] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <span className="absolute left-4 top-4 z-10 font-mono text-[11px] tracking-[0.2em] text-faint">
              FIG. HW
            </span>
            <button
              type="button"
              onClick={(event) => setLightbox({ src: esp32.image, alt: esp32.name, trigger: event.currentTarget })}
              aria-label={`${esp32.name} — ${p.enlarge}`}
              className="absolute inset-0 z-20 flex items-start justify-end p-3 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
            >
              <span className="flex items-center gap-1 rounded-lg border border-line/70 bg-ink/80 px-2 py-1 font-mono text-[10px] tracking-wide text-muted opacity-100 backdrop-blur-sm transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
                <Maximize2 size={12} />
                {p.enlarge}
              </span>
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 p-5">
            <div className="min-w-0">
              <h3 className="font-display text-lg font-semibold text-text">{esp32.name}</h3>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted">{esp32.desc}</p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {esp32.tags.map((tag) => (
                <li key={tag} className="rounded-md border border-line/70 bg-ink/60 px-2 py-0.5 font-mono text-[11px] text-muted">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      )}

      {/* group browser dialog */}
      <AnimatePresence>
        {openGroup && (
          <ProjectDialog
            group={openGroup}
            labels={p.dialog}
            onClose={() => setOpenGroup(null)}
          />
        )}
      </AnimatePresence>

      {/* lightbox for the hardware sheet */}
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-scrim/90 p-4 backdrop-blur-md sm:p-8"
          >
            <button
              ref={lightboxCloseRef}
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
