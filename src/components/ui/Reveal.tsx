import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHead({ n, label, title, className = '' }: { n: string; label: string; title: ReactNode; className?: string }) {
  return (
    <Reveal className={`mb-14 md:mb-20 ${className}`}>
      <p className="eyebrow mb-5 flex items-center gap-3"><span className="text-accent">{n}</span><span className="h-px w-8 bg-line" />{label}</p>
      <h2 className="display text-[clamp(2.25rem,6vw,4.5rem)] max-w-4xl">{title}</h2>
    </Reveal>
  )
}
