import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Section } from './Section'
import { Reveal, stagger, staggerItem } from './Reveal'
import { useLang } from '../i18n/LanguageContext'
import { profile } from '../i18n/content'

export function Contact() {
  const { t } = useLang()
  const c = t.contact
  const reduce = useReducedMotion()

  const infoItems = [
    { icon: Mail, label: c.labels.email, value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: c.labels.phone, value: profile.phone, href: `tel:${profile.phoneHref}` },
    { icon: MapPin, label: c.labels.location, value: c.location, href: null },
  ]

  return (
    <Section id="contact" index={6} eyebrow={c.eyebrow} title={c.title} note={c.lead}>
      <motion.div
        variants={stagger}
        initial={reduce ? 'show' : 'hidden'}
        whileInView="show"
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        className="grid gap-4 sm:grid-cols-3"
      >
        {infoItems.map((it) => {
          const Inner = (
            <>
              <span className="grid h-11 w-11 flex-none place-items-center rounded-xl border border-line bg-ink text-accent transition-colors group-hover:border-accent/40">
                <it.icon size={18} />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">{it.label}</p>
                <p className="truncate text-sm text-text">{it.value}</p>
              </div>
              {it.href && (
                <ArrowUpRight
                  size={15}
                  className="ml-auto flex-none text-faint transition-colors group-hover:text-accent"
                />
              )}
            </>
          )
          const cls =
            'group panel-card flex items-center gap-4 p-5 transition-colors hover:border-accent/30'
          return it.href ? (
            <motion.a key={it.label} variants={staggerItem} href={it.href} className={cls}>
              {Inner}
            </motion.a>
          ) : (
            <motion.div key={it.label} variants={staggerItem} className={cls}>
              {Inner}
            </motion.div>
          )
        })}
      </motion.div>

      <Reveal delay={0.1} className="mt-4 flex flex-col gap-3 sm:flex-row">
        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-5 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
        >
          <Mail size={16} />
          {c.cta}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#a78bfa]/30 bg-[#a78bfa]/10 px-5 py-3.5 text-sm font-medium text-[#c4b5fd] transition-all hover:-translate-y-0.5 hover:border-[#a78bfa]/60 hover:text-white"
        >
          <Github size={16} /> GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-5 py-3.5 text-sm font-medium text-[#7dd3fc] transition-all hover:-translate-y-0.5 hover:border-[#38bdf8]/60 hover:text-white"
        >
          <Linkedin size={16} /> LinkedIn
        </a>
      </Reveal>
    </Section>
  )
}
