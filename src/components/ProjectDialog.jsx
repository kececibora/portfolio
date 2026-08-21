import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

// Direction-aware slide: entering card comes from the side you're heading to.
const slide = {
  enter: (dir) => ({ x: dir > 0 ? 56 : -56, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -56 : 56, opacity: 0 }),
}

// Modal project browser: one group of apps, arrows/swipe/keyboard to move
// between them. Transform/opacity only — cheap on low-end phones.
export function ProjectDialog({ group, labels, onClose }) {
  const items = group.items
  const [[index, dir], setState] = useState([0, 0])
  const reduce = useReducedMotion()
  const panelRef = useRef(null)
  const item = items[index]

  const paginate = (d) => setState(([i]) => [(i + d + items.length) % items.length, d])
  const goto = (i) => setState(([prev]) => [i, i > prev ? 1 : -1])

  // keyboard, scroll lock, focus in/out
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') paginate(1)
      else if (e.key === 'ArrowLeft') paginate(-1)
      else if (e.key === 'Tab') {
        const focusable = panelRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        )
        if (!focusable?.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    const prevFocus = document.activeElement
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panelRef.current?.querySelector('button')?.focus({ preventScroll: true })
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      if (prevFocus && prevFocus.focus) prevFocus.focus()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const t = reduce ? { duration: 0 } : { duration: 0.24, ease }

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduce ? undefined : { opacity: 0 }}
      transition={{ duration: 0.18 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-scrim/95 p-3 sm:p-6"
    >
      <motion.div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={group.title}
        onClick={(e) => e.stopPropagation()}
        initial={reduce ? false : { opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={reduce ? undefined : { opacity: 0, scale: 0.97, y: 8 }}
        transition={{ duration: 0.22, ease }}
        className="panel-card flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden bg-panel shadow-card outline-none"
      >
        {/* header */}
        <div className="flex items-center gap-3 border-b border-line bg-panel-2/80 px-4 py-3 sm:px-5">
          <span className="label">{group.title}</span>
          {group.storeUrl && (
            <a
              href={group.storeUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden whitespace-nowrap font-mono text-[11px] text-muted underline-offset-4 transition-colors hover:text-accent hover:underline sm:inline"
            >
              {group.storeLabel} ↗
            </a>
          )}
          <span className="ml-auto whitespace-nowrap font-mono text-xs text-faint">
            {index + 1} / {items.length}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label={labels.close}
            className="btn-3d-dark btn-3d grid h-9 w-9 place-items-center !rounded-lg"
          >
            <X size={16} />
          </button>
        </div>

        {/* slide area */}
        <div className="relative flex-1 overflow-y-auto overflow-x-hidden">
          <AnimatePresence initial={false} custom={dir} mode="wait">
            <motion.div
              key={item.code}
              custom={dir}
              variants={reduce ? undefined : slide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={t}
              drag={reduce ? false : 'x'}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.16}
              onDragEnd={(_, info) => {
                if (info.offset.x < -64) paginate(1)
                else if (info.offset.x > 64) paginate(-1)
              }}
              className="grid touch-pan-y md:grid-cols-[0.85fr_1.15fr]"
            >
              {/* visual side */}
              <div className="relative flex items-center justify-center border-b border-line bg-ink-2 p-5 md:border-b-0 md:border-r">
                <div className="blueprint-grid absolute inset-0 opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.05] to-accent-2/[0.05]" />
                <img
                  src={item.image}
                  alt={item.name}
                  draggable={false}
                  className={`relative z-10 w-auto rounded-xl border border-line/80 object-contain shadow-card ${
                    item.wide ? 'max-h-[26vh] md:max-h-[30vh]' : 'max-h-[30vh] md:max-h-[44vh]'
                  }`}
                />
                {group.imageNote && (
                  <span className="absolute bottom-2 right-3 z-10 max-w-[85%] text-right font-mono text-[9px] leading-tight tracking-wide text-faint/80 sm:text-[10px]">
                    * {group.imageNote}
                  </span>
                )}
              </div>

              {/* text side */}
              <div className="bg-panel p-5 sm:p-6">
                <p className="font-mono text-xs text-accent/80">~/{item.code}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-text sm:text-2xl">{item.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.desc}</p>

                {item.features && (
                  <ul className="mt-4 space-y-2">
                    {item.features.map((f, i) => (
                      <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                        <span className="mt-[9px] h-1 w-1 flex-none rounded-full bg-accent/70" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li key={tag} className="rounded-md border border-line/70 bg-ink/60 px-2 py-0.5 font-mono text-[11px] text-muted">
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {item.status && (
                    <span className="inline-flex items-center gap-2 rounded-lg border border-accent-2/40 bg-accent-2/10 px-3 py-1.5 font-mono text-xs text-accent-2">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-60" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-2" />
                      </span>
                      {item.status}
                    </span>
                  )}
                  {item.links?.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-3d px-4 py-2.5 text-sm"
                    >
                      {link.kind === 'apple'
                        ? 'App Store'
                        : link.kind === 'play'
                          ? 'Google Play'
                          : link.kind === 'site'
                            ? labels.openSite
                            : labels.open}
                      <ArrowUpRight size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* footer: prev / dots / next */}
        <div className="flex items-center justify-between border-t border-line bg-panel-2/60 px-4 py-3 sm:px-5">
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label={labels.prev}
            className="btn-3d btn-3d-dark grid h-10 w-10 place-items-center !rounded-xl"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2">
            {items.map((it, i) => (
              <button
                key={it.code}
                type="button"
                onClick={() => goto(i)}
                aria-label={`${labels.goto}: ${it.name}`}
                aria-current={i === index}
                className="group grid h-7 w-7 place-items-center rounded-full"
              >
                <span
                  aria-hidden
                  className={`h-2 rounded-full transition-all duration-200 ${
                    i === index ? 'w-5 bg-accent' : 'w-2 bg-line group-hover:bg-faint'
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label={labels.next}
            className="btn-3d btn-3d-dark grid h-10 w-10 place-items-center !rounded-xl"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
