import { motion, useReducedMotion } from 'framer-motion'

// Scroll-triggered reveal. When the user prefers reduced motion we render the
// content statically (no transform, no fade) — accessibility floor.
export function Reveal({ children, delay = 0, y = 24, className = '', as = 'div' }) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}

// Stagger container + item helpers for grids/lists.
export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}
