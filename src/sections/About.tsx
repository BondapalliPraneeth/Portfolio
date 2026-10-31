import { ArrowRight } from 'lucide-react'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { skillGroups } from '../data/skills'
import { Reveal } from '../components/ui/Reveal'

// Only counts derivable from the content files.
const stats = [
  { n: String(projects.length), label: 'Featured projects' },
  { n: String(skillGroups.length), label: 'Skill areas' },
  { n: '3', label: 'Cloud platforms' },
]

export default function About() {
  const { about } = profile
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="wrap">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal className="min-w-0">
            <div className="avatar-square relative mx-auto aspect-square w-full max-w-sm overflow-hidden">
              <img src="/workspace.png" width={1024} height={576} loading="lazy" decoding="async"
                alt={`Portrait of ${profile.name}`} className="h-full w-full object-cover object-[42%_50%]" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="min-w-0">
            <p className="eyebrow mb-3">About me</p>
            <h2 className="display text-[clamp(1.9rem,4vw,3rem)] leading-tight">Turning Ideas Into <em>Intelligent Systems</em></h2>
            <div className="mt-5 space-y-4 leading-relaxed text-mute">
              {about.paragraphs.map((t) => <p key={t}>{t}</p>)}
            </div>
            <ul className="mt-7 grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <li key={s.label} className="card px-3 py-4 text-center">
                  <span className="block text-2xl font-semibold text-strong">{s.n}</span>
                  <span className="text-xs text-mute">{s.label}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-mute">{profile.education[0].degree} · {profile.education[0].school} · {profile.education[0].years}</p>
            <a href="#contact" className="btn-grad mt-7 inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-medium transition-all hover:gap-3">
              Let’s Talk <ArrowRight size={15} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
