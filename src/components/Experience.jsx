import { Section } from './Section'
import { Reveal } from './Reveal'
import { useLang } from '../i18n/LanguageContext'

export function Experience() {
  const { t } = useLang()
  const e = t.experience

  return (
    <Section id="experience" index={2} eyebrow={e.eyebrow} title={e.title}>
      <div className="relative">
        {/* the spine */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-line to-transparent md:left-[calc(8rem+7px)]" />

        <div className="space-y-10">
          {e.items.map((item, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="grid gap-x-8 gap-y-3 md:grid-cols-[8rem_1fr]">
                {/* period column */}
                <div className="hidden pr-6 text-right md:block">
                  <span className="font-mono text-xs text-muted">{item.period}</span>
                </div>

                {/* content column */}
                <div className="relative pl-8 md:pl-8">
                  {/* node */}
                  <span className="absolute left-0 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full border border-accent/50 bg-ink">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>

                  <div className="panel-card p-5 transition-colors hover:border-accent/30">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h3 className="font-display text-lg font-semibold text-text">{item.role}</h3>
                      <span className="font-mono text-xs text-accent">{item.company}</span>
                    </div>
                    {/* mobile period */}
                    <span className="mt-1 block font-mono text-[11px] text-faint md:hidden">{item.period}</span>

                    <ul className="mt-4 space-y-2.5">
                      {item.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted">
                          <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent/60" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
