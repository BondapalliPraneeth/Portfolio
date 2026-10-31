import { motion, useReducedMotion } from 'motion/react'
import { Download, Mail, Braces, Database, Mic, Bot } from 'lucide-react'
import { profile } from '../data/profile'
import { Github, Gmail, Linkedin } from '../components/ui/Icons'

const floaters = [
  { Icon: Braces, pos: 'left-2 top-10 md:-left-2', delay: '0s' },
  { Icon: Database, pos: 'right-0 top-4', delay: '.8s' },
  { Icon: Mic, pos: 'right-2 bottom-16', delay: '1.6s' },
  { Icon: Bot, pos: 'left-0 bottom-24', delay: '2.2s' },
]

export default function Hero() {
  const reduced = !!useReducedMotion()
  const rise = (d: number) => ({
    initial: reduced ? false as const : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay: 0.2 + d, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section id="home" className="relative isolate overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
      <div aria-hidden className="absolute -left-40 -top-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-accent/30 blur-[120px]" />
      <div aria-hidden className="absolute -right-32 top-1/3 -z-10 h-[28rem] w-[28rem] rounded-full bg-blue/20 blur-[120px]" />
      <div className="wrap grid items-center gap-12 md:grid-cols-2">
        <div className="min-w-0">
          <motion.div {...rise(0)} className="flex items-center gap-2">
            <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full border border-line text-silver transition-colors hover:border-accent hover:text-strong"><Github size={16} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="grid h-11 w-11 place-items-center rounded-full border border-line text-silver transition-colors hover:border-accent hover:text-strong"><Gmail size={16} /></a>
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-line text-silver transition-colors hover:border-accent hover:text-strong"><Linkedin size={16} /></a>
          </motion.div>
          <h1 className="display mt-6 text-[clamp(2.4rem,6vw,4.4rem)] leading-[1.08]">
            <motion.span {...rise(0.1)} className="block">Hi, I’m</motion.span>
            <motion.span {...rise(0.2)} className="grad-text block">{profile.name}</motion.span>
          </h1>
          <motion.p {...rise(0.3)} className="mt-3 text-xl font-medium text-accent-soft md:text-2xl">{profile.title}</motion.p>
          <motion.p {...rise(0.4)} className="mt-5 max-w-md text-base leading-relaxed text-mute">{profile.intro}</motion.p>
          <motion.ul {...rise(0.45)} aria-label="Core skills" className="mt-5 flex flex-wrap gap-2">
            {profile.heroTags.map((t) => <li key={t} className="rounded-full border border-line bg-panel/60 px-3 py-1 text-xs text-silver">{t}</li>)}
          </motion.ul>
          <motion.div {...rise(0.55)} className="mt-8 flex flex-wrap items-center gap-4">
            {profile.resumePath && (
              <a href={profile.resumePath} download="Bondapalli-Praneeth-Resume.pdf" className="btn-grad inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm font-medium transition-transform hover:-translate-y-0.5">
                <Download size={16} /> Download CV
              </a>
            )}
            <a href="#contact" className="inline-flex h-12 items-center gap-2 rounded-full border border-accent/70 px-7 text-sm font-medium text-strong transition-colors hover:bg-accent/15"><Mail size={16} /> Hire Me</a>
          </motion.div>
        </div>

        <motion.div {...rise(0.25)} className="relative mx-auto w-full max-w-md">
          <div className="avatar-ring relative mx-auto aspect-square w-[82%] overflow-hidden">
            <img src="/portrait.jpg" width={1403} height={1599} fetchPriority="high" decoding="async" alt={`Portrait of ${profile.name}`} className="h-full w-full object-cover object-[50%_20%]" />
          </div>
          {floaters.map(({ Icon, pos, delay }) => (
            <span key={pos} aria-hidden style={{ animationDelay: delay }}
              className={`absolute ${pos} grid h-14 w-14 place-items-center rounded-2xl border border-accent/40 bg-graphite/80 text-accent-soft shadow-[0_10px_30px_-8px_rgba(139,92,246,.7)] backdrop-blur motion-safe:animate-[float_5s_ease-in-out_infinite]`}>
              <Icon size={24} />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
