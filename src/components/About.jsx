import { Section } from './Section'
import { Reveal } from './Reveal'
import { useLang } from '../i18n/LanguageContext'

export function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <Section id="about" index={1} eyebrow={a.eyebrow} title={a.title}>
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5">
          {a.paragraphs.map((p, i) => (
            <p key={i} className="text-[15px] leading-[1.85] text-muted sm:text-base">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="space-y-4">
          {a.facts.map((f, i) => (
            <div
              key={i}
              className="panel-card crop flex items-baseline gap-4 px-5 py-5"
            >
              <span className="font-display text-3xl font-bold text-accent-gradient">{f.k}</span>
              <span className="text-sm leading-snug text-muted">{f.v}</span>
            </div>
          ))}
          <div className="flex items-center gap-3 px-1 pt-1 font-mono text-[11px] tracking-[0.2em] text-faint">
            <span className="h-px flex-1 bg-line" />
            CIVIL ENG → SOFTWARE
            <span className="h-px flex-1 bg-line" />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
