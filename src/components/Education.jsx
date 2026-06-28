import { GraduationCap, Award } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Section } from './Section'
import { stagger, staggerItem } from './Reveal'
import { useLang } from '../i18n/LanguageContext'

export function Education() {
  const { t } = useLang()
  const ed = t.education
  const co = t.courses
  const reduce = useReducedMotion()

  return (
    <>
      <Section id="education" index={4} eyebrow={ed.eyebrow} title={ed.title}>
        <motion.div
          variants={stagger}
          initial={reduce ? 'show' : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {ed.items.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="panel-card flex gap-4 p-5 transition-colors hover:border-accent/30"
            >
              <span className="grid h-10 w-10 flex-none place-items-center rounded-xl border border-line bg-ink text-accent">
                <GraduationCap size={18} />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold leading-snug text-text">{item.school}</h3>
                <p className="mt-1 text-sm leading-snug text-muted">{item.program}</p>
                <span className="mt-2 inline-block font-mono text-[11px] text-faint">{item.period}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section id="courses" index={5} eyebrow={co.eyebrow} title={co.title} className="pt-0">
        <motion.div
          variants={stagger}
          initial={reduce ? 'show' : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {co.items.map((c, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="group flex items-center gap-3 rounded-xl border border-line bg-panel/50 px-4 py-3.5 backdrop-blur-sm transition-colors hover:border-accent/30"
            >
              <Award size={16} className="flex-none text-accent/70" />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-text">{c.name}</p>
                <p className="font-mono text-[11px] text-faint">{c.provider}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  )
}
