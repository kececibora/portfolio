import { Reveal } from './Reveal'

// Shared section shell with the blueprint "drawing label" header:
//   §0X — EYEBROW  ······························
//   Big display title
//
// `index` is the drawing sheet number (zero-padded), a real structural device:
// the page reads top-to-bottom like a set of engineering sheets.
export function Section({ id, index, eyebrow, title, note, children, className = '' }) {
  return (
    <section id={id} className={`relative mx-auto max-w-shell px-5 py-24 sm:px-8 md:py-28 ${className}`}>
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="label whitespace-nowrap">
            §{String(index).padStart(2, '0')} — {eyebrow}
          </span>
          <span className="hairline flex-1" />
        </div>
        <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-text sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {note && <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">{note}</p>}
      </Reveal>

      <div className="mt-12">{children}</div>
    </section>
  )
}
