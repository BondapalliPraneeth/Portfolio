import { useRef } from 'react'
import { motion, useScroll, useReducedMotion } from 'motion/react'
import { experience, experienceStack } from '../data/experience'
import { Reveal } from '../components/ui/Reveal'

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="wrap">
        <Reveal className="mb-10"><p className="eyebrow mb-3">Experience</p><h2 className="display text-[clamp(1.9rem,4vw,3rem)]">Where I’ve been <em>working</em></h2></Reveal>
        <div ref={ref} className="relative pl-8 md:pl-12">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-line" />
          <motion.div className="absolute left-0 top-0 w-px origin-top bg-accent" style={{ height: '100%', scaleY: reduced ? 1 : scrollYProgress }} />
          {experience.map((r) => (
            <Reveal key={r.title}>
              <article className="relative">
                <span className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_6px_var(--color-ink)] md:-left-[53px]" />
                <p className="eyebrow">{r.start} — {r.end}</p>
                <h3 className="display mt-3 text-2xl md:text-3xl">{r.title}</h3>
                <p className="mt-2 text-silver">{r.org}</p>
                <ul className="mt-8 max-w-3xl space-y-3 text-mute">
                  {r.points.map((p) => <li key={p} className="flex gap-3"><span className="mt-2.5 h-px w-4 shrink-0 bg-line" />{p}</li>)}
                </ul>
                <p className="mt-8 font-mono text-xs text-mute">{experienceStack.join(' · ')}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
