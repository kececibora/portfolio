import { motion, useReducedMotion } from 'framer-motion'
import { Smartphone, Server, Cloud, Boxes, Cpu, Sparkles, LayoutDashboard } from 'lucide-react'
import { Section } from './Section'
import { stagger, staggerItem } from './Reveal'
import { useLang } from '../i18n/LanguageContext'

const ICONS = [Smartphone, Server, Cloud, Boxes, Cpu, Sparkles, LayoutDashboard]

export function Skills() {
  const { t } = useLang()
  const s = t.skills
  const reduce = useReducedMotion()

  return (
    <Section id="skills" index={1} eyebrow={s.eyebrow} title={s.title} note={s.note}>
      <motion.div
        variants={stagger}
        initial={reduce ? 'show' : 'hidden'}
        whileInView="show"
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {s.categories.map((cat, i) => {
          const Icon = ICONS[i % ICONS.length]
          return (
            <motion.article
              key={cat.name}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-line bg-panel/60 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow"
            >
              {/* corner index */}
              <span className="absolute right-4 top-4 font-mono text-[11px] text-faint transition-colors group-hover:text-accent/70">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-ink text-accent transition-colors group-hover:border-accent/40">
                  <Icon size={18} />
                </span>
                <h3 className="font-display text-base font-semibold text-text">{cat.name}</h3>
              </div>

              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line/70 bg-ink/60 px-2.5 py-1 font-mono text-[11.5px] text-muted transition-colors group-hover:border-line"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          )
        })}
      </motion.div>
    </Section>
  )
}
